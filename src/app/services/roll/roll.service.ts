import { Injectable } from '@angular/core';
import {rolls} from '../../dummydata/dummyrolls';
import {Roll} from '../../interfaces/roll';
import {CameraService} from '../camera/camera.service';

@Injectable({
  providedIn: 'root'
})
export class RollService {

  constructor(private cameraService: CameraService) { }

  getRolls(): Roll[] {
    return rolls.map(roll => ({
      id: Number(roll.id),
      manufacturer: roll.manufacturer,
      brand: roll.brand,
      width: roll.width,
      iso: Number(roll.iso),
      camera_id: Number(roll.camera_id),
      date_loaded: new Date(roll.date_loaded)
    }) as Roll);
  }

  addRoll(roll : Roll){
    rolls.push({
      id: String(roll.id),
      manufacturer: roll.manufacturer,
      brand: roll.brand,
      width: roll.width,
      iso: String(roll.iso),
      camera_id: String(roll.camera_id),
      date_loaded: String(roll.date_loaded)
    });
  }
}
