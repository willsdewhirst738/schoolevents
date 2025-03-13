import { Schedule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-schoolevents',
  templateUrl: './schoolevents.component.html',
  styleUrls: ['./schoolevents.component.css']
})
export class SchooleventsComponent {
  events: any[];
  schedules: Schedule[] = [];
  
  constructor() { }
  
  ngOnInit(): void {
    this.events = [
      {
        id: 'event1',
        name: 'Event 1',
        startTime: new Date(2023, 4, 1),
        endTime: new Date(2023, 4, 3)
      },
      {
        id: 'event2',
        name: 'Event 2',
        startTime: new Date(2023, 4, 5),
        endTime: new Date(2023, 4, 7)
      },
      {
        id: 'event3',
        name: 'Event 3',
        startTime: new Date(2023, 4, 9),
        endTime: new Date(2023, 4, 11)
      }
    ];
    
    this.schedules = [
      {
        id: 'schedule1',
        name: 'Schedule 1',
        events: [this.events[0]]
      },
      {
        id: 'schedule2',
        name: 'Schedule 2',
        events: [this.events[1], this.events[2]]
      }
    ];
  }
}
