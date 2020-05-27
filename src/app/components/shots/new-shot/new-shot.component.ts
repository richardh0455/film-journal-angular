import { Component, OnInit } from '@angular/core';
import {Shot} from '../../../interfaces/shot';
import {ShotService} from '../../../services/shot/shot.service';
import {LensService} from '../../../services/lens/lens.service';
import { FormBuilder, ReactiveFormsModule   } from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {Lens} from '../../../interfaces/lens';

@Component({
  selector: 'app-new-shot',
  templateUrl: './new-shot.component.html',
  styleUrls: ['./new-shot.component.scss']
})
export class NewShotComponent implements OnInit {
  rollId;
  newShotForm;
  lenses : Lens[];
  constructor(private route: ActivatedRoute, private shotService: ShotService, private lensService: LensService, private formBuilder: FormBuilder) {
    this.lensService.getLenses().subscribe((lenses : Lens[]) => {
      this.lenses = lenses;
    });

    this.newShotForm = this.formBuilder.group({
      aperture: '',
      shutter_speed: '',
      lighting: '',
      date_time: '',
      lens: null,
      location: '',
      description: ''
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.rollId = params.get('rollID');
    });
  }

  loadPreviousShot(shot) {

  }

  changeSelectedLens(lens) {

  }

  onSubmit(shotData) {
    this.newShotForm.reset();
    var shot = {
      roll_id: this.rollId,
      aperture: Number(shotData.aperture),
      shutter_speed: Number(shotData.shutter_speed),
      lighting: shotData.lighting,
      date_time: new Date(shotData.date_time),
      location: shotData.location,
      description: shotData.description,
      lens_id: shotData.lens.id
    } as Shot;
    this.shotService.addShot(shot).subscribe((res) => {
      if(res.id && res.id !== null && res.id !== "")
      {
        console.log("Shot Added Successfully");
      }
    });
  }

}
