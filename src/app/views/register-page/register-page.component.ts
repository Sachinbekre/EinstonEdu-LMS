import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {
  passType;
  public forgot : boolean;
  public register:boolean;

  public loggedin = true;
  constructor() {
   }
  user = {name: '',email:'',number:'',otp:'', password1: '',password2:''};

  ngOnInit() {
  }
  
  mouseoverPass(obj) {
    this.passType = 'text';
  }
  mouseoutPass(obj) {
    this.passType = 'password';
  }
  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }
 
  login() {
    this.loggedin = !this.loggedin;
    this.register = !this.register;
    // this.forgot = !this.forgot;

  }
}
