import { useState } from 'react';

function MyComponent() {
  const [events, setEvents] = useState([]);

  function handleAddEvent(event) {
    setEvents([...events, event]);
  }

  function handleEditEvent(index, event) {
    events[index] = event;
    setEvents(events);
  }

  return (
    <div>
      <h1>My School Events</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Event Type</th>
            <th>Date</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event, index) => (
            <tr key={index}>
              <td>{event.title}</td>
              <td>{event.type}</td>
              <td>{event.date}</td>
              <td>{event.location}</td>
              <td>
                <button onClick={() => handleEditEvent(index, event)}>Update</button>
                <button onClick={() => handleAddEvent(event)}>Add Event</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MyComponent;
