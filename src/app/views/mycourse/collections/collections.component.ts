import { Component, OnInit } from '@angular/core';
import { trigger } from '@angular/animations';
import { fadeOut, fadeIn } from '../../utils/animations/fade-animations';
import { HttpClient } from '@angular/common/http';
import { delay, tap } from 'rxjs/operators';
const RESPONSE_DELAY = 1750;
@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  animations: [
    trigger('fadeOut', fadeOut()),
    trigger('fadeIn', fadeIn(':enter')) 
  ],
  styleUrls: ['./collections.component.scss']
})
export class CollectionsComponent implements OnInit {
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
  collections=[
    {
      "name":"Collection Instructor ",
     "discription":"Learn the ins and outs of how to be a successful instructor", 
     "value":true
    }
  ]
  courseList = [
    {
      "courseId": "2",
      "courseTitle": "Python Programming for Beginners",
      "img": "assets/img/python.png",
      "author": "Prathik Pai",
      "stars": "",
      "completed": "10"
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
      "courseTitle": "MongoDB  for Beginners",
      "img": "assets/img/mongo.jpg",
      "author": "Mr. Mongo",
      "stars": "",
      "completed": "20"
    }

  ]
  ngOnInit() {
    console.log(this.collections);
  }
  editedCollection(){
    console.log(this.collections);
  }
}
