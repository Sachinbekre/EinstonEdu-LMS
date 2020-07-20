import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainboardComponent } from './mainboard/mainboard.component';
import { BasicsComponent } from './basics/basics.component';
import { CaptionsComponent } from './captions/captions.component';
import { CommunicationsComponent } from './communications/communications.component';
import { CourseStructureComponent } from './course-structure/course-structure.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { FilmComponent } from './film/film.component';
import { GoalsComponent } from './goals/goals.component';
import { PriceAndPromotionsComponent } from './price-and-promotions/price-and-promotions.component';
import { SetupComponent } from './setup/setup.component';
import { TestVideoComponent } from './test-video/test-video.component';
import { StartComponent } from './start/start.component';
import { VideoSetupComponent } from './video-setup/video-setup.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {
    path:"",component:MainboardComponent,
    children:[
      {
        path:"basic",component:BasicsComponent
      },
      {
        path:"caption",component:CaptionsComponent
      },
      {
        path:"comunication",component:CommunicationsComponent
      },
      {
        path:"course-structure",component:CourseStructureComponent
      },
      {
        path:"curriculum",component:CurriculumComponent
      },
      {
        path:"film",component:FilmComponent
      },
      {
        path:"price",component:PriceAndPromotionsComponent
      },
      {
        path:"",component:GoalsComponent
      },
      {
        path:"setup",component:SetupComponent
      },
      {
        path:"test-video",component:TestVideoComponent
      },
      {
        path:"start",component:StartComponent
      },
      {
        path:"videoSetup",component:VideoSetupComponent
      },
      {
        path:"settings",component:SettingsComponent
      }
    ]
  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursemanageRoutingModule { }
