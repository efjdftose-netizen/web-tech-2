import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent {

  students = [
    { name: 'John Doe', course: 'Computer Science', year: '2nd Year' },
    { name: 'Jane Smith', course: 'Information Technology', year: '3rd Year' },
    { name: 'Mike Johnson', course: 'Software Engineering', year: '1st Year' }
  ];

  constructor(private router: Router) {}

  goToCreateStudent() {
    this.router.navigate(['/students/create']);
  }

}
