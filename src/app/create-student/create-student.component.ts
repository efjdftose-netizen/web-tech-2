import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-student',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.scss']
})
export class CreateStudentComponent {
  
  student = {
    studentId: '',
    firstName: '',
    lastName: '',
    email: '',
    age: '',
    gpa: '',
    enrollmentStatus: ''
  };

  constructor(private router: Router) {}

  createStudent() {
    console.log('Student created (mock):', this.student);
    alert('Student created (mock)');
    this.router.navigate(['/students']);
  }

  back() {
    this.router.navigate(['/students']);
  }
}
