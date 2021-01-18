import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Travel } from '../travel';

@Injectable({
  providedIn: 'root'
})
export class TravelsService {

  constructor(private http:HttpClient) { }

  public add(travel:Travel){
    return this.http.post("http://localhost:8082/add",travel,{responseType:'text' as 'json'});
  }

  public update(travel:Travel){
    return this.http.put("http://localhost:8081/update",travel,{responseType:'text' as 'json'});
  }

  public journeyList(){
    return this.http.get("http://localhost:8081/journeys");
  }

  public delete(id:Number){
    return this.http.delete("http://localhost:8081/delete/"+id, {responseType:'text' as 'json'});
  }
}
