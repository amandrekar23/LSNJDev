import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventListComponent } from './event-list/event-list.component';

const routes: Routes = [
  {
    path:'eventsList', component:EventListComponent, data: { animation: 'eventsList' }
  },
  {
    path:'eventdetails', component: EventDetailsComponent, data: { animation: 'eventdetails' }
  },
  {
    path:'', redirectTo:'eventsList',pathMatch:'full'
  },
  {
    path:'**', component:EventListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
