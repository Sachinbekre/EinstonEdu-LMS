import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.scss','../../../../../node_modules/quill/dist/quill.snow.css'],
  encapsulation: ViewEncapsulation.None
})
export class BasicsComponent implements OnInit {

  user = { fname: '', lname: '',hline:'',sline:'' }
  constructor() { }

  ngOnInit() {
  }
  user1={
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
