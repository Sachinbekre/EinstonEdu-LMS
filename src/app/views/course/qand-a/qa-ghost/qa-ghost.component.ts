import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-qa-ghost',
  templateUrl: './qa-ghost.component.html',
  styleUrls: ['./qa-ghost.component.scss']
})
export class QaGhostComponent implements OnInit {
  @Input() ghosts : any[];
  constructor() { }

  ngOnInit() {
  }

}
