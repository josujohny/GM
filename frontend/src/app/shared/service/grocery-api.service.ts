import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClientModule, HttpErrorResponse, HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { environment } from '@env';
import { throwError } from 'rxjs/internal/observable/throwError';
// import { throwError } from 'rxjs';
// import { environment } from 'environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class GroceryApiService {

  headers = new HttpHeaders().set('Content-Type', 'application/json');


  constructor(private http: HttpClient) { }

  private parseResponse(obj) {
    return Object.keys(obj).map(key => obj[key]);
  }
  getgroceryList() {
    return this.http.get('http://localhost:5300/inventory')
      .pipe(map(r => this.parseResponse(r)))
  }

  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
