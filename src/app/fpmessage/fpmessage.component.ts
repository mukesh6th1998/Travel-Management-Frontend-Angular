import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';

@Component({
  selector: 'app-fpmessage',
  templateUrl: './fpmessage.component.html',
  styleUrls: ['./fpmessage.component.css']
})
export class FpmessageComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  public connect(){
    this.router.navigate(["/sign-in"])
  }

}
