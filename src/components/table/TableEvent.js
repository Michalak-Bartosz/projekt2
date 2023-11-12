import React, { useState } from "react";
import CategoryAvatar from "../category/CategoryAvatar";
import { Link } from "react-router-dom";
import DeleteConfirmation from "../event/DeleteConfirmation";
import { FaEdit } from "react-icons/fa";
import { Carousel } from "flowbite-react";

function TableEvent(props) {
  const [zoom, setZooom] = useState("scale(1)");
  const [isZoomed, setIsZoomed] = useState(false);
  const [zIndex, setZIndex] = useState("30");

  const changeZoom = () => {
    if (isZoomed) {
      setZooom("scale(1)");
      setZIndex("30");
      setIsZoomed(false);
    } else {
      setZooom("scale(2.2)");
      setZIndex("35");
      setIsZoomed(true);
    }
  };
  return (
    <tr className="text-2xl w-min">
      <td className="border-2 border-slate-800 p-2 font-bold">
        {props.event.name}
      </td>
      <td className="border-2 border-slate-800 p-2 p-4 w-12 h-12">
        <CategoryAvatar category={props.category} />
      </td>
      <td className="border-2 border-slate-800 p-2 w-[32rem]">
        <div
          className="h-56 sm:h-64 xl:h-80 2xl:h-96 m-0 p-0 transition-all relative"
          style={{
            transform: zoom,
            zIndex: zIndex,
          }}
        >
          <Carousel pauseOnHover>
            {props.event.images.map((image) => {
              return (
                <img
                  key={image}
                  className="cursor-pointer"
                  src={image}
                  alt=""
                  onClick={changeZoom}
                />
              );
            })}
          </Carousel>
        </div>
      </td>
      <td className="border-2 border-slate-800  p-2">
        {props.event.startDate}
      </td>
      <td className="border-2 border-slate-800  p-2">{props.event.endDate}</td>
      <td className="border-2 border-slate-800  p-2 m-auto">
        <h2 className="p-2 w-80 m-auto text-2xl truncate block">
          {props.event.description}
        </h2>
        <div className="flex m-auto">
          <Link
            className="flex m-auto py-2 px-4 border-slate-500 border-2 font-bold  bg-slate-200 hover:bg-slate-100 hover:shadow-md"
            to={"/event?id=" + props.event.id}
          >
            READ MORE 📑
          </Link>
        </div>
      </td>
      <td className="border-2 border-slate-800  p-2 m-auto">
        <div className="flex ml-auto">
          <Link
            className="flex text-cyan-700 border-2 border-cyan-700  hover:text-cyan-500 hover:border-cyan-500 hover:shadow-md hover:bg-slate-250 my-auto ml-auto p-1 h-11"
            to={"/event/edit?id=" + props.event.id}
          >
            <FaEdit className="text-2xl m-auto" />
            <h1 className="font-bold m-auto">Edit</h1>
          </Link>
          <DeleteConfirmation
            className="flex w-min ml-3 text-amber-950 border-2 border-amber-950  hover:text-amber-700 hover:border-amber-700 hover:shadow-md hover:bg-slate-250 my-auto p-1 h-11 cursor-pointer"
            deleteEvent={props.deleteEvent}
            id={props.event.id}
          />
        </div>
      </td>
    </tr>
  );
}

export default TableEvent;
