import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Event } from 'models/Event';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent {
  eventDetails : any;

  constructor(private router : Router) {}

  ShowEventsList = () =>{
    this.router.navigate(['/eventsList']);
  }

  ngOnInit(): void {
    this.eventDetails = history.state.data;
    console.log(this.eventDetails);
  }
}
