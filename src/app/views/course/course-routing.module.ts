import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TitleBoardComponent } from './title-board/title-board.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseboardComponent } from './courseboard/courseboard.component';
import { OverviewComponent } from './overview/overview.component';
import { QandAComponent } from './qand-a/qand-a.component';
import { CommentsComponent } from './qand-a/comments/comments.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { AnnouncementComponent } from './announcement/announcement.component';
import { VideosComponent } from './course-list/videos/videos.component';
import { AsideBarOneComponent } from '../aside-bar/aside-bar-one/aside-bar-one.component';

const routes: Routes = [
  {
    path:'',component:CourseboardComponent,
    children:[
              {
                path:'overview',
                component:OverviewComponent
              },
              {
                path:'courselist',
                component:CourseListComponent
              },
              {
                path:'q&a',
                component:QandAComponent
              },
              {
                path:"q&a/:faq_id",
                component: CommentsComponent
              },
              {
                path:'bookmarks',
                component:BookmarksComponent
              },
              {
                path:'announcement',
                component:AnnouncementComponent
              },
              {
                path:'video',
                component:VideosComponent
              },
              // {
              //   path:'asidebar',
              //   component:AsideBarOneComponent
              // }
             
            ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
