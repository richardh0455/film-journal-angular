import {Lens} from './lens';
export interface Shot {
  id: number;
  roll_id: string;
  aperture: number;
  shutter_speed: number;
  lighting: string;
  date_time: Date;
  formatted_date_time: string;
  location: string;
  description: string;
  lens_id: number;
  lens?: Lens;
}
