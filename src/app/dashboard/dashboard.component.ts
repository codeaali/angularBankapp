import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  acno = ""
  pswd =""
  amt =""
  acnoW = ""
  pswdW =""
  amtW =""

  constructor(private ds:DataService) { }

  ngOnInit(): void {
  }
  deposit()
  {
    var acno = this.acno
    var pswd = this.pswd
    var amt = this.amt

    var res = this.ds.deposit(acno,pswd,amt)
    if(res)
    {
      alert("Amount"+amt+"credited. New Balance is "+res)
    }


  }
  withdraw()
  {
    var acno = this.acnoW
    var pswd = this.pswdW
    var amt = this.amtW

    var res = this.ds.withdraw(acno,pswd,amt)
    if(res)
    {
      alert("Amount"+amt+"Debited. New Balance is "+res)
    }
  }

}
