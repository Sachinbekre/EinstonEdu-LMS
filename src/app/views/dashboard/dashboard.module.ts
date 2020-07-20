import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import {  NgxCarouselModule } from 'ngx-carousel';
import { MatCardModule, MatProgressBarModule, MatProgressSpinnerModule } from '@angular/material';
import { CarouselModule } from 'ngx-bootstrap';
import { DashboardCoursesComponent } from './dashboard-courses/dashboard-courses.component';
import { EGameComponent } from './e-game/e-game.component';
import { KitsComponent } from './kits/kits.component';
import { EventsComponent } from './events/events.component';
import { WorkbenchComponent } from './workbench/workbench.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DashboardRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    NgxCarouselModule,
    MatCardModule,
    FormsModule,
    CarouselModule.forRoot(),
    MatProgressBarModule,
    MatProgressSpinnerModule

  ],
  exports:[KitsComponent],
  declarations: [ DashboardComponent, DashboardCoursesComponent, EGameComponent, KitsComponent, EventsComponent, WorkbenchComponent ]
})
export class DashboardModule { }
