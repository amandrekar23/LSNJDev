import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { MatToolbarModule} from '@angular/material/toolbar';
// import {MatCardModule} from '@angular/material/card';
import { EventListComponent } from './event-list/event-list.component';
import { EventDetailsComponent } from './event-details/event-details.component';



@NgModule({
  declarations: [
    EventListComponent,
    EventDetailsComponent
  ],
  imports: [
    CommonModule,
    // MatToolbarModule,
    // MatCardModule
  ],
//  exports: [
//   MatToolbarModule,
//   MatCardModule
//  ],
})
export class EventModule { }
