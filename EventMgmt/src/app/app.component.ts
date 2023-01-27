import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from './app.animation'
import { Router, RouterOutlet } from '@angular/router';
import { Event } from 'models/Event';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ slideInAnimation ]
})
export class AppComponent implements OnInit {
  title = 'Event Management';
  events!: Array<Event>;


  ngOnInit(): void {
  }
  getAnimationData(outlet: RouterOutlet) {
    console.log('outlet.activatedRouteData: ' + outlet.activatedRouteData)
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
