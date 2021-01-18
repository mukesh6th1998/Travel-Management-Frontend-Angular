import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import{Router} from '@angular/router';

@Component({
  selector: 'app-updatemessage',
  templateUrl: './updatemessage.component.html',
  styleUrls: ['./updatemessage.component.css']
})
export class UpdatemessageComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  public connect(){
    this.router.navigate(["/journey"]);
  }

}
