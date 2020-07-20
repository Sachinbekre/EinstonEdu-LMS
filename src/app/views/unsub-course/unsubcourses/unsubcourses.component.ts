import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unsubcourses',
  templateUrl: './unsubcourses.component.html',
  styleUrls: ['./unsubcourses.component.scss']
})
export class UnsubcoursesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  fav=true;
  favrite(){
    this.fav = !this.fav;
  }
feedback =[
  {
    hello : "werty"
  },
  {
    hello : "werty"
  },
  {
    hello : "werty"
  },
  {
    hello : "werty"
  },
  {
    hello : "werty"
  }
];
courseList = [
  {
    "courseId": "1",
    "courseTitle": "Java Programming for Beginners",
    "img": "assets/img/java.png",
    "author": "Shiva Kumar",
    "stars": "",
    "rating": "4,5",
    "totalCounts": "32,453",
    "actualPrice": "16,200",
    "discountPrice": "920"
  },
  {
    "courseId": "2",
    "courseTitle": "Python Programming for Beginners",
    "img": "assets/img/python.png",
    "author": "Prathik Pai",
    "stars": "",
    "rating": "4,9",
    "totalCounts": "32,453",
    "actualPrice": "18,300",
    "discountPrice": "820"
  }

] 

}
