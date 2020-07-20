import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
   
  }
fib(n) {
    var a=0, b=1;
    for (var i=0; i < n; i++) {
      var temp = a+b; 
      a = b;
      b = temp;
      console.log(a);
    }
    // console.log(a);
  }
  
  
}
