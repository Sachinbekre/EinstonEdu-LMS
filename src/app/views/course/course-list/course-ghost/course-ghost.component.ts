import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-course-ghost',
  templateUrl: './course-ghost.component.html',
  styleUrls: ['./course-ghost.component.scss']
})
export class CourseGhostComponent implements OnInit {
  @Input() ghosts : any[];
  constructor() { }

  ngOnInit() {
  }

}
