import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { adminCategory } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryModalService {

  private apiUrl = environment.apiUrl;

  categoryData : adminCategory[]= [ ]

  constructor( private http: HttpClient) { }

  addCategory(data:adminCategory): Observable<any>{
    return this.http.post(`${this.apiUrl}/api/category/CategoryInsert`, data)
  }

  getCategory(){
    return this.http.get(`${this.apiUrl}/api/category/allcategory`)
  }

  deleteCategory(id:number){
    return this.http.delete(`${this.apiUrl}/api/category/CategoryDelete?id=${id}`)
  }
}
