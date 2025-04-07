import { Router } from "express";
import { getEvents, createEvent } from "../controllers/events"; // Adjust the import accordingly

// Example usage within an Express route
Router.get("/events", (req, res) => {
  const events = getEvents(req);
  res.json(events);
});

// Define a new event using GET request
Router.post("/events", (req, res) => {
  createEvent(req.body, (err, response) => {
    if (err) return res.status(500).json({ error: "Error creating event" });
    res.json(response);
  });
});

// Example usage within another Express route
Router.get("/events/:eventId", (req, res) => {
  const eventId = req.params.eventId;
  getEventById(eventId, (err, response) => {
    if (err) return res.status(500).json({ error: "Error getting event" });
    res.json(response);
  });
});
