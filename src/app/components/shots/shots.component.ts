import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ShotService} from '../../services/shot/shot.service';
import {LensService} from '../../services/lens/lens.service';
import {Shot} from '../../interfaces/shot';
import {Lens} from '../../interfaces/lens';
import { FormBuilder, ReactiveFormsModule   } from '@angular/forms';

@Component({
  selector: 'app-shots',
  templateUrl: './shots.component.html',
  styleUrls: ['./shots.component.scss']
})
export class ShotsComponent implements OnInit {
  shots: Shot[];
  rollId: string;
  lenses: Lens[];
  newShotForm;
  constructor(private route: ActivatedRoute, private shotService: ShotService, private lensService: LensService, private formBuilder: FormBuilder) {
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
      this.getShots();
    });
  }

  getShots(){
    this.shotService.getShots(this.rollId).subscribe((data : Shot[]) => {
      this.shots = data;
      this.shots.forEach(shot => {
        shot.lens = null;
        var date = new Date(shot.date_time);
        shot.formatted_date_time = typeof(date) !== "undefined" ? date.toLocaleDateString("en-NZ") : '';
      });
      this.lensService.getLenses().subscribe((lenses : Lens[]) => {
        this.lenses = lenses;
        this.shots.forEach(shot => shot["lens"] = this.lenses.find(lens => lens.id === shot.lens_id));
      });

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
        this.getShots();
      }
    });
  }

}
