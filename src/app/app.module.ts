import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './components/app/app.component';
import { RollsComponent } from './components/rolls/rolls.component';
import { ShotsComponent } from './components/shots/shots.component';
import { NewRollComponent } from './components/rolls/new-roll/new-roll.component';
import { NewShotComponent } from './components/shots/new-shot/new-shot.component';

@NgModule({
  declarations: [
    AppComponent,
    RollsComponent,
    ShotsComponent,
    NewRollComponent,
    NewShotComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
