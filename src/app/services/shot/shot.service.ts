import { Injectable } from '@angular/core';
import { shots } from '../../dummydata/dummyshots';
import {Shot} from '../../interfaces/shot';
import {LensService} from '../lens/lens.service';
@Injectable({
  providedIn: 'root'
})
export class ShotService {
  constructor(private lensService: LensService) { }

  getShots(): Shot[] {
    return shots.map(shot => ({
      id: Number(shot.id),
      roll_id: Number(shot.roll_id),
      aperture: Number(shot.aperture),
      shutter_speed: Number(shot.shutter_speed),
      lighting: shot.lighting,
      date_time: new Date(shot.date_time),
      location: shot.location,
      description: shot.description,
      lens_id: Number(shot.lens_id),
    }) as Shot);
  }

  addShot(shot : Shot){
    var id = Math.max.apply(Math, this.getShots().map(function(shot) { return shot.id; })) + 1;
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
    console.log(this.getShots());
  }
}
