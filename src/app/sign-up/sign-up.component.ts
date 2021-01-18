import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { User } from '../user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  user:User = new User();
  user1:any;
  message_1:any;
  message:any;

  constructor(private service:UsersService,private router: Router
    ) { }

  ngOnInit(): void {
  }
  public signupNow(){
    let resp = this.service.signup(this.user);
    resp.subscribe((data) => this.message_1=data);
    this.router.navigate(["/signupmessage"])
  }
  public connect(){
    this.router.navigate(["/"])
  }

  public getByIdNow(uusername:String){
    let resp = this.service.getById(uusername)
    resp.subscribe(data=> this.user1=data);
    this.login();
  }
  public login(){
    if(this.user.uusername==this.user1.uusername){
      this.message="The account already exists for the given username, please choose the different username.";
    }else{
      this.signupNow();
    }
  }  

}
