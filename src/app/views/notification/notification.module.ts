import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationRoutingModule } from './notification-routing.module';
import { NotificationComponent } from './notification/notification.component';
import { MatCardModule } from '@angular/material';
import { InstructorComponent } from './instructor/instructor.component';
import { StudentsComponent } from './students/students.component';

@NgModule({
  declarations: [NotificationComponent, InstructorComponent, StudentsComponent],
  imports: [
    CommonModule,
    NotificationRoutingModule,
    MatCardModule
  ]
})
export class NotificationModule { }
