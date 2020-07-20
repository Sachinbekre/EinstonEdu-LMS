import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.scss']
})
export class HeaderBarComponent implements OnInit {

  constructor(public _router:Router) {
    
   }

  ngOnInit() {
    this._router.routeReuseStrategy.shouldReuseRoute = function(){
      return false;
  };
  
  this._router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
          this._router.navigated = false;
          window.scrollTo(0, 0);
      }
  });
  }

}
