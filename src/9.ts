import { EventEmitter } from 'events';

class SchoolEvents extends EventEmitter {}

const schoolEvents = new SchoolEvents();
schoolEvents.on('event', (eventName) => {
  console.log(`Event name: ${eventName}`);
});
schoolEvents.emit('event', 'test');
