import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursemanageRoutingModule } from './coursemanage-routing.module';
import { GoalsComponent } from './goals/goals.component';
import { MainboardComponent } from './mainboard/mainboard.component';
import { CourseStructureComponent } from './course-structure/course-structure.component';
import { SetupComponent } from './setup/setup.component';
import { FilmComponent } from './film/film.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { CaptionsComponent } from './captions/captions.component';
import { BasicsComponent } from './basics/basics.component';
import { PriceAndPromotionsComponent } from './price-and-promotions/price-and-promotions.component';
import { CommunicationsComponent } from './communications/communications.component';
import {MatStepperModule} from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatIconModule, MatButton, MatButtonModule, MatExpansionModule, MatTableModule } from '@angular/material';
import { QuillModule } from 'ngx-quill';
import { MatTabsModule } from '@angular/material/tabs';
import { ModalModule } from 'ngx-bootstrap';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatCardModule} from '@angular/material/card';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DashboardModule } from '../dashboard/dashboard.module';
import { TestVideoComponent } from './test-video/test-video.component';
import { StartComponent } from './start/start.component';
import { VideoSetupComponent } from './video-setup/video-setup.component';
// import { VideoModule } from '../video/video.module';
import { CropModule } from '../crop/crop.module';
import { SettingsComponent } from './settings/settings.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { VideoplayerModule } from '../videoplayer/videoplayer.module';

@NgModule({
  declarations: [GoalsComponent, MainboardComponent, CourseStructureComponent, SetupComponent, FilmComponent, CurriculumComponent, CaptionsComponent, BasicsComponent, PriceAndPromotionsComponent, CommunicationsComponent, TestVideoComponent, StartComponent, VideoSetupComponent, SettingsComponent],
  imports: [
    CommonModule,
    CoursemanageRoutingModule,
    MatTooltipModule,
    MatTableModule,
    MatCardModule,
    ModalModule.forRoot(),
    MatTabsModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    QuillModule,
    MatButtonModule,
    DragDropModule,
    MatExpansionModule,
    DashboardModule,
    VideoplayerModule,
    // VideoModule,
    CropModule,
    NgMultiSelectDropDownModule.forRoot()
    // NgMultiSelectDropDownModule,
    
  ]
})
export class CoursemanageModule { }
