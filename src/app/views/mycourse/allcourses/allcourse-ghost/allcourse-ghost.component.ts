import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-allcourse-ghost',
  templateUrl: './allcourse-ghost.component.html',
  styleUrls: ['./allcourse-ghost.component.scss']
})
export class AllcourseGhostComponent implements OnInit {
  @Input() ghosts : any[];
  constructor() { }

  ngOnInit() {
  }

}
