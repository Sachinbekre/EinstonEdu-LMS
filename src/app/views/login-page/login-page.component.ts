import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  constructor( ) { }
 
  // powers = ['Really Smart', 'Super Flexible', 'Weather Changer'];

  user = {name: '', password: ''};
  

  ngOnInit() {
  }

  submit(){

      }
}
