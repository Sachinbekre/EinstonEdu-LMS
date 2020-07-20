import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-archived-ghost',
  templateUrl: './archived-ghost.component.html',
  styleUrls: ['./archived-ghost.component.scss']
})
export class ArchivedGhostComponent implements OnInit {
  @Input() ghosts : any[];
  constructor() { }

  ngOnInit() {
  }

}
