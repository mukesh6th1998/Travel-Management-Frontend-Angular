import { Component, OnInit } from '@angular/core';
import { TravelsService } from '../services/travels.service';
import {Travel} from '../travel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  travel:Travel = new Travel();
  message:any;
  constructor(private service:TravelsService,private router:Router) { }

  ngOnInit(): void {
  }
  public addNow(){
    let resp1 = this.service.add(this.travel);
    resp1.subscribe((data)=>this.message=data);
    this.router.navigate(["/addmessage"])
    
  }
  public connect(){
    this.router.navigate(["/page1"])
  }


}
