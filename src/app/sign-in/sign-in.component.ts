import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';
import { User } from '../user';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  user:User= new User();
  user1:any;
  message1:any;
  
  constructor(private router:Router,private service:UsersService) { }

  ngOnInit(): void {
  }

  public connect1(){
    this.router.navigate(["/"]);
  }

  public getByIdNow(uusername:String){
    let resp = this.service.getById(uusername)
    resp.subscribe(data=> this.user1=data);
    this.login();
  }
  public login(){
    if(this.user.uusername==this.user1.uusername){
      if(this.user.uusername==this.user1.uusername && this.user.upassword==this.user1.upassword){
        this.router.navigate(["/page1"]);
      }else{
        this.message1="Please enter the correct password."
      }
    }else{
      this.message1="The account doesn't exist for the given username.";
    }

  }

}
