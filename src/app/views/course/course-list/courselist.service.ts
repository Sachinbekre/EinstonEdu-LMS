import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class CourselistService {

  constructor(private _httpClient:HttpClient) { }

  downloadPDF(): any {
      var a = document.createElement('a');
    return this._httpClient.get('assets/files/angularjs_tutorial.pdf', { responseType: 'blob'})
            .map(res => {
            let blob =  new Blob([res], { type: 'application/pdf', });
            return blob;
        });
        
  }
 
  public courseData =  [{
    "course_id": "C1234",
    "uid" : "",
    "favourite" : false,
    "content_total" : 140,
    "last_visit" : "datetime",
    "content_progress" :101,
    "preference" : {
        "caption" : "",
        "trackable" : true
    },
    "time_spent" : 0,
    "expirydate" : "date",
    "contents": [{
        "section": "1",
        "name": "Getting Started",
        "seen" : 2,
        "content": [
          {
                "type": "video",
                "id": "1234",
                "chapter_no":"1",
                "name": "Intoduction",
                "time": "0.22",
                "seen" : true,
                "time_spent" : 0,
                "url":'assets/vido/test_video.mp4',
                "transcriptFile" :'assets/vido/tips_video.vtt'
              
            },
            {
                "type": "pdf",
                "id": "12345",
                "chapter_no":"2",
                "name": "tutorial notes",
                "time": "2.1",
                "seen" : true,
                "time_spent" : 0,
                "url":'assets/files/angular-ebook.pdf'
            },
            {
                "type": "pdf",
                "id": "12345678",
                "chapter_no":"3",
                "name": "angularjs",
                "time": "6.0",
                "seen" : false,
                "time_spent" : 0,
                "url":'assets/files/angularjs_tutorial.pdf'
            }
        ]
    },
    {
      "section": "2",
      "name": "Introduction",
      "seen" : 3,
      "content": [{
              "type": "video",
              "id": "1234",
              "chapter_no":"4",
              "name": "Intoduction",
              "time": "0.22",
              "seen" : true,
              "time_spent" : 0,
              "url":'assets/vido/test_video.mp4'
          },
          {
              "type": "text",
              "id": "12345",
              "chapter_no":"5",
              "name": "Types",
              "time": "2.1",
              "seen" : true,
              "time_spent" : 0,
              "url":'assets/vido/test_video.mp4'
          },
          {
              "type": "ppt",
              "id": "12345678",
              "chapter_no":"6",
              "name": "Design",
              "time": "6.0",
              "seen" : true,
              "time_spent" : 0,
              "url":'assets/vido/test_video.mp4'
          },
          {
            "type": "video",
            "id": "1234",
            "chapter_no":"7",
            "name": "Intoduction",
            "time": "0.22",
            "seen" : false,
            "time_spent" : 0,
            "url":'assets/vido/test_video.mp4'
        },
        {
            "type": "text",
            "id": "12345",
            "chapter_no":"8",
            "name": "Types",
            "time": "2.1",
            "seen" : false,
            "time_spent" : 0,
            "url":'assets/vido/test_video.mp4'
        },
        {
            "type": "ppt",
            "id": "12345678",
            "chapter_no":"9",
            "name": "Design",
            "time": "6.0",
            "seen" : true,
            "time_spent" : 0,
            "url":'assets/vido/test_video.mp4'
        }
      ]
  }],
    "assignment" : [
        {
            "title" : "",
            "id" : "",
            "submitted" : false,
            "reviewed" : false,
            "rating" : 0,
            "added" : "",
            "due" : ""
        }
    ]
}];
}
