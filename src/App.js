import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import EventPage from "./components/event/EventPage";
import { Events } from "./loadData/Events";
import { Cateogries } from "./loadData/Categories";
import { Timelines } from "./loadData/Timelines";
import EditEventPage from "./components/event/EditEventPage";
import CreateEventPage from "./components/event/CreateEventPage";
import { parse } from "date-fns";

function App() {
  const [timelineId, setTimelineId] = useState(1);
  const [timelines, setTimelines] = useState(Timelines);
  const [events, setEvents] = useState(Events);
  const [categories, setCategories] = useState(Cateogries);

  useEffect(() => {
    const formatDate = "dd-MM-yyyy";
    events.sort(
      (a, b) =>
        parse(a.startDate, formatDate, new Date()) -
        parse(b.startDate, formatDate, new Date())
    );
  }, [events]);

  return (
    <>
      <Navbar
        setTimelineId={setTimelineId}
        timelines={timelines}
        setTimelines={setTimelines}
      />
      <div
        id="page"
        className="static m-auto p-8 mt-28 h-full w-full text-black font-eduTasBeginner"
      >
        <Routes>
          <Route
            path="/*"
            element={
              <HomePage
                timelineId={timelineId}
                timelines={timelines}
                setTimelines={setTimelines}
                events={events}
                setEvents={setEvents}
                categories={categories}
                setCategorie={setCategories}
              />
            }
          />
          <Route
            path="/create"
            element={
              <CreateEventPage
                timelineId={timelineId}
                events={events}
                setEvents={setEvents}
                categories={categories}
              />
            }
          />
          <Route
            path="/event/*"
            element={
              <EventPage
                timelines={timelines}
                setTimelines={setTimelines}
                events={events}
                setEvents={setEvents}
                categories={categories}
                setCategories={setCategories}
              />
            }
          />
          <Route
            path="/event/edit/*"
            element={
              <EditEventPage
                timelineId={timelineId}
                events={events}
                setEvents={setEvents}
                categories={categories}
                setCategories={setCategories}
              />
            }
          />
          <Route path="*" element={<p>Path not resolved</p>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
