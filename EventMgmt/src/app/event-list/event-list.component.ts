import { Component, OnInit } from '@angular/core';
import { Event } from 'models/Event';
import { EventService } from 'src/app/services/event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
  providers:[EventService]
})
export class EventListComponent implements OnInit {
  events!: Array<Event>;
        
  constructor(private eventService: EventService, private router : Router) {}
  ngOnInit(): void {
    this.eventService.getEvents().subscribe
    ({  
      next: (response: Event[]) => {
        this.events = response;
      },  
      error: err => console.error('An error occurred while retrieving events', err),  
      complete: () => console.log('request complete')  
    });
  }

  ShowEventDetails = (event: Event) =>{
    this.router.navigate(['/eventdetails'], {state: {data: event}});
  }

}
