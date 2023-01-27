import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from 'models/Event'

@Injectable({
  providedIn: 'root'
})
export class EventService {
  baseURL: string = "https://localhost:7079/api/Events";
  constructor(private http: HttpClient) {}
  getEvents(): Observable<Event[]> {
    console.log("making call through the service");
    return this.http.get<Event[]>(this.baseURL);
  }
}
