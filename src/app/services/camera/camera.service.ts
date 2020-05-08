import { Injectable } from '@angular/core';
import {cameras} from '../../dummydata/dummycameras';
import {Camera} from '../../interfaces/camera';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CameraService {

  constructor(private http: HttpClient) { }
  getCameras(): Observable<Camera[]> {
    return this.http.get<Camera[]>(environment.apiURL+"/cameras");
  }

  getCamera(cameraID: number): Observable<Camera> {
    return this.http.get<Camera>(environment.apiURL+`/cameras/${cameraID}`);
  }

  addCamera(camera : Camera): Observable {
    return this.http.post(environment.apiURL+"/cameras", camera);
  }
}
