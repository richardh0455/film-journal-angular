import { Component, OnInit } from '@angular/core';
import {Roll} from '../../interfaces/roll';
import {RollService} from '../../services/roll/roll.service';

@Component({
  selector: 'app-rolls',
  templateUrl: './rolls.component.html',
  styleUrls: ['./rolls.component.scss']
})
export class RollsComponent implements OnInit {
  rolls: Roll[];

  constructor(private rollService: RollService) {
    this.rolls =  this.rollService.getRolls() as Roll[];
  }

  ngOnInit(): void {
  }

}
