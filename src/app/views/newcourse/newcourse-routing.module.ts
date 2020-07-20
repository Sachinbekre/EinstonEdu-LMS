import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewcourseComponent } from './newcourse/newcourse.component';
import { CommunicationComponent } from './communication/communication.component';
import { PriceComponent } from './price/price.component';

const routes: Routes = [
  {
    path:'',component:NewcourseComponent,
    children:[
      {
        path:'communication',component:CommunicationComponent
      },
      {
        path:'price-and-coupon',component:PriceComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewcourseRoutingModule { }
