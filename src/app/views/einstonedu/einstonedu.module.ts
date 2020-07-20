import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule, MatCardModule, MatButtonModule, MatCheckboxModule, MatMenuModule, MatIconModule, MatBadgeModule, MatToolbarModule, MatProgressBarModule, MatProgressSpinnerModule, MatDialogModule, MatExpansionModule } from '@angular/material';
import { EinstoneduRoutingModule } from './einstonedu-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxCarouselModule } from 'ngx-carousel';
// import { LandingPageComponent } from './landing-page/landing-page.component';
// import { CourseboardComponent } from './courseboard/courseboard.component';
// import { TitleBoardComponent } from './title-board/title-board.component';
// import { ModalModule } from 'ngx-bootstrap';
// import { OverviewComponent } from './overview/overview.component';
// import { CourseListComponent } from './course-list/course-list.component';
// import { QandAComponent } from './qand-a/qand-a.component';
// import { BookmarksComponent } from './bookmarks/bookmarks.component';
// import { AnnouncementComponent } from './announcement/announcement.component';
import { QuillModule } from 'ngx-quill';
// import { CommentsComponent } from './qand-a/comments/comments.component';
// import { CourseGhostComponent } from './course-list/course-ghost/course-ghost.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
// import { HeaderBarComponent } from './header-bar/header-bar.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ModalModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [ RegisterPageComponent,LoginPageComponent],
  imports: [
    CommonModule,
    EinstoneduRoutingModule,
    FormsModule,
    MatIconModule,
    NgxCarouselModule,
    MatCardModule,
    MatProgressBarModule,
    ModalModule,
    MatCheckboxModule,
    QuillModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatExpansionModule,
    FlexLayoutModule,
    HttpClientModule,
    MatBadgeModule,
    MatButtonModule,
    ReactiveFormsModule,
    
    
  ]
})
export class EinstoneduModule { }
