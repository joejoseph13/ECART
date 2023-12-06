import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { login } from '../models/login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  userLogin(data: login): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/User/login`, data)
  }

  getToken():any{
    return localStorage.getItem('token');
  }

 
}