import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-overview-ghost',
  templateUrl: './overview-ghost.component.html',
  styleUrls: ['./overview-ghost.component.scss']
})
export class OverviewGhostComponent implements OnInit {
  @Input() ghosts : any[];
  constructor() { }

  ngOnInit() {
  }

}
