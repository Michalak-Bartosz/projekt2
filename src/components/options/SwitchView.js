import React, { useEffect, useState } from "react";
import { TbTimelineEventText } from "react-icons/tb";
import { BsTable } from "react-icons/bs";

function SwitchView(props) {
  const [menuSize, setMenuSize] = useState("0px");
  const [menuPadding, setMenuPadding] = useState("0px");
  const [menuColor, setMenuColor] = useState("transparent");
  const [whiteTransparentColor, setWhiteTransparentColor] =
    useState("transparent");
  const [visibility, setVisibility] = useState("hidden");
  const [opacity, setOpacity] = useState("0");

  const handleCheckboxChange = () => {
    props.setIsTimelineMode(!props.isTimelineMode);
  };

  useEffect(() => {
    if (props.status) {
      setMenuSize("216px");
      setMenuPadding("70px");
      setMenuColor("rgb(30 41 59)");
      setWhiteTransparentColor("white");
      setVisibility("visible");
      setOpacity(1);
    } else {
      setMenuSize("0rem");
      setMenuPadding("0px");
      setMenuColor("transparent");
      setWhiteTransparentColor("transparent");
      setVisibility("hidden");
      setOpacity(0);
    }
  }, [props.status]);

  return (
    <div className="relative z-5">
      <label
        id="switch-button"
        className="fixed top-[260px] right-[58px] block bg-slate-800 p-[15px] rounded-lg cursor-pointer select-none items-center"
        style={{
          backgroundColor: menuColor,
          paddingTop: menuPadding,
          height: menuSize,
          transition: "all 1s",
        }}
      >
        <input
          id="input-switch"
          type="checkbox"
          checked={props.isTimelineMode}
          onChange={handleCheckboxChange}
          className="sr-only"
        />
        <div
          className="text-center font-lobster text-3xl m-auto mb-2"
          style={{
            color: whiteTransparentColor,
            transition: "all 1.5s",
          }}
        >
          <h1>Switch</h1>
          <h1>View</h1>
        </div>

        <div
          className="flex m-auto text-2xl h-max w-max items-center justify-center rounded-md bg-white border-slate-500 border-2"
          style={{
            visibility: visibility,
            opacity: opacity,
            transition: "visibility 0.2s, opacity 0.2s linear",
          }}
        >
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
