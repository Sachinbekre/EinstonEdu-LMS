import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.scss']
})
export class InstructorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  faqs_questions =[{
    "course_id" : 21224,
    "content_id" : "",
    "uid" : "1",
    "userAvatar" : "/assets/img/avatars/1.jpg",
    "faq_id" : "2324",
    "faq_title" : "Why don't you just use clases or id instead of this complicated solution?",
    "faq_data": "Can you please send me the deck which was used in this course",
    "faq_date": "7 days ago",
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
  "faq_data": "Can you please send me the deck which was used in this course",
  "faq_date": " a month ago ",
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
