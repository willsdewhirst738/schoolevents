import { EventEmitter } from 'events';

class SchoolEvents extends EventEmitter {
  constructor() {
    super();
  }

  addEvent(eventName, eventData) {
    this.emit(eventName, eventData);
  }
}

const schoolEvents = new SchoolEvents();
schoolEvents.addEvent('newStudent', 'John');
schoolEvents.on('newStudent', (data) => console.log(data));
