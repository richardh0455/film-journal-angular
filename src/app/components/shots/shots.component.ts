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
  rollId;
  lenses: Lens[];
  constructor(private route: ActivatedRoute, private shotService: ShotService, private lensService: LensService) { }

  ngOnInit(): void {
    this.lenses = this.lensService.getLenses();
    this.route.paramMap.subscribe(params => {
      this.rollId = +params.get('rollID');
      this.shots =  this.shotService.getShots().filter(x => x.roll_id === this.rollId);
      this.shots.forEach(shot => shot["lens"] = this.lenses.find(lens => lens.id === shot.lens_id));

    });
  }

}