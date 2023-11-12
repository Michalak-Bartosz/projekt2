import React from "react";
import "react-vertical-timeline-component/style.min.css";
import AirPlane1Background from "../images/background/airplane_dotted_b_1.png";
import Timeline from "./timeline/Timeline";
import EventTable from "./table/Table";
import Options from "./options/Options";
import { Tooltip } from "react-tooltip";
import { BsInfoCircleFill } from "react-icons/bs";

function HomePage(props) {
  return (
    <>
      <img
        className="z-0 fixed flex w-1/2 bottom-0 scroll-auto opacity-30"
        src={AirPlane1Background}
        alt="AirplaneBackground"
      />
      <Options
        sortParam={props.sortParam}
        setSortParam={props.setSortParam}
        setEvents={props.setEvents}
        fromDateFilter={props.fromDateFilter}
        toDateFilter={props.toDateFilter}
        setFromDateFilter={props.setFromDateFilter}
        setToDateFilter={props.setToDateFilter}
        isTimelineMode={props.isTimelineMode}
        setIsTimelineMode={props.setIsTimelineMode}
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
        {props.events.length > 0 ? (
          props.isTimelineMode ? (
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
          )
        ) : (
          <div className="m-auto">
            <h1 className="text-6xl text-bold mb-12">
              There are no trips on your timeline 😁
            </h1>
            <div className="flex text-5xl">
              <h2 className="m-auto mr-0 underline decoration-dotted text-green-800">
                Please create new one!
              </h2>
              <Tooltip id="new-trip-tooltip" />
              <BsInfoCircleFill
                className="m-auto ml-4 text-green-800"
                data-tooltip-id="filter-tooltip"
                data-tooltip-content="To add a new trip, use the 'Add Trip' button in the navigation bar."
                data-tooltip-place="bottom"
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default HomePage;
