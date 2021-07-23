import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  user:any= {
    1000:{acno:1000,uname:"afzal",password:"userone",balance:6000},
    1001:{acno:1001,uname:"ajma",password:"usertwo",balance:65000},
    1002:{acno:1002,uname:"ali",password:"userthree",balance:1000}
  }

  constructor() { }

  register(acno:any,uname:any,password:any)
  {
    
    
    let accDetail = this.user
    if(acno in accDetail)
    { 
      alert("user already exists")
      return false
    } else {
      accDetail[acno]= {
        acno,
        uname,
        password,
        balance:0
        
      }
      // console.log("inserted");
      
      // console.log(accDetail);
      
      return true
    }
   
  }

  login(acno:any,pass:any)
  {
    let accDetails = this.user
    console.log("accDetail");
    
    console.log(accDetails);
    console.log("this.user");
    
    console.log(this.user);
    
    
    if(acno in accDetails)
    {
      if(pass == accDetails[acno]["password"])
      {
        alert("login success")
        return true
      }
      else{
        alert("incorrect password")
        return false
      }
    }
     else{
       alert("invalid user")
       return false
     }

  }

  // deposit

    deposit(acno:any,pswd:any,amt:any)
    {
      var amount = parseInt(amt)
      let db = this.user
      if(acno in db)
      {
        if(pswd == db[acno]["password"])
        {
          db[acno]["balance"]+=amount
          return db[acno]["balance"]
        }
      }
    }

  //deposit ends
}
