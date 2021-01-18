import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import { TravelsService } from '../services/travels.service';
import { Travel } from '../travel';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private router:Router,private service:TravelsService) { }
  travel:Travel=new Travel();
  message:any;
  ngOnInit(): void {
  }
  public connect(){
    this.router.navigate(["/journey"])
  }
  public updateNow(){
    let resp = this.service.update(this.travel);
    resp.subscribe(data=> this.message=data);
    this.router.navigate(["/updatemessage"]);

  }

}
