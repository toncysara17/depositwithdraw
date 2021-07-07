import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // cname="";
  acno="";
  pwd="";
  amt="";

  acno1="";
  pwd1="";
  amt1="";

  constructor(private ds:DataService) { }

  ngOnInit(): void {
  }
  deposit(){
    var acno=this.acno;
    var pwd=this.pwd;
    var amt=this.amt;

    var result=this.ds.deposit(acno,pwd,amt)

    if(result){
      alert(amt+ " Deposited successfully and new balance is :"+result)

    }
  }
  withdraw(){
    var acno=this.acno1;
    var pwd=this.pwd1;
    var amt=this.amt1;

    var result=this.ds.withdraw(acno,pwd,amt)
    if (result){
      alert(amt+ " Debited  successfully and new balance is :"+result)

    }

  }

}
