import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder , Validators} from '@angular/forms';
import {LoginClass} from '../models/class';
import { UserService } from '../user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userId: any;

  constructor( private fb:FormBuilder, private route:Router, private userservice:UserService) { }

  ngOnInit(): void {
   this.login()
  }
  login()
  {
    var result=this.userservice.validateusers(this.loginForm.controls['fname'].value,
    this.loginForm.controls['password'].value)
    
   if(result == true)
   {
   
 
    this.route.navigate (['/admin'])
    localStorage.setItem('key','admin')
    // app.navbar.hide('login');
   }
   else
   {
    // alert("invalid user")
   }
  }
  loginForm=this.fb.group({
    fname:['',[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    password:['',Validators.required, ]
      });
      // login(){
      //   const loginClass =new LoginClass (this.loginForm.controls['fname'] .value,
      //                                      this.loginForm.controls['password'].value)
      
     
  //        this.userservice
  //        .login (loginClass)
  //        .subscribe((res: any) => {
  //          console.log(res);
  //          if (res=='')
  //          {
  //            alert("Login Failed");
  //          }
  //          else
  //          {
  //            alert("Login Sucessful");
            
  //     }
  //   });
  // }
}