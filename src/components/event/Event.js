import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import CategoryAvatar from "../category/CategoryAvatar";
import "react-vertical-timeline-component/style.min.css";
import { Link } from "react-router-dom";

function Event(props) {
  const getCategory = (id) => {
    return props.categories.find((category) => category.id === id);
  };

  const category = getCategory(props.event.categoryId);

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
      iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
      icon={<CategoryAvatar category={category} />}
    >
      <h1 className="text-2xl font-bold pb-4">{props.event.name}</h1>
      <img
        src={props.event.imagePath}
        alt=""
        className="pb-4 shadow-x1 rounded-md w-3/4 flex m-auto"
      />
      <h2 className="pb-4 w-3/4 m-auto truncate block">
        {props.event.description}
      </h2>
      <Link
        className="py-2 px-4 border-slate-500 border-2 rounded-md m-auto text-center bg-slate-200 hover:bg-slate-100"
        to={"/event?id=" + props.event.id}
      >
        REED MORE 📑
      </Link>
    </VerticalTimelineElement>
  );
}

export default Event;
