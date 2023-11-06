import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import CategoryAvatar from "../category/CategoryAvatar";
import "react-vertical-timeline-component/style.min.css";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { AiTwotoneDelete } from "react-icons/ai";

function Event(props) {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element"
      contentStyle={{
        background: "rgb(203 213 225)",
        borderRadius: "0.375rem",
      }}
      contentArrowStyle={{ borderRight: "7px solid  rgb(203 213 225" }}
      dateClassName={"text-left"}
      date={props.event.startDate + " - " + props.event.endDate}
      icon={<CategoryAvatar category={props.category} />}
    >
      <h1 className="text-4xl font-bold pb-4">{props.event.name}</h1>
      <img
        src={props.event.imagePath}
        alt=""
        className="pb-4 shadow-x1 rounded-md w-5/6 m-auto"
      />
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
            to={"/event/edit?id" + props.event.id}
          >
            <FaEdit className="text-2xl m-auto" />
            <label className="font-bold m-auto">Edit</label>
          </Link>
          <button
            className="ml-5 flex text-amber-950 border-2 border-amber-950 rounded-md hover:text-amber-700 hover:border-amber-700 hover:shadow-md hover:bg-slate-250 my-auto ml-auto p-1 h-11"
            onClick={() => console.log("Delete: " + props.event.id)}
          >
            <AiTwotoneDelete className="text-2xl m-auto" />
            <label className="font-bold m-auto">Delete</label>
          </button>
        </div>
      </div>
    </VerticalTimelineElement>
  );
}

export default Event;
