import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-wishlist-ghost',
  templateUrl: './wishlist-ghost.component.html',
  styleUrls: ['./wishlist-ghost.component.scss']
})
export class WishlistGhostComponent implements OnInit {
  @Input() ghosts : any[];
  constructor() { }

  ngOnInit() {
  }

}
