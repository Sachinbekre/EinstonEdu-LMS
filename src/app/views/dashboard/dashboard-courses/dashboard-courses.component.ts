import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-courses',
  templateUrl: './dashboard-courses.component.html',
  styleUrls: ['./dashboard-courses.component.scss']
})
export class DashboardCoursesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
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
    },
    {
      "courseId": "3",
      "courseTitle": "PHP Programming for Beginners",
      "img": "assets/img/php.jpg",
      "author": "Technical Thej",
      "stars": "",
      "rating": "4,3",
      "totalCounts": "28,453",
      "actualPrice": "10,200",
      "discountPrice": "620"
    },
    {
      "courseId": "4",
      "courseTitle": "Angular  Programming for Beginners",
      "img": "assets/img/angular6.jpg",
      "author": "Sushmitha",
      "stars": "",
      "rating": "4,4",
      "totalCounts": "22,453",
      "actualPrice": "15,200",
      "discountPrice": "720"
    },
    {
      "courseId": "5",
      "courseTitle": "Cloud  computing for Beginners",
      "img": "assets/img/cloud.jpg",
      "author": "Sachin B S",
      "stars": "",
      "rating": "4,8",
      "totalCounts": "42,453",
      "actualPrice": "15,200",
      "discountPrice": "880"
    }
  

  ] 

}
