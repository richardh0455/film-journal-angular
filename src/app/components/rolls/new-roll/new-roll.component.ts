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
    this.getRollsDateSorted();
    this.cameraService.getCameras().subscribe((data: Camera[]) => this.cameras = {...data});

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

  getRollsDateSorted()
  {
    this.rollService.getRolls().subscribe((data: Roll[]) => {
      this.rolls = data.sort((a, b) => b.date_loaded.getTime() - a.date_loaded.getTime());
    })
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
    var roll = {
      manufacturer: rollData.manufacturer,
      brand: rollData.brand,
      width: rollData.width,
      iso: Number(rollData.iso),
      camera_id: Number(rollData.camera.id),
      date_loaded: new Date(rollData.date_loaded)
    } as Roll;

    this.rollService.addRoll(roll);
    this.getRollsDateSorted();

  }

}
