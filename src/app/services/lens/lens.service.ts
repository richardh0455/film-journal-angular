import { Injectable } from '@angular/core';
import {lenses} from '../../dummydata/dummylenses';
import {Lens} from '../../interfaces/lens';
import { HttpClient, HttpParams  } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LensService {

  constructor(private http: HttpClient) { }

  getLenses(): Observable<Lens[]> {
    return this.http.get<Lens[]>(environment.apiURL+"/lenses");
  }

  getLens(lensId: number): Observable<Lens> {
    return this.http.get<Lens>(environment.apiURL+`/lenses/${lensId}`);
  }
}
