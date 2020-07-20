import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss','../../../../../node_modules/quill/dist/quill.snow.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileComponent implements OnInit {
  dataName;
  user = { fname: '', lname: '',hline:'' }
  
  private _name = '';
  madel = [{},{}];
  @Input() parentvalue: boolean;
  set name(name: string) {
    this._name = (name && name.trim()) || '<no name set>';
  }
  get name(): string {
    console.log(this._name);
    return this._name;
  }
  constructor() {
  }

  ngOnInit() {


  }


}
