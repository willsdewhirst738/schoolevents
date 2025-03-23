import { useState } from "react";
import axios from "axios";

const App = () => {
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    try {
      const response = await axios.get("https://api.example.com/events");
      setEvents(response.data);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  return (
    <div>
      {events.length > 0 ? (
        <>
          <h1>Events</h1>
          <ul>
            {events.map(event => (
              <li key={event.id}>
                {event.name}
                <button onClick={() => setEvents([...events, event])}>Add to List</button>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>No events found.</p>
      )}
      <button onClick={fetchEvents}>Fetch Events</button>
    </div>
  );
};

export default App;
