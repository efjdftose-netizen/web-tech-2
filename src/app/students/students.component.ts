import { Component, OnInit, signal, Signal, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { StudentsService } from '../../services/students/students.service';
import { GetStudent } from '../../models/student.model';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  students: WritableSignal<GetStudent[]> = signal([]);

  constructor(private router: Router, private studentsService: StudentsService) {}

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents() {
    this.studentsService.getStudents().subscribe((data) => this.students.set(data));
  }

  goToCreateStudent() {
    this.router.navigate(['/students/create']);
  }

  deleteStudent(studentId: number) {
    this.studentsService.deleteStudent(studentId).subscribe(() => {
      this.students.set(this.students().filter(s => s.id !== studentId));
    });
  }

}