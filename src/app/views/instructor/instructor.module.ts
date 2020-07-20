import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstructorRoutingModule } from './instructor-routing.module';
import { InstructorComponent } from './instructor/instructor.component';
import { MatCardModule, MatIconModule, MatFormFieldModule, MatTooltipModule, MatStepperModule, MatTabsModule } from '@angular/material';
import { CourseComponent } from './course/course.component';
import { PerformanceComponent } from './performance/performance.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { StudentsComponent } from './performance/students/students.component';
import { EngagementComponent } from './performance/engagement/engagement.component';
import { ConversionComponent } from './performance/conversion/conversion.component';
import { AnnouncementComponent } from './announcement/announcement.component';
import { BsDatepickerModule, ProgressbarModule } from 'ngx-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import { CoursesComponent } from './courses/courses.component';
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css';
import { OverviewComponent } from './performance/overview/overview.component'


@NgModule({
  declarations: [InstructorComponent, CourseComponent, PerformanceComponent, MarketplaceComponent, StudentsComponent, EngagementComponent, ConversionComponent, AnnouncementComponent, CoursesComponent, OverviewComponent],
  imports: [
    CommonModule,
    InstructorRoutingModule,
    MatCardModule,
    BsDatepickerModule.forRoot(),
    FormsModule,
    QuillModule,
    MatIconModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatStepperModule,
    ReactiveFormsModule,
    ProgressbarModule,
    ProgressbarModule.forRoot(),
    MatCardModule,
    MatTabsModule
  ]
})
export class InstructorModule { }
