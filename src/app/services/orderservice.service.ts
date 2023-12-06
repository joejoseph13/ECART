import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderserviceService {

  private apiUrl = environment.apiUrl;


  constructor(private http:HttpClient) { }

  displayOrder(){
    return this.http.get<Order[]>(`${this.apiUrl}/api/Order/allOrder`)
  }
  deleteOrder(id: number){
    return this.http.delete(`${this.apiUrl}/api/Order/Delete?id=${id}`)
  }
}
