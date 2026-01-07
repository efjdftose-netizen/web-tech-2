import { Routes } from '@angular/router';
import { Acitivity1Component } from './activity/activity-1.component';
import { PrelimExamComponent } from './prelim-exam/prelim-exam.component';


export const routes: Routes = [
    {
        path: 'activity-1',
        component: Acitivity1Component},

        {
          path: 'prelim-exam',
          component: PrelimExamComponent
        }


 
];

