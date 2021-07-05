import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim="Welcome to Luminar Bank";
  account="Account Number Please";
  accno="";
  pswd="";
  users:any={
    1000:{acno:1000,username:"userone",password:"userone",actype:"savings",balance:5000},
    1001:{acno:1001,username:"usertwo",password:"usertwo",actype:"savings",balance:6000},
    1002:{acno:1002,username:"userthree",password:"userthree",actype:"savings",balance:7000},

}

  constructor() { }

  ngOnInit(): void {
  }

  accChange(event:any){
    this.accno=event.target.value;
    console.log(this.accno);
    
  }
pswdChange(event:any){
  this.pswd=event.target.value;
  console.log(this.pswd);
  
}


  login(){

    var accno=this.accno;
    var pswd=this.pswd;
    let accDetails=this.users;
    if(accno in accDetails){
      // console.log(accDetails[accno]["password"]);
      
      if(pswd==accDetails[accno]["password"]){
        alert("Login Successful")
      }
      else{
        alert("Incorrect Password")
      }
    }

    
    else{
      alert("Invalid Account Number")
    }





  }

}
