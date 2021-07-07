import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

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
 

  constructor(private router:Router,private ds:DataService) { }

  ngOnInit(): void {
  }
  
  login(){ 

    var acno=this.accno;
    var pwd=this.pswd;

    let accDetails=this.ds.users;

  var result=this.ds.login(acno,pwd)

    if(result){
        alert("login successful");
        this.router.navigateByUrl("dashboard")
    }
  }
}







    // }
    // if(accno in accDetails){
    //   // console.log(accDetails[accno]["password"]);
      
    //   if(pswd==accDetails[accno]["password"]){
    //     alert("Login Successful")
    //     this.router.navigateByUrl("dashboard");
    //   }
    //   else{
    //     alert("Incorrect Password")
    //   }
    // }

    
    // else{
    //   alert("Invalid Account Number")
    // }





//   }

// }

//   accChange(event:any){
//     this.accno=event.target.value;
//     console.log(this.accno);
    
//   }
// pswdChange(event:any){
//   this.pswd=event.target.value;
//   console.log(this.pswd);
  
// }

// // login using template referencing

// login(a:any,p:any){       

//   var accno=a.value;
//   var pswd=p.value;
//   let accDetails=this.users;
//   if(accno in accDetails){
//     // console.log(accDetails[accno]["password"]);
    
//     if(pswd==accDetails[accno]["password"]){
//       alert("Login Successful")
//     }
//     else{
//       alert("Incorrect Password")
//     }
//   }


//   else{
//     alert("Invalid Account Number")
//   }

//   alert("Login Clicked")
// }

// }


