import { Injectable } from '@angular/core';
import {HttpClient} from'@angular/common/http';
import { Observable } from 'rxjs';
import { ListReponseModel } from '../models/listResponseModel';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiUrl = "https://localhost:44301/api/categories/getall" 
  constructor(private httpClient:HttpClient) { }

  getCategories():Observable<ListReponseModel<Category>>{
   return this.httpClient.get<ListReponseModel<Category>>(this.apiUrl);
    
  
  
  }
  
}
