import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { LoginService } from 'src/app/services/login.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  apiUrl = environment.apiUrl

  constructor( private loginservice : LoginService ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const token = this.loginservice.getToken();
    const user_id =localStorage.getItem('user_id');

    if (token){
      request = request.clone({
        setHeaders:{
          Authorization: `Bearer ${token}`,
          'user_id': user_id ? user_id : '',
        }
      });
    }
    return next.handle(request);
  }
}
