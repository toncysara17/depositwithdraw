import { debugOutputAstAsTypeScript } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  users: any = {
    1000: { acno: 1000, username: "userone", password: "userone", actype: "savings", balance: 5000 },
    1001: { acno: 1001, username: "usertwo", password: "usertwo", actype: "savings", balance: 6000 },
    1002: { acno: 1002, username: "userthree", password: "userthree", actype: "savings", balance: 7000 },

  }

  constructor() { }

  register(acno: any, username: any, password: any, acctype: any) {
    let accDetails = this.users;
    if (acno in accDetails) {
      return false;
    }
    else {
      accDetails[acno] = {
        acno,
        username,
        password,
        acctype,
        balance: 0
      }
      return true;
    }

  }

  login(acno: any, pwd: any) {

    let accDetails = this.users;
    if (acno in accDetails) {

      if (pwd == accDetails[acno]["password"]) {
        return true;

      }
      else {
        alert("Incorrect Password")
        return false;
      }
    }


    else {
      alert("Invalid Account Number")
      return false;
    }







  }
  deposit(acno: any, pwd: any, amt: any) {
    var amount = parseInt(amt);
    let accDetails = this.users;
    if (acno in accDetails) {

      if (pwd == accDetails[acno]["password"]) {
        accDetails[acno]["balance"] += amount;
        return accDetails[acno]["balance"]

      }
      else {
        alert("Incorrect Password");
        return false;
      }
    }


    else {
      alert("Invalid Account Number")
      return false;
    }





  }
  withdraw(acno: any, pwd: any, amt: any) {
    var amount = parseInt(amt);
    let accDetails = this.users;
    if (acno in accDetails) {
      if (accDetails[acno]["balance"] > amount) {



        if (pwd == accDetails[acno]["password"]) {
          accDetails[acno]["balance"] -= amount;
          return accDetails[acno]["balance"]

        }
        else {
          alert("Incorrect password");
          return false
        }
      }


      else {
        alert("Insufficient balance");
        return false
      }
    }
    else {
      alert("Invalid Account Number");
      return false
    }





  }

}






