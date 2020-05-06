import { Component, OnInit } from '@angular/core';
import {Roll} from '../../interfaces/roll';
import {Camera} from '../../interfaces/camera';
import {RollService} from '../../services/roll/roll.service';
import {CameraService} from '../../services/camera/camera.service';

@Component({
  selector: 'app-rolls',
  templateUrl: './rolls.component.html',
  styleUrls: ['./rolls.component.scss']
})
export class RollsComponent implements OnInit {
  rolls: Roll[];
  cameras: Camera[];
  constructor(private rollService: RollService, private cameraService: CameraService) {
    this.rollService.getRolls().subscribe((data: Roll[]) => {
      data.forEach(roll => {
        var date = new Date(roll.date_loaded);
        roll.formatted_date_loaded = typeof(date) !== "undefined" ? date.toLocaleDateString("en-NZ") : '';
      });
      this.rolls = data;
    });
    this.cameraService.getCameras().subscribe((data: Camera[]) => {
      this.cameras = data;
    });

  }

  ngOnInit(): void {
  }

}
