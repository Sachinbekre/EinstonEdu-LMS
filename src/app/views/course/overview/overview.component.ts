import { Component, OnInit } from '@angular/core';
import { trigger } from '@angular/animations';
import { fadeOut, fadeIn } from '../../utils/animations/fade-animations';
import { delay, map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
const RESPONSE_DELAY = 1500;
@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  animations: [
    trigger('fadeOut', fadeOut()),
    trigger('fadeIn', fadeIn(':enter')) 
  ],
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
    URL_MOCK_USERS :any [];
    ghosts = [];
    useSpinner = true;
    users$;
    constructor(private http:HttpClient) {
        this.reloadList();
       }

  ngOnInit() {
    this.user.social_links.facebook
    console.log(this.user.social_links.facebook) ;
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
  overview={
    "course_id": 1234,
    "category" : "",
    "sub_category" : "",
    "course_name": "",
    "course_tagline": "",
    "cover_page": "",
    "course_details": {
        "course_desc": "Hello this is course description",
        "enrollments": 2,
        "caption": false,
        "total_duration": "234mins",
        "ratings": 5,
        "total_lectures" : 23,
        "languages": ["kannada","English","kannada","English"],
        "skill_level" : "All Levels",
        "features" : ["Certificate of Completion","Honor on Exam"]
    },
    "course_takeaway": "html",
    "author": [{
        "id": "",
        "name": ""
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
    "tools" : [{
        "title" : "",
        "tool_id" : ""
    }]
};
user={
    "uid" :"xerer222",
    "user_id" : "2000102",
    "user_type" : "individual",
    "account_level" : 0,
    "avatar" : "assets/496800929.jpg",
    "mobile" : "9686470007",
    "email" : "abc@gmail.com",
    "password" : "hashed_Password",
    "first_name" : "Prathik",
    "last_name" : "Pai",
   
    "queries":{
        "pending_issue" : 0,
        "notes" : ""
    },
    "financial" : {
        "wallet_balance" : 0,
        "spent" : 0,
        "refunds" : 0,
        "purchase" : 0,
        "issues" : 0
    },  
    "billing_address": {
        "attention": "Mr.John",
        "address": "4900 Hopyard Rd",
        "street2": "Suite 310",
        "state_code": "CA",
        "city": "Pleasanton",
        "state": "CA",
        "zip": 94588,
        "country": "U.S.A",
        "fax": "+1-925-924-9600",
        "phone": "+1-925-921-9201",
        "type" : "home/office"
    },
    "shipping_address": {
        "attention": "Mr.John",
        "address": "4900 Hopyard Rd",
        "street2": "Suite 310",
        "state_code": "CA",
        "city": "Pleasanton",
        "state": "CA",
        "zip": 94588,
        "country": "U.S.A",
        "fax": "+1-925-924-9600",
        "phone": "+1-925-921-9201",
        "type" : "home/office"
    },
    "additional_address" : [
        {
            "attention": "Mr.John",
            "address": "4900 Hopyard Rd",
            "street2": "Suite 310",
            "state_code": "CA",
            "city": "Pleasanton",
            "state": "CA",
            "zip": 94588,
            "country": "U.S.A",
            "fax": "+1-925-924-9600",
            "phone": "+1-925-921-9201",
            "type" : "home/office"
        }
    ],
    "headline" : "Passionate Software Engineer and Best-selling Author",
    "biography" : "Mosh Hamedani is a passionate and creative software engineer with  a strong focus on pragmatism and simplicity ",
    "website": "",
    "social_links" : {
        "github" : "",
        "facebook" : "https://www.google.com/",
        "twitter" : "",
        "linkedin" : "",
        "youtube" : ""
    },
    "app_preferences" : {
        "theme_color": ""
    },
    "privacy" : {
        "show_courses_taken" : true,
        "search_engine_visibility" : true,
        "anonymous_profile_sharing" : true,
        "interest_accessment" : true,
        "grammercheck" : true,
        "customercare_contact" : true
    },
    "notifications" : {
        "announcement_from_instructor" : true,
        "promotional_emails" : true
    },
    "currency_code": ""
} 
}
