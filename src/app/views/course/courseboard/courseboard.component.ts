import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-courseboard',
  templateUrl: './courseboard.component.html',
  styleUrls: ['./courseboard.component.scss']
})
export class CourseboardComponent implements OnInit {
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

    // this.activeTab() 
    this.activepills();
  }
  // activeTab() {
  //   if (this.activatedRouteShow === '/course/overview') {
  //     this.activeclass1 = 'active';
  //   } else if (this.activatedRouteShow === '/course/courselist') {
  //     this.activeclass2 = 'active';
  //   } else if (this.activatedRouteShow === '/course/q&a') {
  //     this.activeclass3 = 'active';
  //   } else if (this.activatedRouteShow === '/course/bookmarks') {
  //     this.activeclass4 = 'active';
  //   } else if (this.activatedRouteShow === '/course/announcement') {
  //     this.activeclass5 = 'active';
  //   }else{
  //     this.activeclass1 = 'active';
  //   }
  // }

  activepills(){
switch (this.activatedRouteShow) {
   case "/course/overview": {
    this.activeclass1 = 'active';
      break;
   }
	
   case "/course/courselist": {
    this.activeclass2 = 'active';
      break;
   }
	
   case "/course/q&a": {
    this.activeclass3 = 'active';
      break;
   }
	
   case "/course/bookmarks": {
    this.activeclass4 = 'active';
      break;
   }
   case "/course/announcement": {
    this.activeclass5 = 'active';
      break;
   }
	
   default: {
      console.log("Invalid choice");
      break;
   }
}
  }

}
