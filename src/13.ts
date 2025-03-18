  const schoolEvents = {
    "events": [
      {
        "id": "1",
        "name": "Math club meeting",
        "description": "Join the math club for a study session",
        "date": "2023-03-22T19:30:00.000Z",
        "location": {
          "address": "School building",
          "coordinates": [-73.984, 40.75],
        },
      },
      {
        "id": "2",
        "name": "Dance practice",
        "description": "Practice your dance moves for the upcoming performance",
        "date": "2023-03-24T18:00:00.000Z",
        "location": {
          "address": "Community center",
          "coordinates": [-73.965, 40.72],
        },
      },
    ],
    "createEvent(eventName, eventDescription, eventDate, location) {
      const newEvent = {
        id: `${this.events.length + 1}`,
        name: eventName,
        description: eventDescription,
        date: eventDate,
        location: location,
      };
      this.events.push(newEvent);
      return newEvent;
    }
  };