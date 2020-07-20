import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-announcement-ghost',
  templateUrl: './announcement-ghost.component.html',
  styleUrls: ['./announcement-ghost.component.scss']
})
export class AnnouncementGhostComponent implements OnInit {
  @Input() ghosts : any[];
  constructor() { }

  ngOnInit() {
  }

}
