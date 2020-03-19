import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ShotService} from '../../services/shot/shot.service';
import {Shot} from '../../interfaces/shot';
import {Lens} from '../../interfaces/lens';

@Component({
  selector: 'app-shots',
  templateUrl: './shots.component.html',
  styleUrls: ['./shots.component.scss']
})
export class ShotsComponent implements OnInit {
  shots: Shot[];
  constructor(private route: ActivatedRoute, private shotService: ShotService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.shots =  this.shotService.getShots().filter(x => x.roll_id === +params.get('rollID')) as Shot[];

    });
  }

}
