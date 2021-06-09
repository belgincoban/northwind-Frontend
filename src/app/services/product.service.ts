import { Injectable } from '@angular/core';
import {HttpClient} from'@angular/common/http';
import { Observable } from 'rxjs';
import { ListReponseModel } from '../models/listResponseModel';
import { product } from '../models/product';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl = 'https://localhost:44301/api/'; 
  constructor(private httpClient:HttpClient) { }

  getProducts():Observable<ListReponseModel<product>>{
    let newPath = this.apiUrl + "products/getall"
   return this.httpClient.get<ListReponseModel<product>>(newPath);

  }

  getProductsByCategory(categoryId:Number):Observable<ListReponseModel<product>>{
    let newPath = this.apiUrl + "products/getbycategory?categoryId="+categoryId
    return this.httpClient.get<ListReponseModel<product>>(newPath);
 
   }
   add(product:product):Observable<ResponseModel>{
     return this.httpClient.post<ResponseModel>(this.apiUrl+"products/add",product)
   }
  
}
