import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.scss']
})
export class ReceiptComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
receipt=[{
  "date":"Feb. 15, 2019",
  "company":" Logichive Solution",
  "address":"Mysuru",
  "receiptDate":"Dec. 5, 2018 ",
  "orderNo":"AD658",
  "soldTo":" Prathik Pai ",
  "total":1400,
  "items":[{
    "item":"React - The Complete Guide (incl Hooks, React Router, Redux)",
    "orderedDate":"Dec. 5, 2018	",
    "couponCode":"HOLIDAYSALEB",
    "qty":"1",
    "price":600,
    "amount":600
  }]
}]
}
