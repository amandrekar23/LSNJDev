import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { EventModule } from './event/event.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { MatToolbarModule} from '@angular/material/toolbar';
// import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    EventModule
    // MatToolbarModule,
    // MatCardModule
  ],
  // exports: [
  //  MatToolbarModule,
  //  MatCardModule
  // ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
