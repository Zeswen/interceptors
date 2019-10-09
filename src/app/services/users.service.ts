import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpParams,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getUser() {
    const params = new HttpParams().set('page', '2');
    return this.http
      .get('https://reqres12.in/api/user', {
        params
      })
      .pipe(map(({ data }: any) => data));
  }
}
