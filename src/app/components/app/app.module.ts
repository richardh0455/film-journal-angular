import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from '../../routes/app-routing.module';
import { AppComponent } from './app.component';
import { RollsComponent } from '../rolls/rolls.component';
import { ShotsComponent } from '../shots/shots.component';

@NgModule({
  declarations: [
    AppComponent,
    RollsComponent,
    ShotsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
