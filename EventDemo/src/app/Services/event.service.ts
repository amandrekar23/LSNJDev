import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from 'models/Event'

@Injectable({
  providedIn: 'root'
})

export class EventService {
  baseURL: string = "https://localhost:7079/api/Events";
  //events: [];

  constructor(private http: HttpClient) {}

  getEvents(): Observable<Event[]> {
    // return [
    //   {
    //     ID: '1', Title: 'Preety', Date: '29/02/1988'
    //   }
    // ];
    return this.http.get<Event[]>(this.baseURL);
  }
}
