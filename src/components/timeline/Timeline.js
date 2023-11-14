import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import TimelineEvent from "../event/TimelineEvent";

function Timeline(props) {
  const deleteEvent = (id) => {
    props.setEvents((events) => events.filter((event) => event.id !== id));
  };

  const getCategory = (id) => {
    return props.categories.find((category) => category.id === id);
  };
  return (
    <div id="timelineWrapper">
      <h1 className="m-auto w-fit text-white bg-slate-500 py-2 px-4 text-2xl font-bold rounded-md">
        START
      </h1>
      <VerticalTimeline>
        {props.events.map((event) => (
          <TimelineEvent
            key={event.id}
            event={event}
            category={getCategory(event.categoryId)}
            deleteEvent={deleteEvent}
          />
        ))}
      </VerticalTimeline>
      <h1 className="m-auto w-fit text-white bg-slate-500 py-2 px-4 text-2xl font-bold rounded-md">
        END
      </h1>
    </div>
  );
}

export default Timeline;
