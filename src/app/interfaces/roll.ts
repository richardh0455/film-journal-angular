import {Camera} from './camera';

export interface Roll {
  id: number;
  manufacturer: string;
  brand: string;
  iso: number;
  width: string;
  camera: Camera;
  date_loaded: Date;
}
