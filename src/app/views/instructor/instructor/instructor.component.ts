import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.scss']
})
export class InstructorComponent implements OnInit {
  activeclass1 = '';
  activeclass2 = '';
  activeclass3 = '';

  activatedRouteShow;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {

    this.activatedRouteShow = activatedRoute['_routerState']['snapshot']['url'];
    // console.log(activatedRoute['_routerState']['snapshot']['url']); // array of states
  }



  ngOnInit() {
    this.activeTab()
  }
  
  activeTab() {
    if (this.activatedRouteShow === '/instructor/course') {
      this.activeclass1 = 'active';
    } else if (this.activatedRouteShow === '/instructor/performance') {
      this.activeclass2 = 'active';
    }else if(this.activatedRouteShow === '/instructor/marketplace-insight'){
      this.activeclass3 = 'active';
    }else{
      this.activeclass2 = 'active';
    }
  }

  navigateTo(value) {
    console.log(value)
    if (value==='announcement') {
        this.router.navigate(['announcements']);
    }
   else{
    this.router.navigate(['courses']);
   }
}
}
