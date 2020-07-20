import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PurchaseComponent } from './purchase/purchase.component';
import { ReceiptComponent } from './receipt/receipt.component';

const routes: Routes = [
  {
    path:"",component:PurchaseComponent
  },
  {
    path:"receipt",component:ReceiptComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseRoutingModule { }
