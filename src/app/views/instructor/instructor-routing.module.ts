import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstructorComponent } from './instructor/instructor.component';
import { CourseComponent } from './course/course.component';
import { PerformanceComponent } from './performance/performance.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { StudentsComponent } from './performance/students/students.component';
import { EngagementComponent } from './performance/engagement/engagement.component';
import { ConversionComponent } from './performance/conversion/conversion.component';
import { AnnouncementComponent } from './announcement/announcement.component';
import { CoursesComponent } from './courses/courses.component';
import { OverviewComponent } from './performance/overview/overview.component';



const routes: Routes = [
  {
    path:'',component:InstructorComponent,
    children:[
      {
        path:'course',component:CourseComponent
      },
      {
        path:'performance',component:PerformanceComponent,
        children:[
          {
            path:'student',component:StudentsComponent
          },
          {
            path:'engagement',component:EngagementComponent
          },
          {
            path:'conversion',component:ConversionComponent
          },
          {
            path:'',component:OverviewComponent
          }
        ]
      },
      {
        path:'marketplace-insight',component:MarketplaceComponent
      },    
    ]   
  },
  {
    path:'announcements',component:AnnouncementComponent
  },
  {
    path:'courses',component:CoursesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstructorRoutingModule { }
