import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mycourse',
  templateUrl: './mycourse.component.html',
  styleUrls: ['./mycourse.component.scss']
})
export class MycourseComponent implements OnInit {
  activatedRouteShow;
  activeclass1; 
  activeclass2; 
  activeclass3; 
  activeclass4; 
  constructor(private router: Router,
    private activatedRoute: ActivatedRoute) { 
      this.activatedRouteShow = activatedRoute['_routerState']['snapshot']['url'];
    }

  ngOnInit() {
    this.activeTab();
  }
 activeTab() {
    if (this.activatedRouteShow === '/mycourse/allcourses') {
      this.activeclass1 = 'active';
    } else if (this.activatedRouteShow === '/mycourse/collections') {
      this.activeclass2 = 'active';
    } else if (this.activatedRouteShow === '/mycourse/wishlist') {
      this.activeclass3 = 'active';
    } else if (this.activatedRouteShow === '/mycourse/archived') {
      this.activeclass4 = 'active';
    } else{
      this.activeclass1 = 'active';
    }
  }
}
