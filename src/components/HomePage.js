import React from "react";
import "react-vertical-timeline-component/style.min.css";
import AirPlane1Background from "../images/background/airplane_dotted_b_1.png";
import SortFilterMenu from "./options/SortFilterMenu";
import SwitchView from "./options/SwitchView";
import Timeline from "./timeline/Timeline";
import EventTable from "./table/Table";

function HomePage(props) {
  return (
    <>
      <img
        className="z-0 fixed flex w-1/2 bottom-0 scroll-auto opacity-30"
        src={AirPlane1Background}
        alt="AirplaneBackground"
      />
      <SortFilterMenu
        sortParam={props.sortParam}
        setSortParam={props.setSortParam}
        setEvents={props.setEvents}
        setFromDateFilter={props.setFromDateFilter}
        setToDateFilter={props.setToDateFilter}
      />
      <SwitchView
        isTimelineMode={props.isTimelineMode}
        setIsTimelineMode={props.setIsTimelineMode}
        setEvents={props.setEvents}
      />
      <div className="relative h-full w-full m-auto text-center">
        <div className="p-8 font-lobster my-6 mb-12 mx-auto w-max border-8 border-black border-dotted rounded-lg text-center">
          <h1 id="homepage-title" className="text-6xl font-bold m-auto mb-6">
            Trip Review:
          </h1>
          <div className="border-2 border-black my-4" />
          <h2 className="text-5xl font-bold m-auto text-slate-700">
            {props.timeline.name}
          </h2>
        </div>
        {props.isTimelineMode ? (
          <Timeline
            events={props.events}
            setEvents={props.setEvents}
            categories={props.categories}
          />
        ) : (
          <EventTable
            events={props.events}
            setEvents={props.setEvents}
            categories={props.categories}
          />
        )}
      </div>
    </>
  );
}

export default HomePage;
