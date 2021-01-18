import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-message',
  templateUrl: './add-message.component.html',
  styleUrls: ['./add-message.component.css']
})
export class AddMessageComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  public connect(){
    this.router.navigate(["/page1"]);
  }

}
