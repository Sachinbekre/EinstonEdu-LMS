import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Router } from '@angular/router';
import { delay, map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { trigger } from '@angular/animations';
import { fadeOut, fadeIn } from '../../utils/animations/fade-animations';
const RESPONSE_DELAY = 1500;
@Component({
  selector: 'app-qand-a',
  templateUrl: './qand-a.component.html',
  animations: [
    trigger('fadeOut', fadeOut()),
    trigger('fadeIn', fadeIn(':enter')) 
  ],
  styleUrls: ['./qand-a.component.scss','../../../../../node_modules/quill/dist/quill.snow.css'],
  encapsulation: ViewEncapsulation.None
})
export class QandAComponent {
  @Input() qandacomp:boolean;
  URL_MOCK_USERS :any [];
  ghosts = [];
  useSpinner = true;
  users$;
  constructor(private router:Router,private http:HttpClient) {
    this.reloadList();
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
  edit(faq_id){
    // console.log(faq_id);
    this.router.navigate(['../course/q&a',faq_id])
  }
  
  faqs_questions =[{
    "course_id" : 21224,
    "content_id" : "",
    "uid" : "1",
    "userAvatar" : "/assets/img/avatars/1.jpg",
    "faq_id" : "2324",
    "faq_title" : "Why don't you just use clases or id instead of this complicated solution?",
    "faq_data": "Can you please send me the deck which was used in this course ?",
    "faq_comments" : 12,
    "faq_by":"",
    "approved" : true,
    "approved_on" : "",
    "approved_by" : "",
    "approval_action" : false,
    "status" : "pending/solved",
    "report" : false,
    "report_reason" : [{
        "user": "",
        "data" : "It contains vulgarity"
    }],
    "followers" : [],
    "views": 0
},
{
  "course_id" : 21224,
  "content_id" : "",
  "uid" : "2",
  "userAvatar" : "/assets/img/avatars/2.jpg",
  "faq_id" : "2328",
  "faq_title" : "Request for ppt used in this course",
  "faq_data": "Can you please send me the deck which was used in this course ?",
  "faq_comments" : 2,
  "approved" : true,
  "approved_on" : "",
  "approved_by" : "",
  "approval_action" : false,
  "status" : "pending/solved",
  "report" : false,
  "report_reason" : [{
      "user": "",
      "data" : "It contains vulgarity"
  }],
  "followers" : [],
  "views": 0
}];
}
