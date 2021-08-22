import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentUser = ""
  currentAcc = ""
  user:any= {
    1000:{acno:1000,uname:"afzal",password:"userone",balance:6000,transaction:[]},
    1001:{acno:1001,uname:"ajmal",password:"usertwo",balance:65000,transaction:[]},
    1002:{acno:1002,uname:"ali",password:"userthree",balance:1000,transaction:[]}
  }

  constructor() { 
    this.getDetails()
  }

  saveDetails()
  {
    localStorage.setItem("user",JSON.stringify(this.user))
    if(this.currentUser)
    {
      localStorage.setItem("currentUser",JSON.stringify(this.currentUser))
    }
    if(this.currentAcc)
    {
      localStorage.setItem("currentAcc",JSON.stringify(this.currentAcc))
    }
  }

  getDetails()
  {
    if(localStorage.getItem("user"))
      {
        this.user = JSON.parse(localStorage.getItem("user") || '')
      }
    if(localStorage.getItem("currentUser"))
    {
      this.currentUser = JSON.parse(localStorage.getItem("currentUser") || '')
    }
    if(localStorage.getItem("currentAcc"))
    {
      this.currentAcc = JSON.parse(localStorage.getItem("currentAcc") || '')
    }
  }

  getTransaction()
  {
    return this.user[this.currentAcc].transaction
  }

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
        balance:0,
        transaction:[]
        
      }
      // console.log("inserted");
      
      // console.log(accDetail);
      this.saveDetails()
      return true
    }
   
  }

  login(acno:any,pswd:any)
  {
    let accDetails = this.user
    console.log("accDetail");
    
    console.log(accDetails);
    console.log("this.user");
    
    console.log(this.user);
    
    
    if(acno in accDetails)
    {
      if(pswd == accDetails[acno]["password"])
      {
        this.currentUser = accDetails[acno]["uname"]
        this.currentAcc = acno
        this.saveDetails()
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
          db[acno].transaction.push({
            amount:amount,
            type:"CREDIT"
          })
          this.saveDetails()
          return db[acno]["balance"]
        }
      }
    }

  //deposit ends
  //withdraw begin

  withdraw(acno:any,pswd:any,amt:any)
  {

   var amount = parseInt(amt)
      let db = this.user
      if(acno in db)
      {
        if(pswd == db[acno]["password"])
        {
         if(db[acno]["balance"] >amount)
         {
          db[acno]["balance"]-=amount
          db[acno].transaction.push({
            amount:amount,
            type:"DEBIT"
          })
          this.saveDetails()
          return db[acno]["balance"]
         } else {
           alert("insufficient balance")
           return false
         }
        }
      }
  }

  //withdraw ends
}
