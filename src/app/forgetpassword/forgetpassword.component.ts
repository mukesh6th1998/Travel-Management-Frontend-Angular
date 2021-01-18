import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import { UsersService } from '../services/users.service';
import { User } from '../user';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {
  user:User = new User();
  message:any;

  constructor(private router:Router, private service:UsersService) { }

  ngOnInit(): void {
  }

  public connect(){
    this.router.navigate(["/sign-in"]);
  }

  public forgetNow(){
    let resp = this.service.forget(this.user);
    resp.subscribe(data=> this.message=data);
  }

}
