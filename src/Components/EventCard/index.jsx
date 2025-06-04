import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import "./index.css";

function EventCard({ event, large }) {
  return (
    <div className={`event_card ${large ? "event_card_large" : ""}`}>
      <div className="event_card_img_wrapper">
        <img src={event.image} alt={event.name} className="event_card_img" />
      </div>
      <div className="event_card_content">
        <h3>{event.name}</h3>
        <p className="event_info">
          <FaRegCalendarAlt className="event_icon" />
          {event.date}
        </p>
        <p className="event_info">
          <MdLocationPin className="event_icon" />
          {event.location}
        </p>
        <p className="event_desc">{event.description}</p>
        <button className="register_btn">Register</button>
      </div>
    </div>
  );
}

export default EventCard;