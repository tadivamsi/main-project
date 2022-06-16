import { Injectable } from '@angular/core';
import {HttpClient ,HttpHeaders} from '@angular/common/http'
import { LoginClass } from './models/class';
const headersData={
  headers:new HttpHeaders( {'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseURL:string= "//random-data-api.com/api/coffee/random_coffee"

  ;
  // http: any;
 
  constructor(private http:HttpClient) { }
  // login(model:LoginClass){

  //   const headersValue={
  //     headers:new HttpHeaders({'Content-Type': 'application/json'}),
  //   };
  //   return this.http.post(this.baseURL+'/login',model,headersValue)
  // }
  validateusers(user:any,password:any)
  {
    if(user=="admin" && password=="admin")
      {
       return true;      
      }
      else
      {
        return false;
      }
    
    
  }
  getcoffee()
  {
    return this.http.get(
      this.baseURL
      
     
    );
  }
}
