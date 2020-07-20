// import { MainBoardModule } from './../main-board/main-board.module';
import { UnsubcoursesComponent } from './unsubcourses/unsubcourses.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { UnsubCourseRoutingModule } from './unsub-course-routing.module';
import { CourseModule } from '../course/course.module';
import { CompleteGuideComponent } from './complete-guide/complete-guide.component';
import { ModalModule } from 'ngx-bootstrap';


@NgModule({
  declarations: [UnsubcoursesComponent, CompleteGuideComponent],
  imports: [
    CommonModule,
    UnsubCourseRoutingModule,
    MatCardModule,
    // MainBoardModule,
    MatButtonModule,
    MatProgressBarModule,
    CourseModule,
    ModalModule
  ]
})
export class UnsubCourseModule { }
