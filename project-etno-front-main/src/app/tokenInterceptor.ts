import {Injectable} from '@angular/core';
import {HttpClient, HttpRequest, HttpHandler, HttpInterceptor, HttpEvent, HttpHeaders} from '@angular/common/http';
import { ErrorHandlerService } from './shared/services/error-handler.service';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';
import { Token } from '@angular/compiler';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      // localStorage.clear();
        const userToken = localStorage.getItem('accessToken');
        if(userToken != null){
          const modifiedReq = req.clone({ 
            headers: req.headers
            .set('Access-Control-Allow-Origin','http://localhost:4200/')
             .set('Access-Control-Allow-Methods','*')
             .set('Access-Control-Allow-Headers', '*')
             .set('Authorization', `Bearer ${userToken}`)     
          });
          return next.handle(modifiedReq);
        }
        return next.handle(req.clone({
          headers: req.headers
            .set('Access-Control-Allow-Origin','http://localhost:4200/')
             .set('Access-Control-Allow-Methods','*')
             .set('Access-Control-Allow-Headers', '*')
        }));
      }
}