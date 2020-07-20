import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  faqsComments = [{
    "faq_id": "2324",
    "uid": "1",
    "faq_data": "Can you please send me the deck which was used in this course ?",
    "comment_by": "",
    "comment_id": "",
    "comment_on": "",
    "approved": true,
    "approved_on": "",
    "approved_by": "",
    "approval_action": false,
    "up_votes": [],
    "down_votes": [],
    "report": false,
    "report_reason": [{
      "user": "",
      "data": "It contains vulgarity"
    }]
  }]
}
