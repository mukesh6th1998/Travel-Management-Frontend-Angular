import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  constructor(private http:HttpClient) {
   }
  
  public signup(user:User){
    return this.http.post("http://localhost:8081/sign-up",user,{responseType:'text' as 'json'});
  }
  public getById(uusername:String){
    return this.http.get("http://localhost:8081/user/"+uusername);
  }

  public forget(user:any){
    return this.http.put("http://localhost:8081/forget",user,{responseType:'text' as 'json'});
  }

}
