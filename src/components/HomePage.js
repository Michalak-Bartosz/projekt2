import React, { useCallback, useEffect, useState } from "react";
import Event from "./event/Event";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function HomePage(props) {
  const getTimeline = useCallback(
    (id) => {
      return props.timelines.find((timeline) => timeline.id === id);
    },
    [props.timelines]
  );

  const getEvents = useCallback(
    (id) => {
      return props.events
        .filter((event) => event.timelineId === id)
        .sort((a, b) => a.startDate > b.startDate);
    },
    [props.events]
  );

  const getCategory = (id) => {
    return props.categories.find((category) => category.id === id);
  };

  const [timeline, setTimeline] = useState(getTimeline(props.timelineId));
  const [events, setEvents] = useState(getEvents(props.timelineId));

  useEffect(() => {
    setTimeline(getTimeline(props.timelineId));
    setEvents(getEvents(props.timelineId));
  }, [props.timelineId, getEvents, getTimeline]);

  return (
    <div className="h-full w-full m-auto text-center">
      <div className="p-8 mb-6">
        <h1
          id="homepage-title"
          className="text-6xl font-bold m-auto mb-6 underline decoration-dotted"
        >
          Trip Review:
        </h1>
        <h2 className="text-5xl font-bold m-auto text-slate-700">
          {timeline.name}
        </h2>
      </div>
      <h1 className="m-auto w-fit text-white bg-slate-500 py-2 px-4 text-2xl font-bold rounded-md">
        START
      </h1>
      <VerticalTimeline>
        {events.map((event) => (
          <Event
            key={event.id}
            event={event}
            category={getCategory(event.categoryId)}
          />
        ))}
      </VerticalTimeline>
      <h1 className="m-auto w-fit text-white bg-slate-500 py-2 px-4 text-2xl font-bold rounded-md">
        END
      </h1>
    </div>
  );
}

export default HomePage;
