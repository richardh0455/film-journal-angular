import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RollsComponent} from '../components/rolls/rolls.component';
import {ShotsComponent} from '../components/shots/shots.component';
import {NewRollComponent} from '../components/rolls/new-roll/new-roll.component';
import {NewShotComponent} from '../components/shots/new-shot/new-shot.component';


const routes: Routes = [{ path: 'rolls', component: RollsComponent },
{path: 'rolls/new', component: NewRollComponent },
{ path: 'rolls/:rollID/new', component: NewShotComponent },
  { path: 'rolls/:rollID', component: ShotsComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
