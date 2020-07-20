import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss']
})
export class PurchaseComponent implements OnInit {
 
  showList;
  courseName='View all courses';
  purchaseData = [
    {
 
    "date": "Dec. 5, 2018",
    "cost": "700",
    "paidThrough": "Visa",
    "totalCourse": [
      {
        "courseName": "Apache Spark 2 with Scala - Hands On with Big Data!",
        "courseImage": "assets/apacheSpark.png",
        "courseCost":700
      }
    ]
  },
  {
    "date": "Aug. 24, 2018",
    "cost": "1240",
    "paidThrough": "Visa",
    "totalCourse": [
      {
        "courseName": "Angular Crash Course for Busy Developers",
        "courseImage": "assets/img/angular.png",
        "courseCost":600
      },
      {
        "courseName": "React - The Complete Guide (incl Hooks, React Router, Redux)",
        "courseImage": "assets/ReactNative.png",
        "courseCost":500
      }
    ]
  }
];
sum;
  constructor() { }

  ngOnInit() {
 
  
}
  viewCourse(i){
    console.log(i);
    this.showList= !this.showList;
    if(  this.showList==true){
      this.courseName='Hide all courses';
    }
    else{
      this.courseName='View all courses';
    }

  }

  
   
  
   
}

