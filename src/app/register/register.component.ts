import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  uname = ""
  acno = ""
  pswd = ""
  constructor(private ds:DataService,private router:Router) {
    // console.log(this.ds.user);
   }

  ngOnInit(): void {
  }


  register()
  {
   
    var uname = this.uname
    var acno = this.acno
    var pswd = this.pswd
    
    var result = this.ds.register(acno,uname,pswd)

    if(result)
    {
      alert("register Successful")
      this.router.navigateByUrl("")
    }else{
      alert("user already exists... pls log in")
      this.router.navigateByUrl("")
    }


  }
}
