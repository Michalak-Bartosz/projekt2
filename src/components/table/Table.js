import React from "react";
import CategoryAvatar from "../category/CategoryAvatar";
import { Link } from "react-router-dom";
import DeleteConfirmation from "../event/DeleteConfirmation";
import { FaEdit } from "react-icons/fa";

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
        <tbody>
          {props.events.map((event) => {
            return (
              <tr key={event.id} className="text-2xl w-min">
                <td className="border-2 border-slate-800 rounded-md p-2 font-bold">
                  {event.name}
                </td>
                <td className="border-2 border-slate-800 rounded-md p-2 p-4 w-12 h-12">
                  <CategoryAvatar category={getCategory(event.categoryId)} />
                </td>
                <td className="border-2 border-slate-800 rounded-md p-2 w-80">
                  <img
                    src={event.imagePath}
                    alt=""
                    className="pb-4 shadow-x1 rounded-md m-auto"
                  />
                </td>
                <td className="border-2 border-slate-800 rounded-md p-2">
                  {event.startDate}
                </td>
                <td className="border-2 border-slate-800 rounded-md p-2">
                  {event.endDate}
                </td>
                <td className="border-2 border-slate-800 rounded-md p-2 m-auto">
                  <h2 className="p-2 w-80 m-auto text-2xl truncate block">
                    {event.description}
                  </h2>
                  <div className="flex m-auto">
                    <Link
                      className="flex m-auto py-2 px-4 border-slate-500 border-2 font-bold rounded-md bg-slate-200 hover:bg-slate-100 hover:shadow-md"
                      to={"/event?id=" + event.id}
                    >
                      READ MORE 📑
                    </Link>
                  </div>
                </td>
                <td className="border-2 border-slate-800 rounded-md p-2 m-auto">
                  <div className="flex ml-auto">
                    <Link
                      className="flex text-cyan-700 border-2 border-cyan-700 rounded-md hover:text-cyan-500 hover:border-cyan-500 hover:shadow-md hover:bg-slate-250 my-auto ml-auto p-1 h-11"
                      to={"/event/edit?id=" + event.id}
                    >
                      <FaEdit className="text-2xl m-auto" />
                      <h1 className="font-bold m-auto">Edit</h1>
                    </Link>
                    <DeleteConfirmation
                      className="flex w-min ml-3 text-amber-950 border-2 border-amber-950 rounded-md hover:text-amber-700 hover:border-amber-700 hover:shadow-md hover:bg-slate-250 my-auto p-1 h-11 cursor-pointer"
                      deleteEvent={deleteEvent}
                      id={event.id}
                    />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default EventTable;
