import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewcourseRoutingModule } from './newcourse-routing.module';
import { NewcourseComponent } from './newcourse/newcourse.component';
import { MatCardModule } from '@angular/material';
import { CommunicationComponent } from './communication/communication.component';
import { PriceComponent } from './price/price.component';

@NgModule({
  declarations: [NewcourseComponent, CommunicationComponent, PriceComponent],
  imports: [
    CommonModule,
    NewcourseRoutingModule,
    MatCardModule
  ]
})
export class NewcourseModule { }
