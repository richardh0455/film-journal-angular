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
    this.rolls =  this.rollService.getRolls() as Roll[];
    this.cameras = this.cameraService.getCameras() as Camera[];
  }

  ngOnInit(): void {
  }

}
