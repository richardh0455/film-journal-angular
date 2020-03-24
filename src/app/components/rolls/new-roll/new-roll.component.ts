import { Component, OnInit } from '@angular/core';
import {Roll} from '../../../interfaces/roll';
import {Camera} from '../../../interfaces/camera';
import {RollService} from '../../../services/roll/roll.service';
import {CameraService} from '../../../services/camera/camera.service';
import { FormBuilder, ReactiveFormsModule   } from '@angular/forms';

@Component({
  selector: 'app-new-roll',
  templateUrl: './new-roll.component.html',
  styleUrls: ['./new-roll.component.scss']
})
export class NewRollComponent implements OnInit {

  rolls: Roll[];
  cameras: Camera[];
  newRollForm;
  constructor(private rollService: RollService, private cameraService: CameraService, private formBuilder: FormBuilder) {
    this.rolls =  this.rollService.getRolls() as Roll[];
    this.cameras = this.cameraService.getCameras() as Camera[];

    this.newRollForm = this.formBuilder.group({
      manufacturer: '',
      brand: '',
      iso: '',
      width: '',
      camera: null,
      date_loaded: ''
    });

  }

  ngOnInit(): void {
  }

  changeSelectedCamera(camera)
  {

  }

  loadPreviousRoll(roll)
  {
    console.log(roll);
    this.newRollForm.controls['manufacturer'].setValue(roll.manufacturer);
    this.newRollForm.controls['brand'].setValue(roll.brand);
    this.newRollForm.controls['iso'].setValue(roll.iso);
    this.newRollForm.controls['width'].setValue(roll.width);
    //this.newRollForm.manufacturer.setValue(roll.manufacturer);
  }

  onSubmit(rollData) {
    this.newRollForm.reset();

    console.log('Your order has been submitted', rollData);
  }

}
