import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-collection-ghost',
  templateUrl: './collection-ghost.component.html',
  styleUrls: ['./collection-ghost.component.scss']
})
export class CollectionGHostComponent implements OnInit {
  @Input() ghosts : any[];
  constructor() { }

  ngOnInit() {
  }

}
