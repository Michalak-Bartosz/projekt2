import React, { useState } from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import CategoryAvatar from "../category/CategoryAvatar";
import "react-vertical-timeline-component/style.min.css";
import "./TimelineEvent.css";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import DeleteConfirmation from "./DeleteConfirmation";
import { Carousel } from "flowbite-react";

function TimelineEvent(props) {
  const [zoom, setZooom] = useState("scale(1)");
  const [isZoomed, setIsZoomed] = useState(false);

  const changeZoom = () => {
    if (isZoomed) {
      setZooom("scale(1)");
      setIsZoomed(false);
    } else {
      setZooom("scale(2)");
      setIsZoomed(true);
    }
  };
  
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element"
      contentStyle={{
        background: "rgb(203 213 225)",
        borderRadius: "0.375rem",
      }}
      contentArrowStyle={{ borderRight: "7px solid  rgb(203 213 225" }}
      dateClassName={"text-left m-auto text-black"}
      date={props.event.startDate + " - " + props.event.endDate}
      icon={<CategoryAvatar category={props.category} />}
    >
      <h1 className="text-4xl font-bold pt-4 underline decoration-dotted">
        {props.event.name}
      </h1>
      <div
        className="h-56 sm:h-64 xl:h-80 2xl:h-96 m-0 p-0 transition-all relative z-30"
        style={{
          transform: zoom,
        }}
      >
        <Carousel pauseOnHover>
          {props.event.images.map((image) => {
            return (
              <img
                className="cursor-pointer"
                key={image}
                src={image}
                alt=""
                onClick={changeZoom}
              />
            );
          })}
        </Carousel>
      </div>
      <h2 className="pb-4 w-5/6 m-auto text-2xl truncate block">
        {props.event.description}
      </h2>
      <div className="flex w-5/6 m-auto">
        <Link
          className="flex py-2 px-4 border-slate-500 border-2 font-bold rounded-md my-auto mr-auto text-center bg-slate-200 hover:bg-slate-100 hover:shadow-md"
          to={"/event?id=" + props.event.id}
        >
          READ MORE 📑
        </Link>
        <div className="flex ml-auto">
          <Link
            className="flex text-cyan-700 border-2 border-cyan-700 rounded-md hover:text-cyan-500 hover:border-cyan-500 hover:shadow-md hover:bg-slate-250 my-auto ml-auto p-1 h-11"
            to={"/event/edit?id=" + props.event.id}
          >
            <FaEdit className="text-2xl m-auto" />
            <h1 className="font-bold m-auto">Edit</h1>
          </Link>
          <DeleteConfirmation
            className="flex w-min ml-3 text-amber-950 border-2 border-amber-950 rounded-md hover:text-amber-700 hover:border-amber-700 hover:shadow-md hover:bg-slate-250 my-auto p-1 h-11 cursor-pointer"
            deleteEvent={props.deleteEvent}
            id={props.event.id}
          />
        </div>
      </div>
    </VerticalTimelineElement>
  );
}

export default TimelineEvent;
