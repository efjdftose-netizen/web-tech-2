import { Routes } from '@angular/router';
import { Acitivity1Component } from './activity/activity-1.component';
import { PrelimExamComponent } from './prelim-exam/prelim-exam.component';
import { StudentsComponent } from './students/students.component';
import { CreateStudentComponent } from './create-student/create-student.component'; 


export const routes: Routes = [
  {
    path: 'activity-1',
    component: Acitivity1Component
  },
  {
    path: 'prelim-exam',
    component: PrelimExamComponent
  },

  /* Students Module Routes */
  {
    path: 'students',
    component: StudentsComponent
  },

    { path: 'students/create', component: CreateStudentComponent } 

    
];
