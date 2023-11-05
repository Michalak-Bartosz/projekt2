import React from "react";
import "react-vertical-timeline-component/style.min.css";

function EventPage(props) {
  const queryParams = new URLSearchParams(window.location.search);

  const getEvent = (id) => {
    const event = props.events.find((event) => event.id === parseInt(id));
    console.log(event);
    return event;
  };

  const event = getEvent(queryParams.get("id"));

  return (
    <div className="block text-center">
      <h1 className="text-6xl font-bold pb-8">{event.name}</h1>
      <h2 className="text-3xl pb-4">
        {event.startDate + " - " + event.endDate}
      </h2>
      <img
        src={event.imagePath}
        alt=""
        className="pb-8 shadow-x1 rounded-md w-1/2 flex m-auto"
      />
      <h1 className="text-3xl font-bold pb-8">Description</h1>
      <h2 className="text-2xl p-4 m-auto">{event.description}</h2>
    </div>
  );
}

export default EventPage;
