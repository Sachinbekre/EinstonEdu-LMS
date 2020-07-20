import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bookmarks-ghost',
  templateUrl: './bookmarks-ghost.component.html',
  styleUrls: ['./bookmarks-ghost.component.scss']
})
export class BookmarksGhostComponent implements OnInit {
  @Input() ghosts : any[];
  constructor() { }

  ngOnInit() {
  }

}
