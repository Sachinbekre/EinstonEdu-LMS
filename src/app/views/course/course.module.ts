import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';
import { TitleBoardComponent } from './title-board/title-board.component';
import { QandAComponent } from './qand-a/qand-a.component';
import { OverviewComponent } from './overview/overview.component';
import { CourseboardComponent } from './courseboard/courseboard.component';
import { CourseListComponent } from './course-list/course-list.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { AnnouncementComponent } from './announcement/announcement.component';
import { MatCardModule, MatButtonModule, MatCheckboxModule, MatMenuModule, MatIconModule, MatBadgeModule, MatToolbarModule, MatProgressBarModule, MatProgressSpinnerModule, MatDialogModule, MatExpansionModule } from '@angular/material';
import { ModalModule } from 'ngx-bootstrap';
import { QuillModule } from 'ngx-quill';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CourseGhostComponent } from './course-list/course-ghost/course-ghost.component';
import { CommentsComponent } from './qand-a/comments/comments.component';
import { VideosComponent } from './course-list/videos/videos.component';
import { OverviewGhostComponent } from './overview/overview-ghost/overview-ghost.component';
import { QaGhostComponent } from './qand-a/qa-ghost/qa-ghost.component';
import { BookmarksGhostComponent } from './bookmarks/bookmarks-ghost/bookmarks-ghost.component';
import { AnnouncementGhostComponent } from './announcement/announcement-ghost/announcement-ghost.component';

@NgModule({
  declarations: [CommentsComponent,CourseGhostComponent,TitleBoardComponent,QandAComponent,OverviewComponent,CourseboardComponent,CourseListComponent,BookmarksComponent,AnnouncementComponent, OverviewGhostComponent, QaGhostComponent, BookmarksGhostComponent, AnnouncementGhostComponent,VideosComponent],
  imports: [
    CommonModule,
    CourseRoutingModule,
    MatCardModule, 
    MatButtonModule,
     MatCheckboxModule, 
     MatMenuModule, 
     MatIconModule, 
     MatBadgeModule,
      MatToolbarModule,
       MatProgressBarModule, 
       MatProgressSpinnerModule,
        MatDialogModule, 
        MatExpansionModule,
        ModalModule,
        QuillModule,
        HttpClientModule,
        FlexLayoutModule,
        FormsModule,
        ReactiveFormsModule
        

         
  ],
  exports:[CourseListComponent,QandAComponent]
})
export class CourseModule { }
