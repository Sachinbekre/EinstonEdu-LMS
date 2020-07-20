import { Component, OnInit } from '@angular/core';
import { delay, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { trigger } from '@angular/animations';
import { fadeOut, fadeIn } from '../../utils/animations/fade-animations';
const RESPONSE_DELAY = 1750;

@Component({
  selector: 'app-archived',
  templateUrl: './archived.component.html',
  animations: [
    trigger('fadeOut', fadeOut()),
    trigger('fadeIn', fadeIn(':enter')) 
  ],
  styleUrls: ['./archived.component.scss']
})
export class ArchivedComponent implements OnInit {
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
    }
  ]

}
