import {Lens} from './lens';
export interface Shot {
  id: number;
  roll_id: number;
  aperture: number;
  shutter_speed: number;
  lighting: string;
  date_time: Date;
  location: string;
  description: string;
  lens_id: number;
}
