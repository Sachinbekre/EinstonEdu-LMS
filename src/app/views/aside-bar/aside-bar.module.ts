import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule } from 'ng-sidebar';
import { AsideBarRoutingModule } from './aside-bar-routing.module';
import { AsideBarOneComponent } from './aside-bar-one/aside-bar-one.component';
import { CourseModule } from '../course/course.module';
import { VideoplayerModule } from '../videoplayer/videoplayer.module';
import { MatCardModule } from '@angular/material';

@NgModule({
  declarations: [AsideBarOneComponent],
  imports: [
    CommonModule,
    AsideBarRoutingModule,
    SidebarModule,
    CourseModule,
    MatCardModule,
    VideoplayerModule
  ],
})
export class AsideBarModule { }
