import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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

}
