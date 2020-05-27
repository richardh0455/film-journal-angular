import { Component, OnInit } from '@angular/core';
import {CameraService} from '../../services/camera/camera.service';
import { FormBuilder, ReactiveFormsModule   } from '@angular/forms';
import {Camera} from '../../interfaces/camera';
@Component({
  selector: 'app-new-camera',
  templateUrl: './new-camera.component.html',
  styleUrls: ['./new-camera.component.scss']
})
export class NewCameraComponent implements OnInit {
  newCameraForm;
  constructor(private cameraService: CameraService, private formBuilder: FormBuilder) {
    this.newCameraForm = this.formBuilder.group({
      manufacturer: '',
      brand: '',
      model_number: '',
      lens_mounting: '',
      film: '',
      style: '',
    });

  }

  ngOnInit(): void {
  }

  onSubmit(cameraData) {
    this.newCameraForm.reset();
    var camera = {
      manufacturer: cameraData.manufacturer,
      brand: cameraData.brand,
      model_number: cameraData.model_number,
      lens_mounting: cameraData.lens_mounting,
      film: cameraData.film,
      style: cameraData.style
    } as Camera;
    this.cameraService.addCamera(camera).subscribe((res) => {
      if(res.id && res.id !== null && res.id !== "")
      {
        console.log("Camera Added Successfully");
      }
    });
  }

}
