import { Injectable } from '@angular/core';
import {lenses} from '../../dummydata/dummylenses';
import {Lens} from '../../interfaces/lens';

@Injectable({
  providedIn: 'root'
})
export class LensService {

  constructor() { }

  getLenses(): Lens[] {
    return lenses.map(lens => ({
      id: Number(lens.id),
      manufacturer: lens.manufacturer,
      width: lens.width,
      aperture: lens.aperture,
      mounting: lens.mounting,
    }) as Lens);
  }

  getLens(lensId: number): Lens {
    return this.getLenses().find(lens => lens.id === lensId);
  }
}
