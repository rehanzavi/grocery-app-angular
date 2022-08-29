import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private Base_Url = "http://apolis-grocery.herokuapp.com/api/";

  constructor(private http: HttpClient) { }

  getCategory():Observable<any>{
    return this.http.get(`${this.Base_Url}category`);
  }

  getSubProducts(SubId:any):Observable<any>{
    return this.http.get(`${this.Base_Url}products/cat/${SubId}`);
  }

  getSubCategory(CatId: any):Observable<any>{
    return this.http.get(`${this.Base_Url}subcategory/${CatId}`);
  }

  getProductDetails(ProId: any):Observable<any>{
    return this.http.get(`${this.Base_Url}products/${ProId}`);
  }
}
