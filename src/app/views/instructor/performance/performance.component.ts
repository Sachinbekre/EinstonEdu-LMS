import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.scss']
})
export class PerformanceComponent implements OnInit {
  // studentData =true;conversionData:boolean;engagementData:boolean;overviewData:boolean;

  activeclass1 = '';
  activeclass2 = '';
  activeclass3 = '';
  activeclass4 = '';

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
    if (this.activatedRouteShow === '/instructor/performance') {
      this.activeclass1 = 'active';
    } else if (this.activatedRouteShow === '/instructor/performance/student') {
      this.activeclass2 = 'active';
    }else if (this.activatedRouteShow === '/instructor/performance/engagement') {
      this.activeclass3 = 'active';
    }else if (this.activatedRouteShow === '/instructor/performance/conversion') {
      this.activeclass4 = 'active';
    }else{
      this.activeclass1 = 'active';
    }
  }

  // overview(){
  //   this.overviewData=true;
  //   this.studentData =false;
  //   this.conversionData=false;
  //   this.engagementData=false;
  // }
  // student(){
  //   this.overviewData=false;
  //   this.studentData =true;
  //   this.conversionData=false;
  //   this.engagementData=false;
  // }
  
  // engagement(){
  //   this.overviewData=false;
  //   this.studentData =false;
  //   this.engagementData=true;
  //   this.conversionData=false;
    
  // }
  // conversion(){
  //   this.overviewData=false;
  //   this.studentData =false;
  //   this.engagementData=false;
  //   this.conversionData=true;
  // }
}
