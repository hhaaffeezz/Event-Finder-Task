
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import EventCard from "../../components/EventCard";
import "./index.css";

function SliderSection({ events }) {
const settings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

  return (
    <div className="slider_wrapper">
      <Slider {...settings}>
       {events.map((event) => (
  <div key={event.id} className="slider_card">
    <EventCard event={event} large />  {/* large prop passed to every card */}
  </div>
))}
      </Slider>
    </div>
  );
}

export default SliderSection;
