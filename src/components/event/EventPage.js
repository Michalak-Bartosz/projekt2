import React from "react";
import "react-vertical-timeline-component/style.min.css";
import CategoryAvatar from "../category/CategoryAvatar";
import { Link } from "react-router-dom";
import DeleteConfirmation from "./DeleteConfirmation";
import { FaEdit } from "react-icons/fa";
import { Carousel } from "flowbite-react";

function EventPage(props) {
  const queryParams = new URLSearchParams(window.location.search);

  const getEvent = (id) => {
    return props.events.find((event) => event.id === parseInt(id));
  };

  const getCategory = (id) => {
    return props.categories.find((category) => category.id === id);
  };

  const deleteEvent = (id) => {
    props.setEvents((events) => events.filter((event) => event.id !== id));
  };

  const event = getEvent(queryParams.get("id"));
  const category = getCategory(event.categoryId);

  return (
    <div className="block text-center">
      <div id="event-header-section" className="flex mb-8 text-center">
        <h1 className="text-6xl font-bold ml-auto mr-8 my-auto underline">
          {event.name}
        </h1>
        <div className="flex w-24 h-24 mr-auto my-auto">
          <CategoryAvatar category={category} className="mr-4" />
          <h1 className="my-auto text-3xl font-bold text-slate-600">
            {category.name}
          </h1>
        </div>
      </div>
      <div className="flex m-auto mb-8">
        <Link
          className="flex ml-auto mr-6 text-cyan-700 border-2 border-cyan-700 rounded-md hover:text-cyan-500 hover:border-cyan-500 hover:shadow-md hover:bg-slate-250 my-auto ml-auto p-1 h-11"
          to={"/event/edit?id=" + event.id}
        >
          <FaEdit className="text-2xl m-auto" />
          <h1 className="font-bold m-auto">Edit</h1>
        </Link>
        <DeleteConfirmation
          className="flex w-min mr-auto text-amber-950 border-2 border-amber-950 rounded-md hover:text-amber-700 hover:border-amber-700 hover:shadow-md hover:bg-slate-250 my-auto p-1 h-11 cursor-pointer"
          deleteEvent={deleteEvent}
          id={event.id}
        />
      </div>
      <h2 className="text-3xl pb-4">
        {event.startDate + " - " + event.endDate}
      </h2>
      <div className="h-[40rem] m-8">
        <Carousel pauseOnHover>
          {event.images.map((image) => {
            return <img key={image} src={image} alt="" className="h-fit" />;
          })}
        </Carousel>
      </div>
      <h1 className="text-4xl font-bold pb-4 underline decoration-dotted">
        Description
      </h1>
      <h2 className="text-3xl p-4 m-auto">{event.description}</h2>
    </div>
  );
}

export default EventPage;
