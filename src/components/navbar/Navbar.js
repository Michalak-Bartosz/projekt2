import React from "react";
import { Link } from "react-router-dom";
import TimelinesDropdown from "../timeline/TimelinesDropdown";

function Navbar(props) {
  return (
    <nav
      id="navbar"
      className="nav absolute m-auto top-0 left-0 p-4 w-full h-28 bg-slate-800 text-white flex place-content-between font-lobster"
    >
      <Link id="logo" className="mx-4 my-auto font-extrabold text-6xl" to="/">
        TripLine
      </Link>
      <div
        id="navbar-menu"
        className="grid grid-rows-1 grid-cols-4 justify-items-stretch my-auto text-2xl text-center"
      >
        <Link
          id="home-link"
          className="ml-4 p-4 border rounded-lg bg-slate-900 hover:bg-slate-700 font-bold"
          to="/"
        >
          Home Page
        </Link>
        <Link
          id="create-link"
          className="ml-4 p-4 border rounded-lg bg-slate-900 hover:bg-slate-700 font-bold"
          to="/create"
        >
          Add Trip
        </Link>
        <TimelinesDropdown
          setTimelineId={props.setTimelineId}
          timelines={props.timelines}
          className={
            "ml-4 p-4 border rounded-lg bg-slate-900 hover:bg-slate-700 font-bold"
          }
        />
        <Link
          id="print-link"
          className="ml-4 p-4 border rounded-lg bg-slate-900 hover:bg-slate-700 font-bold"
          to="/print"
        >
          Print
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
