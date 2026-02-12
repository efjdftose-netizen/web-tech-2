import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentsService } from '../../services/students/students.service';
import { CreateStudentPayload } from '../../models/student.model';

@Component({
  selector: 'app-create-student',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.scss']
})
export class CreateStudentComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private studentsService: StudentsService
  ) {
    this.form = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: [null, Validators.required],
      course: ['', Validators.required],
      year_level: [null, Validators.required],
      gpa: [0, Validators.required],
      enrollment_status: ['Active']
    });
  }

  async createStudent() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const raw = this.form.value as any;
    const payload: CreateStudentPayload = {
      first_name: raw.first_name,
      last_name: raw.last_name,
      email: raw.email,
      age: Number(raw.age),
      course: raw.course,
      year_level: Number(raw.year_level),
      gpa: Number(raw.gpa),
      enrollment_status: raw.enrollment_status === 'Inactive' ? 'Inactive' : 'Active'
    };

    console.log('Submitting student payload:', payload);

    this.studentsService.createStudent(payload).subscribe({
      next: () => this.router.navigate(['/students']),
      error: (err) => {
        console.error('Create student error:', err);
        alert(err?.error?.message ?? 'Failed to create student');
      }
    });
  }

  back() {
    this.router.navigate(['/students']);
  }
}