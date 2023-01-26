import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/Services/event.service';
import { Event } from 'models/Event'

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
  providers:[EventService]
})

export class EventListComponent implements OnInit{
  events!: Array<Event>;

  constructor(private eventService: EventService) {}


  ngOnInit(): void {
    this.eventService.getEvents().subscribe
    {
        next: (response: Event[]) => {
          this.events = response
          console.log(this.events)
        }
    }
    // (
    // (res) => {
    //   this.events = res;
    // },
    // (err) => {
    //   console.error("error while getting events");
    // });
  }

}
