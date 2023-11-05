import React from "react";
import Event from "./event/Event";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function HomePage(props) {
  return (
    <div className="h-full w-full m-auto text-center">
      <h1 id="homepage-title" className="text-6xl font-bold m-auto mb-8">
        Trip Review
      </h1>
      <VerticalTimeline>
        {props.events.map((event) => (
          <Event key={event.id} event={event} categories={props.categories} />
        ))}
      </VerticalTimeline>
    </div>
  );
}

export default HomePage;
