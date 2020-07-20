import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  activeclass1 = '';
  activeclass2 = '';
  activeclass3 = '';
  activeclass4 = '';
  activeclass5 = '';
  activatedRouteShow;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {

    this.activatedRouteShow = activatedRoute['_routerState']['snapshot']['url'];
    // console.log(activatedRoute['_routerState']['snapshot']['url']); // array of states
  }

  ngOnInit() {
    this.activeTab();
  }
activeTab() {
    if (this.activatedRouteShow === '/notification/instructor') {
      this.activeclass1 = 'active';
    } else if (this.activatedRouteShow === '/notification/students') {
      this.activeclass2 = 'active';
    }else{
      this.activeclass1 = 'active';
    }
  }
}
