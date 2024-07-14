import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "../../views/services/auth.service";

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
    constructor(private authService:AuthService){}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let token = localStorage.getItem("token")
    const modifiedRequest = request.clone({
      setHeaders: {
        'AuthToken': `${token}`,
      },
    });
    return next.handle(modifiedRequest);
  }
}