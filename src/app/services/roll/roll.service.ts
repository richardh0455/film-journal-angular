import { Injectable } from '@angular/core';
import {rolls} from '../../dummydata/dummyrolls';
import {Roll} from '../../interfaces/roll';
import {Response} from '../../interfaces/response';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RollService {

  constructor(private http: HttpClient) { }

  getRolls(): Observable<Roll[]> {
    return this.http.get<Roll[]>(environment.apiURL+"/rolls");
  }

  addRoll(roll : Roll): Observable<Response> {
    return this.http.post<Response>(environment.apiURL+"/rolls", roll);
    /*var id = Math.max.apply(Math, this.getRolls().map(function(roll) { return roll.id; })) + 1;
    rolls.push({
      id: id,
      manufacturer: roll.manufacturer,
      brand: roll.brand,
      width: roll.width,
      iso: String(roll.iso),
      camera_id: String(roll.camera_id),
      date_loaded: String(roll.date_loaded)
    });
    console.log("Rolls in DB:")
    console.log(this.getRolls());*/
  }
}
