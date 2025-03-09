async function getEvents(schoolEvents) {
  const events = [];
  const response = await fetch(`https://myschoolevents.com/api/v1/events`);
  const data = await response.json();
  for (let event of data) {
    events.push({
      name: event.name,
      date: new Date(event.date),
      location: event.location,
    });
  }
  return events;
}
