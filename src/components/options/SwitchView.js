import React from "react";
import { TbTimelineEventText } from "react-icons/tb";
import { BsTable } from "react-icons/bs";

function SwitchView(props) {
  const handleCheckboxChange = () => {
    props.setIsTimelineMode(!props.isTimelineMode);
  };
  return (
    <div className="relative z-10">
      <label
        id="switch-button"
        className="fixed block bg-slate-500 p-2 rounded-lg bg-opacity-20 cursor-pointer select-none items-center"
      >
        <input
          type="checkbox"
          checked={props.isTimelineMode}
          onChange={handleCheckboxChange}
          className="sr-only"
        />
        <h1 className="font-lobster text-3xl m-auto text-black mb-2">
          Switch View
        </h1>
        <div className="flex m-auto text-2xl h-max w-max items-center justify-center rounded-md bg-white border-slate-500 border-2">
          <span
            className={`flex h-12 w-12 items-center justify-center rounded ${
              !props.isTimelineMode
                ? "bg-white text-slate-300"
                : "bg-slate-300 text-body-color"
            }`}
          >
            <TbTimelineEventText />
          </span>
          <span
            className={`flex h-12 w-12 items-center justify-center rounded ${
              props.isTimelineMode
                ? "bg-white text-slate-300"
                : "bg-slate-300 text-body-color"
            }`}
          >
            <BsTable />
          </span>
        </div>
      </label>
    </div>
  );
}
export default SwitchView;
