import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  changeText: boolean;

  constructor() {
    this.changeText = false;
   }

  ngOnInit() {
  }
  instructor=[
    {
      "image":"assets/placeholder.png",
      "courseName":" Apache Spark using Python",
      "instructorName":"Prathik",
      "courseStatus":"Draft",
      "courseFee":"Free - Public",
      "courseItemToatl":"2"
    },
    {
      "image":"assets/placeholder.png",
      "courseName":"Apache Spark using Python",
      "instructorName":"Prathik",
      "courseStatus":"Draft",
      "courseFee":"Free - Public",
      "courseItemToatl":"3"
    }
  ]
}
