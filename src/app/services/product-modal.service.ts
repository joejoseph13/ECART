import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { adminProductdata } from '../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductModalService {

  private apiUrl = environment.apiUrl

  productData: adminProductdata [ ] = [ ]

  constructor(private http:HttpClient) { };

 

  getProducts(){
    return this.http.get (`${this.apiUrl}/api/Product/allProducts`)
  }

  addProducts(data:adminProductdata):Observable<any>{
    return this.http.post<adminProductdata[]>(`${this.apiUrl}/api/Product/ProductInsert`, data)
  }

  deleteProducts(id:number){
    return this.http.delete (`${this.apiUrl}/api/Product/ProductDelete?id=${id}`);
  }

  getCategories(){
    return this.http.get(`${this.apiUrl}/api/category/allcategory`);
  }

  editProduct(editedProduct:adminProductdata):Observable<any>{
    console.log(editedProduct);
    return this.http.put(`${this.apiUrl}/api/Product/ProductUpdate?id=${editedProduct.id}`,editedProduct);
  }

  searchProducts(name:string){
    return this.http.get (`${this.apiUrl}/api/Product/ProductSearch?proName=${name}`);
  }

  searchProductByCategoryAndName(id:number, searchValue:any){
    return this.http.post (`${this.apiUrl}/api/category/searchbycategory?`,id);
  }
  
  getProductById(id:number){
    return this.http.get(`${this.apiUrl}/api/Product/ProductById?id=${id}`);
  }
}
