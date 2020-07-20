import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NgRedux } from '@angular-redux/store';
import { CHANGELEFTMENUBAR, CHANGESETTING, HEADERCONTENTCHANGE, HEADERRESET } from '../../redux/actions/actions';
import { IAppState } from '../../redux/combineReducer';
import { NgxCarousel } from 'ngx-carousel';
// import * as $ from 'jquery'
declare let $: any;
declare let layerSlider: any;



@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private ngRedux: NgRedux<IAppState>) { 
    this.itemList = [      
    ]
    
    this.Config = {
      grid: {xs: 1, sm: 3, md: 3, lg: 4, all: 0},
      slide: 1,
      speed: 1000,
      point: {
        visible: true
      },
      loop: false,
      touch: true
    }
  }
  ngOnInit(): void {
    $(document).ready(function(){
     
      // Calling LayerSlider on the target element with custom slider options
      $('#sl').layerSlider({
        sliderVersion: '6.0.0',
				responsiveUnder: 0,
				layersContainer: 0,
				slideBGSize: 'auto',
				skin: 'v5',
				// thumbnailNavigation: 'always',
        skinsPath: '../../../assets/layerslider/skins/', 
  

          // Please make sure to separate object
          // properties (i.e. your options) with a comma.
      });
  });
   }
  courseList = [
    {
      "courseId": "1",
      "courseTitle": "Java Programming for Beginners",
      "img": "assets/img/java.png",
      "author": "Shiva Kumar",
      "stars": "",
      "rating": "4,5",
      "totalCounts": "32,453",
      "actualPrice": "16,200",
      "discountPrice": "920"
    },
    {
      "courseId": "2",
      "courseTitle": "Python Programming for Beginners",
      "img": "assets/img/python.png",
      "author": "Prathik Pai",
      "stars": "",
      "rating": "4,9",
      "totalCounts": "32,453",
      "actualPrice": "18,300",
      "discountPrice": "820"
    },
    {
      "courseId": "3",
      "courseTitle": "PHP Programming for Beginners",
      "img": "assets/img/php.jpg",
      "author": "Technical Thej",
      "stars": "",
      "rating": "4,3",
      "totalCounts": "28,453",
      "actualPrice": "10,200",
      "discountPrice": "620"
    },
    {
      "courseId": "4",
      "courseTitle": "Angular  Programming for Beginners",
      "img": "assets/img/angular6.jpg",
      "author": "Sushmitha",
      "stars": "",
      "rating": "4,4",
      "totalCounts": "22,453",
      "actualPrice": "15,200",
      "discountPrice": "720"
    },
    {
      "courseId": "5",
      "courseTitle": "Cloud  computing for Beginners",
      "img": "assets/img/cloud.jpg",
      "author": "Sachin B S",
      "stars": "",
      "rating": "4,8",
      "totalCounts": "42,453",
      "actualPrice": "15,200",
      "discountPrice": "880"
    },
    {
      "courseId": "6",
      "courseTitle": "dotNet  for Beginners",
      "img": "assets/img/dotNet.jpg",
      "author": "James Bond",
      "stars": "",
      "rating": "4,8",
      "totalCounts": "42,453",
      "actualPrice": "17,200",
      "discountPrice": "900"
    }

  ] 
  // changeleftMenu() {
  //   this.ngRedux.dispatch({
  //     type: CHANGELEFTMENUBAR, data: [
  //       {
  //         name: 'Dashboard',
  //         url: '/dashboard',
  //         icon: 'icon-speedometer',
  //         badge: {
  //           variant: 'info',
  //           text: 'NEW'
  //         }
  //       },
  //       {
  //         name: 'Dashboard',
  //         url: '/dashboard',
  //         icon: 'icon-speedometer',
  //         badge: {
  //           variant: 'info',
  //           text: 'NEW'
  //         }
  //       }
  //     ]
  //   });
  // }
  // DummyHide() {
  //   this.ngRedux.dispatch({ type: CHANGESETTING, data: { showBreadCrumbBar: false } });
  // }
  // DummyShow() {
  //   this.ngRedux.dispatch({ type: CHANGESETTING, data: { showBreadCrumbBar: true } });
  // }
  // IncreasePendingTask() {
  //   this.ngRedux.dispatch({
  //     type: HEADERCONTENTCHANGE, data: {
  //       pendingTaskCount: 4
  //     }
  //   });
  // }

  // AddPendingTask() {
  //   this.ngRedux.dispatch({
  //     type: HEADERCONTENTCHANGE, data: {
  //       pendingTaskList: [{
  //         link: '#',
  //         name: 'Call to dad',
  //         completion: 20,
  //         indication: 'bg-info'
  //       },
  //       {
  //         link: '#',
  //         name: 'Zafar',
  //         completion: 50,
  //         indication: 'bg-danger'
  //       }], pendingTaskCount: 2
  //     }
  //   });
  // }

  // AddNotification() {
  //   this.ngRedux.dispatch({
  //     type: HEADERCONTENTCHANGE, data: {
  //       notificationList: [
  //         {
  //           link: '#',
  //           icon: 'icon-chart',
  //           state: 'text-warning',
  //           desc: 'Sales report is ready'
  //         }
  //       ], notificationCount: 10
  //     }
  //   });
  // }

  // resetHeader() {
  //   this.ngRedux.dispatch({ type: HEADERRESET });
  // }
  public itemList: object[] = [];
  
  public Config: NgxCarousel;
  
 

}
