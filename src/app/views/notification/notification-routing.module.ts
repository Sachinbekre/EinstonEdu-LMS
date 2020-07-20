import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotificationComponent } from './notification/notification.component';
import { InstructorComponent } from './instructor/instructor.component';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
  {
    path:"",component:NotificationComponent,
    children:[
      {
        path:"instructor",component:InstructorComponent
      },
      {
        path:"students",component:StudentsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotificationRoutingModule { }
