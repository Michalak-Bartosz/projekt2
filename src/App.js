import React, { useCallback, useEffect, useState } from "react";
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
import CreateTimeline from "./components/timeline/CreateTimeline";
import CreateTripPage from "./components/CreateTripPage";

function App() {
  const formatDate = "dd-MM-yyyy";
  const [timelineId, setTimelineId] = useState(1);
  const [timelines, setTimelines] = useState(Timelines);
  const [events, setEvents] = useState(Events);
  const [categories, setCategories] = useState(Cateogries);
  const [sortParam, setSortParam] = useState("Start Date");
  const [isTimelineMode, setIsTimelineMode] = useState(true);
  const [fromDateFilter, setFromDateFilter] = useState(null);
  const [toDateFilter, setToDateFilter] = useState(null);

  const getTimeline = useCallback(
    (id) => {
      return timelines.find((timeline) => timeline.id === id);
    },
    [timelines]
  );

  const getTimelineEvents = useCallback(
    (id) => {
      return events.filter((event) => event.timelineId === id);
    },
    [events]
  );
  const [timeline, setTimeline] = useState(getTimeline(timelineId));
  const [timelineEvents, setTimelineEvents] = useState(
    getTimelineEvents(timelineId)
  );

  const filterEvents = useCallback(() => {
    let filteredEvents = getTimelineEvents(timelineId);
    if (fromDateFilter !== null) {
      filteredEvents = filteredEvents.filter(
        (event) =>
          parse(event.startDate, formatDate, new Date()) >=
          parse(fromDateFilter, formatDate, new Date())
      );
    }
    if (toDateFilter !== null) {
      filteredEvents = filteredEvents.filter(
        (event) =>
          parse(event.endDate, formatDate, new Date()) <=
          parse(toDateFilter, formatDate, new Date())
      );
    }
    setTimelineEvents(filteredEvents);
  }, [fromDateFilter, getTimelineEvents, timelineId, toDateFilter]);

  const sortEvents = useCallback(() => {
    if (sortParam === "Start Date") {
      events.sort(
        (a, b) =>
          parse(a.startDate, formatDate, new Date()) -
          parse(b.startDate, formatDate, new Date())
      );
    } else if (sortParam === "End Date") {
      events.sort(
        (a, b) =>
          parse(b.endDate, formatDate, new Date()) -
          parse(a.endDate, formatDate, new Date())
      );
    } else if (sortParam === "Name") {
      events.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
    }
  }, [events, sortParam]);

  useEffect(() => {
    sortEvents();
    setTimeline(getTimeline(timelineId));
    filterEvents();
  }, [
    fromDateFilter,
    toDateFilter,
    getTimeline,
    getTimelineEvents,
    sortEvents,
    timelineId,
    filterEvents,
  ]);

  return (
    <div
      id="page"
      className="grid m-auto min-h-full min-w-full bg-gradient-to-t from-slate-400 to-white"
    >
      <div
        id="fullpage"
        className="z-50"
        style={{
          display: "none",
          position: "absolute",
          top: "0px",
          margin: "0px",
          minWidth: "100%",
          minHeight: "100%",
          backgroundColor: "white",
          backgroundSize: "content",
          backgroundRepeat: "no-repeat no-repeat",
          backgroundPosition: "center center",
        }}
        onClick={(e) => (e.target.style.display = "none")}
      ></div>
      <Navbar
        timelineId={timelineId}
        setTimelineId={setTimelineId}
        timelines={timelines}
        setTimelines={setTimelines}
      />
      <div className="m-auto p-8 pb-24 min-w-full mt-40 text-black font-courgette">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                timeline={timeline}
                events={timelineEvents}
                setEvents={setEvents}
                categories={categories}
                setCategorie={setCategories}
                sortParam={sortParam}
                setSortParam={setSortParam}
                isTimelineMode={isTimelineMode}
                setIsTimelineMode={setIsTimelineMode}
                setFromDateFilter={setFromDateFilter}
                setToDateFilter={setToDateFilter}
              />
            }
          />
          <Route
            path="/create/timeline"
            element={
              <CreateTimeline
                timelineId={timelineId}
                setTimelineId={setTimelineId}
                timelines={timelines}
                setTimelines={setTimelines}
              />
            }
          />
          <Route
            path="/create/event"
            element={
              <CreateEventPage
                timelineId={timelineId}
                timelines={timelines}
                events={events}
                setEvents={setEvents}
                categories={categories}
              />
            }
          />
          <Route
            path="/create"
            element={
              <CreateTripPage
                timelines={timelines}
                setTimelineId={setTimelineId}
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
      <footer className="mt-auto mb-0 flex bottom-0 z-50 h-24 font-lobster bg-slate-800">
        <p className="text-center m-auto text-bold text-2xl text-white">
          Copyright 2023 Bartosz Michalak. All Rights Reserved
        </p>
      </footer>
    </div>
  );
}

export default App;
