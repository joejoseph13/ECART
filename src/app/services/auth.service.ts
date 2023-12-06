import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  private readonly TOKEN_KEY = 'token';
  private readonly user_id = 'user_id';

  public setToken(token:string, user_id:number):void{
    localStorage.setItem(this.TOKEN_KEY,token);
    localStorage.setItem(this.user_id,this.user_id );
  }

  public getToken(): string|null {
    return localStorage.getItem(this.TOKEN_KEY);
    return localStorage.getItem(this.user_id);
  }

  public removeToken(): void{
    localStorage.removeItem(this.TOKEN_KEY);
  }
}
