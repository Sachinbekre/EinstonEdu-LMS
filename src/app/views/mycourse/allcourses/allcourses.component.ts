import { Component, OnInit } from '@angular/core';
import { delay, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { trigger } from '@angular/animations';
import { fadeOut, fadeIn } from '../../utils/animations/fade-animations';
const RESPONSE_DELAY = 1750;
@Component({
  selector: 'app-allcourses',
  templateUrl: './allcourses.component.html',
  animations: [
    trigger('fadeOut', fadeOut()),
    trigger('fadeIn', fadeIn(':enter')) 
  ],
  styleUrls: ['./allcourses.component.scss']
})
export class AllcoursesComponent implements OnInit {
  ghosts = [];
  users$;
  constructor(private http: HttpClient) {
    this.reloadList();
   }

  reloadList(){
    this.ghosts = new Array(1);       // Mock Ghost items
    this.users$ = this.http
      .get('assets/data.json')
      .pipe(
        delay(RESPONSE_DELAY),        // Simulating network latency 
        // map(injectAvatars),           // add cartoon avatars 
        tap(() => this.ghosts = [])   // clear ghosts
      );    
  }
  ngOnInit() {
  }
  courseList = [
    {
      "courseId": "1",
      "courseTitle": "Java Programming for Beginners",
      "img": "assets/img/java.png",
      "author": "Shiva Kumar",
      "stars": "",
      "completed": "20"
    },
    {
      "courseId": "2",
      "courseTitle": "Python Programming for Beginners",
      "img": "assets/img/python.png",
      "author": "Prathik Pai",
      "stars": "",
      "completed": "10"
    },
    {
      "courseId": "3",
      "courseTitle": "PHP Programming for Beginners",
      "img": "assets/img/php.jpg",
      "author": "Technical Thej",
      "stars": "",
      "completed": "20"
    },
    {
      "courseId": "4",
      "courseTitle": "Angular  Programming  ",
      "img": "assets/img/angular6.jpg",
      "author": "Sushmitha",
      "stars": "",
      "completed": "20"
    },
    {
      "courseId": "5",
      "courseTitle": "Cloud  computing for Beginners",
      "img": "assets/img/cloud.jpg",
      "author": "Sachin B S",
      "stars": "",
      "completed": "20"
    },
    {
      "courseId": "6",
      "courseTitle": "dotNet  for Beginners",
      "img": "assets/img/dotNet.jpg",
      "author": "James Bond",
      "stars": "",
      "completed": "20"
    },
    {
      "courseId": "6",
      "courseTitle": "MongoDB  for Beginners",
      "img": "assets/img/mongo.jpg",
      "author": "Mr. Mongo",
      "stars": "",
      "completed": "20"
    }
  ]

}
