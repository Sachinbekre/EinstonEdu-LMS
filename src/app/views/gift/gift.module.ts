import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GiftRoutingModule } from './gift-routing.module';
import { GiftComponent } from './gift/gift.component';
import {  BsDatepickerModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [GiftComponent],
  imports: [
    CommonModule,
    GiftRoutingModule,
    BsDatepickerModule.forRoot()
  ]
})
export class GiftModule { }
