import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const headers = new HttpHeaders().set('user-token', 'AJIDOAJSDIO19WD0J1');
    const reqClone = req.clone({ headers });
    return next.handle(reqClone).pipe(catchError(err => this.handleError(err)));
  }

  handleError(err: HttpErrorResponse) {
    console.log('Error');
    console.log('Logged');
    console.warn(err);
    return throwError(err);
  }
}
