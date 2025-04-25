import { useEffect, useState } from "react";

const getRandomInt = (min: number, max: number): number => {
  const range = max - min + 1;
  return Math.floor(Math.random() * range) + min;
};

const randomEventId = () => {
  const uniqueEvents = new Set();
  for (let i = 0; i < 5; i++) {
    uniqueEvents.add(getRandomInt(1, 100));
  }
  return [...uniqueEvents].sort().pop() || getRandomInt(1, 100);
};

const EventList: React.FC<>{} = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const eventsToDelete = new Set(events);
    setEvents(eventsToDelete);
  }, [events]);

  return (
    <div>
      {events.map((event) => (
        <div key={event}>
          {getRandomEventId()}: {event}
        </div>
      ))}
    </div>
  );
};

export default EventList;
