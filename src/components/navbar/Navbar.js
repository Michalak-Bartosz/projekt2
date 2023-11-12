import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TimelinesDropdown from "../timeline/TimelinesDropdown";
import WhiteLogo from "../../images/logo/WhiteLogo.png";
import BlackLogo from "../../images/logo/BlackLogo.png";

function Navbar(props) {
  const [navSize, setnavSize] = useState("10rem");
  const [navColor, setnavColor] = useState("transparent");
  const [textColor, setTextColor] = useState("black");
  const [logo, setLogo] = useState(BlackLogo);
  const [timelineColor, setTimelineColor] = useState("transparent");

  const getTimeline = useCallback(
    (id) => {
      return props.timelines.find((timeline) => timeline.id === id);
    },
    [props.timelines]
  );

  useEffect(() => {
    setTimeline(getTimeline(props.timelineId));
  }, [props.timelineId, getTimeline]);

  const [timeline, setTimeline] = useState(getTimeline(props.timelineId));

  const listenScrollEvent = () => {
    window.scrollY > 10
      ? setnavColor("rgb(30 41 59)")
      : setnavColor("transparent");
    window.scrollY > 10 ? setnavSize("8rem") : setnavSize("10rem");
    window.scrollY > 10 ? setTextColor("white") : setTextColor("black");
    window.scrollY > 10 ? setLogo(WhiteLogo) : setLogo(BlackLogo);
    window.scrollY > 10
      ? setTimelineColor("white")
      : setTimelineColor("transparent");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);
  return (
    <nav
      id="navbar"
      className="nav z-40 fixed flex m-auto top-0 left-0 p-4 w-full text-white flex place-content-between font-lobster border-t border-l border-r border-8 border-slate-800 border-dotted"
      style={{
        backgroundColor: navColor,
        height: navSize,
        transition: "all 1s",
      }}
    >
      <Link
        id="logo"
        className="inline-block mx-4 my-auto font-extrabold text-6xl min-w-[300px]"
        to="/"
        style={{
          color: textColor,
          transition: "all 1s",
        }}
      >
        <img
          className="inline w-20 h-20 text-xl mr-4 m-auto"
          rel="icon"
          src={logo}
          alt="TripLineLogo"
          style={{
            transition: "all 1s",
          }}
        />
        TripLine
      </Link>
      <div id="navbar-buttons" className="flex">
        <h1
          className="m-auto text-4xl font-bold"
          style={{
            color: timelineColor,
            transition: "all 1s",
          }}
        >
          {timeline.name}
        </h1>
        <div
          id="navbar-menu"
          className="grid grid-rows-1 grid-cols-5 justify-items-stretch my-auto text-2xl text-center min-w-[800px]"
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
          <Link
            id="create-link"
            className="ml-4 p-4 border rounded-lg bg-slate-900 hover:bg-slate-700 font-bold"
            to="/category"
          >
            Categories
          </Link>
          <TimelinesDropdown
            setTimelineId={props.setTimelineId}
            timelines={props.timelines}
            className={
              "ml-4 p-4 border rounded-lg bg-slate-900 hover:bg-slate-700 font-bold"
            }
          />
          <button
            id="print-link"
            className="ml-4 p-4 border rounded-lg bg-slate-900 hover:bg-slate-700 font-bold"
            onClick={() => {
              window.print();
              return false;
            }}
          >
            Print
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
