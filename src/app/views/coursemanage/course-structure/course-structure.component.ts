import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-structure',
  templateUrl: './course-structure.component.html',
  styleUrls: ['./course-structure.component.scss']
})
export class CourseStructureComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  filmEdit =
  {
    "tips":[
      {
        "heading":"Create an outline..",
        "content":"Decide what skills you’ll teach and how you’ll teach them. Organize lectures into sections. Each section should have 3-7 lectures, and include at least one assignment or practical activity."
      },
      {
        "heading":"Introduce yourself and create momentum.",
        "content":"People online want to start learning quickly. Make an introduction section that gives students something to be excited about in the first 10 minutes."
      },
      {
        "heading":"Sections have a clear learning objective.",
        "content":"Introduce each section by describing the section goal and why it’s important. Give lectures and sections titles that reflect their content and have a logical flow."
      },
      {
        "heading":"Lectures cover one concept.",
        "content":"A good lecture length is 2-7 minutes, to keep students interested and help them study in short bursts. Make lectures around single topics so students can easily re-watch specific points later."
      },
      {
        "heading":"Mix and match your lecture types.",
        "content":"Alternate between filming yourself, your screen, and slides or other visuals. Showing yourself can help students feel connected."
      },
      {
        "heading":"Practice activities create hands-on learning.",
        "content":"Help students apply your lessons to their real world with projects, assignments, coding exercises, or worksheets."
      }
    ],
    "requirements":[
      {
        "content":"Your course has at least five lectures"
      },
      {
        "content":"All lectures add up to at least 30+ minutes of total video"
      },
      {
        "content":"You course is composed of valuable educational content (learn more)"
      }
    ],
    "resources":[
      {
        "links":"Udemy Trust & Safety        ",
        "text":"Our policies for instructors and students"
      },
      {
        "links":"Join the community",
        "text":"A place to talk with other instructors"
      },
    ]
  }
}
