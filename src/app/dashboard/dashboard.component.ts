import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user = this.ds.currentUser
  acno = ""
  pswd =""
  amt =""
  acnoW = ""
  pswdW =""
  amtW =""
  depositForm = this.fb.group({
    acno:['',[Validators.required,Validators.minLength(4),Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]],
    amt:['',[Validators.required,Validators.pattern('[0-9]*')]],
    
  })
  withdrawForm = this.fb.group({
    acnoW:['',[Validators.required,Validators.minLength(4),Validators.pattern('[0-9]*')]],
    pswdW:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]],
    amtW:['',[Validators.required,Validators.pattern('[0-9]*')]]
  })
  currentUser = this.ds.currentUser
  constructor(private ds:DataService,private fb:FormBuilder) 
  {

   }

  ngOnInit(): void {
  }
  deposit()
  {
   
    if(this.depositForm.valid)
    {
      var acno = this.depositForm.value.acno
      var pswd = this.depositForm.value.pswd
      var amt = this.depositForm.value.amt
  
      var res = this.ds.deposit(acno,pswd,amt)
      if(res)
      {
        alert("Amount"+amt+"credited. New Balance is "+res)
      }
    }

  }
  withdraw()
  {
    
    if(this.withdrawForm.valid)
    {
    var acno = this.withdrawForm.value.acnoW
    var pswd = this.withdrawForm.value.pswdW
    var amt = this.withdrawForm.value.amtW

    var res = this.ds.withdraw(acno,pswd,amt)
    if(res)
    {
      alert("Amount"+amt+"Debited. New Balance is "+res)
    }
  }
    }

}
