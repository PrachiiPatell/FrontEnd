import { Component } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Reactive Form';
  /*data="Code Step by Step"
  getValue(){
    return "Get Function Data"
  }
  today=Date();
  user={
name:'prachi',
age:'21'}*/
loginForm=new FormGroup
({user:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
emailid:new FormControl('',[Validators.required,Validators.email]),
password:new FormControl('',[Validators.required,Validators.minLength(5)]),
  })
  loginUser(){
    console.warn(this.loginForm.value);
  }
  get user(){
    return this.loginForm.get('user')
  }
  get password(){
    return this.loginForm.get('password')
  }
  get emailid(){
    return this.loginForm.get('emailid')
  }
}
