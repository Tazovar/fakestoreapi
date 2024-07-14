import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  isAuthenticated(){
let token = localStorage.getItem("token");
if(token){
  return true
}else{
 return false
}
  }


  setToken(response:any){
localStorage.setItem("token", JSON.stringify(response?.token))
  }


  removeToken(){
    localStorage.removeItem("token")
  }
  logIn(data:any):Observable<any>{
return this.http.post(`https://fakestoreapi.com/auth/login`,data)
  }



}
