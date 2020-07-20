import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';
import { LoginPageComponent } from './views/login-page/login-page.component';
import { RegisterPageComponent } from './views/register-page/register-page.component';
import { HeaderBarComponent } from './views/header-bar/header-bar.component';

export const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'dashboard',
  //   pathMatch: 'full',
  // },
 
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      
      {
        path: '',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule'
      },
      {
        path:'course',
        loadChildren:'./views/course/course.module#CourseModule'
      },
      {
        path:'mycourse',
        loadChildren:'./views/mycourse/mycourse.module#MycourseModule'
      },
      {
        path:'userprofile',
        loadChildren:'./views/userprofile/userprofile.module#UserprofileModule'
      },
      {
        path:'instructor',
        loadChildren:'./views/instructor/instructor.module#InstructorModule'
      },
      {
        path:'newcourse',
        loadChildren:'./views/newcourse/newcourse.module#NewcourseModule'
      },
      // {
      //   path:'user',
      //   loadChildren:'./views/user/user.module#MycourseModule'
      // },
      {
        path:'header',component:HeaderBarComponent
      },
      {
        path:'coursemanage',
        loadChildren:'./views/coursemanage/coursemanage.module#CoursemanageModule'
      },
      {
        path:'notification',
        loadChildren:'./views/notification/notification.module#NotificationModule'
      },
      {
        path:'purchase',
        loadChildren:'./views/purchase/purchase.module#PurchaseModule'
      },
      {
        path:'crop',
        loadChildren:'./views/crop/crop.module#CropModule'
      },
      // {
      //   path:'video',
      //   loadChildren:'./views/video/video.module#VideoModule'
      // },
      {
        path:'cart',
        loadChildren:'./views/cart/cart.module#CartModule'
      },
     
      {
        path:'videoplayer',
        loadChildren:'./views/videoplayer/videoplayer.module#VideoplayerModule'
      },
      {
        path:'unsub-course',
        loadChildren:'./views/unsub-course/unsub-course.module#UnsubCourseModule'
      },
      {
        path:'gift',
        loadChildren:'./views/gift/gift.module#GiftModule'
      }
    
    ]
  },
  {
    path:'asidebar',
    loadChildren:'./views/aside-bar/aside-bar.module#AsideBarModule'
  },
  {
    path:'login',
   component:LoginPageComponent
  },
  {
    path:'register',
   component:RegisterPageComponent
  },
  
  // {
  //   path: 'mycourse',
  //   component: DefaultLayoutComponent,   
  //   children: [
  //     {
  //       path: '',
  //       loadChildren:'./views/mycourse/mycourse.module#MycourseModule'
  //     },    
     
  //   ]
  // },
 
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
