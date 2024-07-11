import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private _baseUrl:string = "https://fakestoreapi.com"
  constructor(private http:HttpClient) { }

  getAll(limit:any = 5,sortType:any = "desc",category:any = ''):Observable<any>{
    return this.http.get(`${this._baseUrl}/products?limit=${limit}&sort=${sortType}`)
  }

  getById(productId:any):Observable<any>{
    return this.http.get(`${this._baseUrl}/products/${productId}`)
  }

  
  getCategories():Observable<any>{
    return this.http.get(`${this._baseUrl}/products/categories`)
  }

  getFiltered(category:any,limit:any,sortType:any):Observable<any>{
    return this.http.get(`${this._baseUrl}/products/category/${category}?limit=${limit}&sort=${sortType}`)
  }

  create(data:any):Observable<any>{
    return this.http.post(`${this._baseUrl}/products`, data)
  }

  update(productId:any,data:any):Observable<any>{
    return this.http.put(`${this._baseUrl}/products/${productId}`, data)
  }

  delete(productId:any):Observable<any>{
return this.http.delete(`${this._baseUrl}/products/${productId}`)
  }
}
