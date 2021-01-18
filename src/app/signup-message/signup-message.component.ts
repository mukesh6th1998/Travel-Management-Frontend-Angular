import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-message',
  templateUrl: './signup-message.component.html',
  styleUrls: ['./signup-message.component.css']
})
export class SignupMessageComponent implements OnInit {

  constructor( private router:Router) { }

  ngOnInit(): void {
  }
  public connect(){
    this.router.navigate(["/"]);
  }

}
