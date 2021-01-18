import { Component, OnInit } from '@angular/core';
import { TravelsService } from '../services/travels.service';
import { Router } from '@angular/router';
import { Travel } from '../travel';

@Component({
  selector: 'app-journey',
  templateUrl: './journey.component.html',
  styleUrls: ['./journey.component.css']
})
export class JourneyComponent implements OnInit {
  travels:any;
  message:any;
  constructor(private service:TravelsService,private router:Router) { }

  ngOnInit(): void {
    let resp = this.service.journeyList();
    resp.subscribe((data)=>this.travels=data);
  }
  public connect(){
    this.router.navigate(["/page1"]);
  }
  public connect1(){
    this.router.navigate(["/update"]);
  }
  public deleteNow(id:Number){
    let resp = this.service.delete(id);
    resp.subscribe(data=>this.message=data);
    this.router.navigate(["/deletemessage"]);
  }

}
