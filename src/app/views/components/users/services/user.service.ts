import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _baseUrl:string = "https://fakestoreapi.com"
  constructor(private http:HttpClient) { }

  getAll(limit:number):Observable<any>{
    return this.http.get(`${this._baseUrl}/users?limit=${limit}`)
  }

  getById(userId:any):Observable<any>{
    return this.http.get(`${this._baseUrl}/users/${userId}`)
  }

  getFiltered(sortType:string,limit:number):Observable<any>{
    return this.http.get(`${this._baseUrl}/users?sort=${sortType}&limit=${limit}`)
  }

  create(data:any):Observable<any>{
    return this.http.post(`${this._baseUrl}/users`, data)
  }

  update(userId:any,data:any):Observable<any>{
    return this.http.put(`${this._baseUrl}/users/${userId}`, data)
  }

  delete(userId:any):Observable<any>{
return this.http.delete(`${this._baseUrl}/users/${userId}`)
  }

}
