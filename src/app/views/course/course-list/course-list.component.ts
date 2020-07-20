import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { trigger } from '@angular/animations';
import { fadeOut, fadeIn } from '../../utils/animations/fade-animations';
import { delay, map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CourselistService } from './courselist.service';
import { DomSanitizer } from '@angular/platform-browser';
const RESPONSE_DELAY = 1500;
@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  animations: [
    trigger('fadeOut', fadeOut()),
    trigger('fadeIn', fadeIn(':enter')) 
  ],
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
@Input() parentvalue:boolean;
@Input() unsubcourseValue:boolean;
@Input() dataFromParent: String;
@Output() sendDataToParent = new EventEmitter<string>();


  URL_MOCK_USERS :any [];
  ghosts = [];
  useSpinner = true;
  users$;
  filePath;
  __url:string;
  // users$ : Observable<any[]>
  courseContent;
    constructor(private sanitizer: DomSanitizer,private http:HttpClient,private router:Router,public courseservice:CourselistService) {
      this.reloadList();
      this.unsubcourseValue=false;
     }
  
    ngOnInit() {
        
        this.courseContent = this.courseservice.courseData;
        console.log(this.courseContent);
    }
    downloadPDF() {
      let tab = window.open();
      this.courseservice
        .downloadPDF()
        .subscribe(data => {
          const fileUrl = URL.createObjectURL(data);
          tab.location.href = this.filePath;
          console.log(fileUrl);
        });
    }

    clickvideo(id,course_id,s,type,url){
     
     this.filePath = url;
     console.log(this.filePath);
     if(type==='video'){
      if(this.unsubcourseValue==false){
        // console.log(id);
        this.sendDataToParent.emit();
        // this.sendDataToParent.emit(course_id);
        this.router.navigate(['/asidebar'], { queryParams: { ID: id,c:course_id,s:s} });
        
     }
     }else if(type==='pdf'){
      this.downloadPDF();
     }else if(type==='txt'){
      const data = 'some text';
      const blob = new Blob([data], { type: 'application/octet-stream' });
      // this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
     }
     
       
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
  //    injectAvatars(users) {
  //     const addAvatar = (it, i) => it.avatar ;
  //     users.forEach(addAvatar);
  //     return users;
  //   }
//     courseContent =  [{
//       "course_id": 1234,
//       "uid" : "",
//       "favourite" : false,
//       "content_total" : 140,
//       "last_visit" : "datetime",
//       "content_progress" :101,
//       "preference" : {
//           "caption" : "",
//           "trackable" : true
//       },
//       "time_spent" : 0,
//       "expirydate" : "date",
//       "contents": [{
//           "section": 1,
//           "name": "Getting Started",
//           "seen" : 2,
//           "content": [
//             {
//                   "type": "video",
//                   "id": "1234",
//                   "chapter_no":"1",
//                   "name": "Intoduction",
//                   "time": "0.22",
//                   "seen" : true,
//                   "time_spent" : 0,
//                   "url":'assets/vido/test_video.mp4'
                
//               },
//               {
//                   "type": "text",
//                   "id": "12345",
//                   "chapter_no":"2",
//                   "name": "Types",
//                   "time": "2.1",
//                   "seen" : true,
//                   "time_spent" : 0,
//                   "url":'assets/vido/urvashi.mp4'
//               },
//               {
//                   "type": "ppt",
//                   "id": "12345678",
//                   "chapter_no":"3",
//                   "name": "Design",
//                   "time": "6.0",
//                   "seen" : false,
//                   "time_spent" : 0,
//                   "url":'http://techslides.com/demos/sample-videos/small.mp4'
//               }
//           ]
//       },
//       {
//         "section": 2,
//         "name": "Introduction",
//         "seen" : 3,
//         "content": [{
//                 "type": "video",
//                 "id": "1234",
//                 "chapter_no":"4",
//                 "name": "Intoduction",
//                 "time": "0.22",
//                 "seen" : true,
//                 "time_spent" : 0,
//                 "url":'assets/vido/test_video.mp4'
//             },
//             {
//                 "type": "text",
//                 "id": "12345",
//                 "chapter_no":"5",
//                 "name": "Types",
//                 "time": "2.1",
//                 "seen" : true,
//                 "time_spent" : 0,
//                 "url":'assets/vido/test_video.mp4'
//             },
//             {
//                 "type": "ppt",
//                 "id": "12345678",
//                 "chapter_no":"6",
//                 "name": "Design",
//                 "time": "6.0",
//                 "seen" : true,
//                 "time_spent" : 0,
//                 "url":'assets/vido/test_video.mp4'
//             },
//             {
//               "type": "video",
//               "id": "1234",
//               "chapter_no":"7",
//               "name": "Intoduction",
//               "time": "0.22",
//               "seen" : false,
//               "time_spent" : 0,
//               "url":'assets/vido/test_video.mp4'
//           },
//           {
//               "type": "text",
//               "id": "12345",
//               "chapter_no":"8",
//               "name": "Types",
//               "time": "2.1",
//               "seen" : false,
//               "time_spent" : 0,
//               "url":'assets/vido/test_video.mp4'
//           },
//           {
//               "type": "ppt",
//               "id": "12345678",
//               "chapter_no":"9",
//               "name": "Design",
//               "time": "6.0",
//               "seen" : true,
//               "time_spent" : 0,
//               "url":'assets/vido/test_video.mp4'
//           }
//         ]
//     }],
//       "assignment" : [
//           {
//               "title" : "",
//               "id" : "",
//               "submitted" : false,
//               "reviewed" : false,
//               "rating" : 0,
//               "added" : "",
//               "due" : ""
//           }
//       ]
//   }];

}
