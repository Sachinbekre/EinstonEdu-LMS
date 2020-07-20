import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mainboard',
  templateUrl: './mainboard.component.html',
  styleUrls: ['./mainboard.component.scss']
})
export class MainboardComponent implements OnInit {

  public submit = true;
  public verify1 = false;
  public verify2 = false;

  course = {
    "course_id": 1234,
    "category": "",
    "sub_category": "",
    "course_name": "Apache Spark using Python",
    "course_tagline": "",
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
      "name": "Prathik Pai"
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
  activeclass1 = '';
  activeclass2 = '';
  activeclass3 = '';
  activeclass4 = '';
  activeclass5 = '';
  activeclass6 = '';
  activeclass7 = '';
  activeclass8 = '';
  activeclass9 = '';

  activatedRouteShow;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    
    this.activatedRouteShow = activatedRoute['_routerState']['snapshot']['url'];
    // console.log(activatedRoute['_routerState']['snapshot']['url']); // array of states
  }




  ngOnInit() {
    this.activeTab()
  }

  activeTab() {
    if (this.activatedRouteShow === '/coursemanage') {
      this.activeclass1 = 'active';
    } else if (this.activatedRouteShow === '/coursemanage/course-structure') {
      this.activeclass2 = 'active';
    } else if (this.activatedRouteShow === '/coursemanage/setup') {
      this.activeclass3 = 'active';
    } else if (this.activatedRouteShow === '/coursemanage/film') {
      this.activeclass4 = 'active';
    } else if (this.activatedRouteShow === '/coursemanage/curriculum') {
      this.activeclass5 = 'active';
    } else if (this.activatedRouteShow === '/coursemanage/caption') {
      this.activeclass6 = 'active';
    } else if (this.activatedRouteShow === '/coursemanage/basic') {
      this.activeclass7 = 'active';
    } else if (this.activatedRouteShow === '/coursemanage/price') {
      this.activeclass8 = 'active';
    } else if (this.activatedRouteShow === '/coursemanage/comunication') {
      this.activeclass9 = 'active';
    } else {
      this.activeclass1 = 'active';
    }
  }
  sendMail() {
    alert('Sent mail');
  }
}
