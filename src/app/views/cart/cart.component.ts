import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
  cart = {
    "course_id": 1234,
    "category": "",
    "sub_category": "",
    "course_name": "Google Analytics Certification - Become Certified in 1 Day",
    "course_tagline": "",
    "c_avatar":"/assets/profile.jpg",
    "c_price":870,
    "Actual_price":10800,
    "cover_page": "",
    "course_details": {
      "course_desc": "",
      "enrollments": 2,
      "caption": true,
      "total_duration": "234mins",
      "ratings": 5,
      "total_lectures": 23,
      "languages": ["kannada", "English"],
      "skill_level": "",
      "features": ["Certificate of Completion", "Honor on Exam"]
    },
    "course_takeaway": "html",
    "author": [{
      "id": "",
      "name": "Kirill Eremenko, Hadelin de Ponteves, SuperDataScience Team"
    }],
    "content": [{
      "header_name": "Getting Started",
      "content": [{
        "type": "video",
        "content_id": "1234",
        "content_name": "",
        "content_duration": "",
        "locked": true
      },
      {
        "type": "text",
        "content_id": "",
        "content_name": "",
        "content_duration": "",
        "locked": true
      },
      {
        "type": "ppt",
        "content_id": "",
        "content_name": "",
        "content_duration": "",
        "locked": true
      }
      ]
    }],
    "subscription": {
      "amount": "",
      "duration_type": "",
      "duration": "in months"
    },
    "related_courses": [{
      "id": 3456,
      "name": ""
    }],
    "tools": [{
      "title": "",
      "tool_id": ""
    }]
  }
}
