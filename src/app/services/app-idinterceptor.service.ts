import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

export const appid = "&appid=a0191a5d64339913c4c10d7fea9774ba";

@Injectable()
export class AppIdinterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const newReq = req.clone({
      url: req.url + appid
    });

    return next.handle(newReq);
  }
}
