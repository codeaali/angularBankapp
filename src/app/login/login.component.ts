import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim = "your banking partner"
  //prop binding
  entermsg = "enter your username"
  acno = ""
  pwd = ""
  //creating db
  user:any = {
    1000:{acno:1000,uname:"afzal",password:"userone",balance:6000},
    1001:{acno:1001,uname:"ajma",password:"usertwo",balance:65000},
    1002:{acno:1002,uname:"ali",password:"userthree",balance:1000}
  }

  constructor() { }

  ngOnInit(): void {
  }
  usernameChange(event:any){
    this.acno = event.target.value
    
    
    
  }
  pswdChange(event:any)
  {
    this.pwd = event.target.value
  }

  signin()
  {
    let username = this.acno
    let password = this.pwd
    let db = this.user
    if(username in db){
      if(password==db[username]["password"])
      {
        alert("login success")
      }else{
        alert("wrong password")
      }
    }else{
      alert("user not found")
    }
  }

}
