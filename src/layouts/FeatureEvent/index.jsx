import React, { useState, useEffect } from "react";
import EventCard from "../../components/EventCard";
import SliderSection from "../../Components/Slider";
import "./index.css";

function FeatureEvent() {
  const [events, setEvents] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    fetchEvents();
  }, []);

  async function fetchEvents() {
    const response = await fetch("/db.json");
    const data = await response.json();
    setEvents(data);
  }

    const filteredEvents = events.filter((event) =>
    event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
<section className="feature-event">
  <h1> Events Near You</h1>

  <SliderSection events={events} />
  <input
    type="text"
    placeholder="Search events..."
    className="feature_event_search"
    onChange={(e) => setSearchTerm(e.target.value)}
  />

  <div className="event_card_list">
    {filteredEvents.map((event) => (
      <EventCard key={event.id} event={event} />
    ))}
  </div>
</section>

  );
}
export default FeatureEvent;