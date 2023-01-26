import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventDetailsComponent } from './event/event-details/event-details.component';
import { EventListComponent } from './event/event-list/event-list.component';

const routes: Routes = [
  {
    path:'eventsList', component:EventListComponent
  },
  {
    path:'eventdetailsList', component: EventDetailsComponent
  }
  // ,
  // {
  //   path:'', redirectTo:'eventsList',pathMatch:'full'
  // },
  // {
  //   path:'**', component:EventListComponent
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
