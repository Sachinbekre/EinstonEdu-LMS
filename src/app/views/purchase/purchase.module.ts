import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseRoutingModule } from './purchase-routing.module';
import { PurchaseComponent } from './purchase/purchase.component';
import { MatCardModule } from '@angular/material';
import { ReceiptComponent } from './receipt/receipt.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PurchaseComponent, ReceiptComponent],
  imports: [
    CommonModule,
    PurchaseRoutingModule,
    MatCardModule,
    FormsModule
  ]
})
export class PurchaseModule { }
