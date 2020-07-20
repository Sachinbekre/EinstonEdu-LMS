import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { LandingPageComponent } from './landing-page/landing-page.component';
// import { CourseboardComponent } from './courseboard/courseboard.component';
// import { CourseListComponent } from './course-list/course-list.component';
// import { QandAComponent } from './qand-a/qand-a.component';
// import { BookmarksComponent } from './bookmarks/bookmarks.component';
// import { AnnouncementComponent } from './announcement/announcement.component';
// import { OverviewComponent } from './overview/overview.component';
// import { CommentsComponent } from './qand-a/comments/comments.component';
// import { HeaderBarComponent } from './header-bar/header-bar.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
  // {
  //   path:'',
  //   component:HeaderBarComponent,
  //   children:[
  //     {
  //       path:'courseboard',
  //       component:CourseboardComponent,
  //       children:[
  //         {
  //           path:'',
  //           component:OverviewComponent
  //         },
  //         {
  //           path:'courselist',
  //           component:CourseListComponent
  //         },
  //         {
  //           path:'q&a',
  //           component:QandAComponent
  //         },
  //         {
  //           path:"q&a/:faq_id",
  //           component: CommentsComponent
  //         },
  //         {
  //           path:'bookmarks',
  //           component:BookmarksComponent
  //         },
  //         {
  //           path:'announcement',
  //           component:AnnouncementComponent
  //         }
  //       ]
  //     },
  //     {
  //          path:'',
  //          component:LandingPageComponent
  //     },

  //   ]
  // },
  {
    path:'register',
    component:RegisterPageComponent
  },
  {
    path:'login',
    component:LoginPageComponent
  }
  
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EinstoneduRoutingModule { }
