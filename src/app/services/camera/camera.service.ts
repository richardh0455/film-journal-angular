import { Injectable } from '@angular/core';
import {cameras} from '../../dummydata/dummycameras';
import {Camera} from '../../interfaces/camera';

@Injectable({
  providedIn: 'root'
})
export class CameraService {

  constructor() { }
  getCameras(): Camera[] {
    return cameras.map(camera => ({
      id: Number(camera.id),
      manufacturer: camera.manufacturer,
      brand: camera.brand,
      model_number: camera.model_number,
      lens_mounting: camera.lens_mounting,
      film: camera.film,
      style: camera.style,
    }) as Camera);
  }

  getCamera(cameraID: number): Camera {
    return this.getCameras().find(camera => camera.id === cameraID);
  }
}
