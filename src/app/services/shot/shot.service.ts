import { Injectable } from '@angular/core';
import { shots } from '../../dummydata/dummyshots';
import {Shot} from '../../interfaces/shot';
import {Response} from '../../interfaces/response';
import { HttpClient, HttpParams  } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShotService {
  constructor(private http: HttpClient) { }

  getShots(rollID: string): Observable<Shot[]> {
    let params = new HttpParams().set('rollID', rollID);
    return this.http.get<Shot[]>(environment.apiURL+"/shots", {params: params});
  }

  addShot(shot : Shot): Observable<Response> {
    return this.http.post<Response>(environment.apiURL+"/shots", shot);
    /*var id = Math.max.apply(Math, this.getShots().map(function(shot) { return shot.id; })) + 1;
    shots.push({
      id: String(id),
      roll_id: String(shot.roll_id),
      aperture: String(shot.aperture),
      shutter_speed: String(shot.shutter_speed),
      lighting: shot.lighting,
      date_time: String(shot.date_time),
      location: shot.location,
      description: shot.description,
      lens_id: String(shot.lens_id),
    });
    console.log("Shots in DB:")
    console.log(this.getShots());*/
  }
}
