import { Component, OnInit } from '@angular/core';
import { delay, map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { trigger } from '@angular/animations';
import { fadeOut, fadeIn } from '../../utils/animations/fade-animations';
const RESPONSE_DELAY = 1500;
@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  animations: [
    trigger('fadeOut', fadeOut()),
    trigger('fadeIn', fadeIn(':enter')) 
  ],
  styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent implements OnInit {
  URL_MOCK_USERS :any [];
  ghosts = [];
  useSpinner = true;
  users$;
  constructor(private http:HttpClient) {
    this.reloadList();
   }

  ngOnInit() {
  }
  reloadList(useSpinner = false){
    this.useSpinner = useSpinner;
    this.ghosts = new Array(1);       // Mock Ghost items
    this.users$ = this.http
      .get('assets/data.json')
      .pipe(
        delay(RESPONSE_DELAY),        // Simulating network latency 
        // map(this.injectAvatars),           // add cartoon avatars 
        tap(() => this.ghosts = [])   // clear ghosts
      );  
    //   console.log(this.URL_MOCK_USERS);  
  }
 bookMarks = [{
    "course_id": 12132,
    "uid": "",
    "section_id": 2,
    "name": "Getting Started",
    "content": [{
        "type": "text",
        "id": "3",
        "name": "Architecture of Angular Apps",
        "bookmarked_time": "00.20",
        "dated": "3 months ago"
    }]
}]
}
