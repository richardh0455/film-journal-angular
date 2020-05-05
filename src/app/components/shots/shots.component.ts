import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ShotService} from '../../services/shot/shot.service';
import {LensService} from '../../services/lens/lens.service';
import {Shot} from '../../interfaces/shot';
import {Lens} from '../../interfaces/lens';

@Component({
  selector: 'app-shots',
  templateUrl: './shots.component.html',
  styleUrls: ['./shots.component.scss']
})
export class ShotsComponent implements OnInit {
  shots: Shot[];
  rollId: string;
  lenses: Lens[];
  constructor(private route: ActivatedRoute, private shotService: ShotService, private lensService: LensService) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      this.rollId = params.get('rollID');
      console.log("Roll ID: "+this.rollId);
      this.shotService.getShots(this.rollId).subscribe((data : Shot[]) => {
        this.shots = data;
        this.shots.forEach(shot => {
          var date = new Date(shot.date_time);
          shot.date_time = typeof(date) !== "undefined" ? date.toLocaleDateString("en-NZ") : '';
        });
        this.lensService.getLenses().subscribe((lenses : Lens[]) => {
          this.lenses = lenses;
          this.shots.forEach(shot => shot["lens"] = this.lenses.find(lens => lens.id === shot.lens_id));
        });

      });

    });
  }

}
