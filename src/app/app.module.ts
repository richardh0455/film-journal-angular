import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  }   from '@angular/forms';

import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './components/app/app.component';
import { RollsComponent } from './components/rolls/rolls.component';
import { ShotsComponent } from './components/shots/shots.component';
import { NewRollComponent } from './components/rolls/new-roll/new-roll.component';

@NgModule({
  declarations: [
    AppComponent,
    RollsComponent,
    ShotsComponent,
    NewRollComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
