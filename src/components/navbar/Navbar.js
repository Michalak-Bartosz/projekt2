import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      id="navbar"
      className="absolute m-auto top-0 left-0 p-4 w-full h-28 bg-slate-700 text-white flex place-content-between"
    >
      <Link id="logo" className="mx-8 my-auto font-extrabold text-6xl" to="/">
        TripLine
      </Link>
      <div
        id="navbar-menu"
        className="grid grid-rows-1 grid-cols-4 justify-items-stretch my-auto text-2xl text-center"
      >
        <Link id="home-link" className="ml-4 p-4 border rounded-lg hover:bg-slate-500 font-bold" to="/">
          HomePage
        </Link>
        <Link id="create-link" className="ml-4 p-4 border rounded-lg hover:bg-slate-500 font-bold" to="/create">
          Add Trip
        </Link>
        <Link id="create-link" className="ml-4 p-4 border rounded-lg hover:bg-slate-500 font-bold" to="/timelines">
          Timelines
        </Link>
        <Link id="print-link" className="ml-4 p-4 border rounded-lg hover:bg-slate-500 font-bold" to="/print">
          Print
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
