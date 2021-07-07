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
  acctype="";
  acno="";
  uname="";
  pwd="";

  // registerForm=this.fb.group({
  //   acctype:['',[Validators.required,Validators.pattern('[a-zA-Z')*')]],
  //   acno:['',[Validators.required,Validators.minLength(4),Validators.pattern('[0-9]*')]],
  //   uname:['',[Validators.required,Validators.pattern('[a-zA-Z')]],
  //   pwd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  // })


  constructor(private ds:DataService,private router:Router ) { }

  ngOnInit(): void {
  }
  register(){
    var acno=this.acno;
    var uname=this.uname;
    var pwd=this.pwd;
    var acctype=this.acctype;
    // console.log(acno,uname,pwd,acctype);
    

    var result=this.ds.register(acno,uname,pwd,acctype)

    if(result){
      alert("Successfully Registered");
      this.router.navigateByUrl("")


    }
    else{
      alert("Account already exist Please Log In");
      this.router.navigateByUrl("")

    }




  }
  

}
