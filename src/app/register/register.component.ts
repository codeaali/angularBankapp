import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
  
  registerForm = this.fb.group({
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    acno:['',[Validators.required,Validators.minLength(4),Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]]

  })
  constructor(private ds:DataService,private router:Router,private fb:FormBuilder) {
    // console.log(this.ds.user);
   }

  ngOnInit(): void {
  }


  register()
  {
   
   
    
    if(this.registerForm.valid)
      {
        var uname = this.registerForm.value.uname
        var acno = this.registerForm.value.acno
        var pswd = this.registerForm.value.pswd
        var result = this.ds.register(acno,uname,pswd)

        if(result)
        {
          alert("register Successful")
          this.router.navigateByUrl("")
        }else{
          alert("user already exists... pls log in")
          this.router.navigateByUrl("")
        }
      } else {
        alert("invalid forms")
      }


  }
}
