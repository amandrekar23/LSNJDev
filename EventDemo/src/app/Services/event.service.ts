import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class Event {
  Id!: string;
  Title!: string;
  Date!: string;
}
export class EventService {

  baseURL: string = "https://localhost:7079/api/Events";
  events: Event[] = [];
  
  constructor(private http: HttpClient) {}

  getEvents(): Observable<Event[]> {
     return this.http.get<Event[]>(this.baseURL);
      // .subscribe({
      //   next: (response) => {                           //Next callback
      //     // console.log('response received')
      //     // console.log(response[0].Id)
      //     this.events = response
          
      //     // console.log(this.events)
      //     // var x = this.events[0]
      //     // console.log(x.Id)
      //   }
      // })
  }


  
}
