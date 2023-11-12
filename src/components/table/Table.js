import React from "react";
import TableEvent from "./TableEvent";

function EventTable(props) {
  const deleteEvent = (id) => {
    props.setEvents((events) => events.filter((event) => event.id !== id));
  };

  const getCategory = (id) => {
    return props.categories.find((category) => category.id === id);
  };
  return (
    <div className="flex text-black bg-slate-400 w-max h-max m-auto p-4 bg-opacity-20">
      <table className="m-auto text-left border-2 border-slate-800">
        <thead>
          <tr className="font-lobster text-3xl text-center bg-slate-500 font-bold">
            <th className="border-2 border-slate-800 p-2">Name</th>
            <th className="border-2 border-slate-800 p-2">Category</th>
            <th className="border-2 border-slate-800 p-2">Image</th>
            <th className="border-2 border-slate-800 p-2">Start Date</th>
            <th className="border-2 border-slate-800 p-2">End Date</th>
            <th className="border-2 border-slate-800 p-2">Description</th>
            <th className="border-2 border-slate-800 p-2">Options</th>
          </tr>
        </thead>
        <tbody className="bg-slate-400 bg-opacity-70">
          {props.events.map((event, index) => {
            return (
              <TableEvent
                key={event.id}
                event={event}
                category={getCategory(event.categoryId)}
                deleteEvent={deleteEvent}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default EventTable;
