import { Component, OnInit } from '@angular/core';
import { delay, map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { trigger } from '@angular/animations';
import { fadeOut, fadeIn } from '../../utils/animations/fade-animations';
import { AVATARS } from '../../utils/svg-icon/svg-icon.component';
const RESPONSE_DELAY = 1500;
@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  animations: [
    trigger('fadeOut', fadeOut()),
    trigger('fadeIn', fadeIn(':enter')) 
  ],
  styleUrls: ['./announcement.component.scss']
})
export class AnnouncementComponent implements OnInit {
  // URL_MOCK_USERS :any [];
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
        map(this.injectAvatars),           // add cartoon avatars 
        tap(() => this.ghosts = [])   // clear ghosts
      );  
    //   console.log(this.URL_MOCK_USERS);  
  }
  injectAvatars(users) {
    const addAvatar = (it, i) => it.avatar = AVATARS[i % AVATARS.length];
    users.forEach(addAvatar);
    return users;
  }
  announcement = [{
    "course_id": 12132,
    "uid": "",
    "section_id": 2,
    "authorName": "Mosh Feghhamedani",
    "avatar":"assets/img/avatars/6.jpg",
    "postedby":"posted an announcement",
    "dated":"4 months ago",
    "cmtsHeading":"This language gives you 2x-4x more job opportunities",
    "comments":"Hi guys, Python is super-hot right now and I've had a ton of requests to create a Python tutorial. In CA, there are currently 17,000 jobs available for Python developers compared to 8,000 and 4,000 jobs for JavaScript and C# developers"
}]
}
