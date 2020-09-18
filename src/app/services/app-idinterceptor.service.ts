import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const id = 'TODO';
export const appid = `&appid=${id}`;

@Injectable()
export class AppIdinterceptorService implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const newReq = req.clone({
      url: req.url + appid,
    });

    return next.handle(newReq);
  }
}
