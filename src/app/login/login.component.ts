import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim = "your banking partner"
  //prop binding
  entermsg = "enter your username"
  acc =  ""
  pwd = ""
  //creating form builder
  loginForm = this.fb.group({
    acno:['',[Validators.required,Validators.minLength(4),Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]]
  })
 

  constructor(private router:Router,private ds:DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  // usernameChange(event:any){
  //   this.acno = event.target.value
    
    
    
  // }
  // pswdChange(event:any)
  // {
  //   this.pwd = event.target.value
  // }


  // signin(a:any,p:any)
  // {
  //    var acno = a.value
  //   var pswd = p.value
  //   let db = this.user
  //   if(acno in db){
  //     if(pswd==db[acno]["password"])
  //     {
  //       alert("login success")
  //     }else{
  //       alert("wrong password")
  //     }
  //   }else{
  //     alert("user not found")
  //   }
  // }

  // signin()
  // {
  // //   let username = this.acno
  // //   let password = this.pwd
  // //   let db = this.user
  // //   if(username in db){
  // //     if(password==db[username]["password"])
  // //     {
  // //       alert("login success")
  // //     }else{
  // //       alert("wrong password")
  // //     }
  // //   }else{
  // //     alert("user not found")
  // //   }
  // }


  // accChange(event:any)
  // {
  //   this.acc=event.target.value
    
  // }
  // pswdChange(event:any)
  // {
  //   this.pwd=event.target.value
  // }


  login()
  {
    
    if(this.loginForm.valid)
    {
      var acno = this.loginForm.value.acno
    var pswd = this.loginForm.value.pswd
    var res = this.ds.login(acno,pswd)
    if(res)
    {
      alert("login success")
      this.router.navigateByUrl("dashboard")
    } 
    } else
    {
      alert("invalid form")
    }
   
  }



//class end
}
