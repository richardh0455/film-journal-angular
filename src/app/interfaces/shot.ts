import {Lens} from './lens';
import { firestore } from 'firebase';
export interface Shot {
  id: number;
  roll_id: number;
  aperture: number;
  shutter_speed: number;
  lighting: string;
  date_time: Object;
  location: string;
  description: string;
  lens_id: number;
}
