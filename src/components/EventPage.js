import React from "react";
import "react-vertical-timeline-component/style.min.css";
import CategoryAvatar from "./category/CategoryAvatar";

function EventPage(props) {
  const queryParams = new URLSearchParams(window.location.search);

  const getEvent = (id) => {
    return props.events.find((event) => event.id === parseInt(id));
  };

  const getCategory = (id) => {
    return props.categories.find((category) => category.id === id);
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
      <h2 className="text-3xl pb-4">
        {event.startDate + " - " + event.endDate}
      </h2>
      <img
        src={event.imagePath}
        alt=""
        className="pb-8 shadow-x1 rounded-md w-1/2 flex m-auto"
      />
      <h1 className="text-4xl font-bold pb-4 underline decoration-dotted">
        Description
      </h1>
      <h2 className="text-3xl p-4 m-auto">{event.description}</h2>
    </div>
  );
}

export default EventPage;
