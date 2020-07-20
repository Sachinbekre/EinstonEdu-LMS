import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-captions',
  templateUrl: './captions.component.html',
  styleUrls: ['./captions.component.scss']
})
export class CaptionsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public enablebtn:boolean;
  enable(){
    this.enablebtn = !this.enablebtn;
  }
}
