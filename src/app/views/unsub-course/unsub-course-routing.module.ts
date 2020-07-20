
// import { UnsubcoursesComponent } from './unsubcourses/unsubcourses.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnsubcoursesComponent } from './unsubcourses/unsubcourses.component';

const routes: Routes = [
  {
    path:"",
    component:UnsubcoursesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnsubCourseRoutingModule { }
