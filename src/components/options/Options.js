import React, { useEffect, useState } from "react";
import SortFilterMenu from "./SortFilterMenu";
import CompasRose from "../../images/background/compass_rose.png";
import SwitchView from "./SwitchView";

function Options(props) {
  const [status, setStatus] = useState(false);
  const [top, setTop] = useState("192px");
  const [right, setRight] = useState("56px");
  const [transform, setTransform] = useState("rotate(0deg)");

  const showMenu = () => {
    if (status) {
      setStatus(false);
    } else {
      setStatus(true);
    }
  };

  useEffect(() => {
    if (status) {
      setTop("170px");
      setRight("36px");
      setTransform("rotate(-90deg)");
    } else {
      setTop("192px");
      setRight("56px");
      setTransform("rotate(0deg)");
    }
  }, [status]);

  return (
    <div id="sort-filter-button" className="relative z-40">
      <div>
        <div
          className="z-10 text-center fixed top-50 right-14 cursor-pointer"
          onClick={showMenu}
          style={{
            top: top,
            right: right,
            transform: transform,
            transition: "all 0.3s",
          }}
        >
          <img
            className="h-32 scroll-auto bg-slate-300 hover:bg-slate-200 avatar aspect-square rounded-full shadow-xl p-2 border-slate-800 border-4 hover:shadow-x2"
            src={CompasRose}
            alt="CompasRose"
          />
          <h1 className="mt-2 font-lobster text-3xl">Options</h1>
        </div>
        <SwitchView
          status={status}
          isTimelineMode={props.isTimelineMode}
          setIsTimelineMode={props.setIsTimelineMode}
          setEvents={props.setEvents}
        />
        <SortFilterMenu
          status={status}
          sortParam={props.sortParam}
          setSortParam={props.setSortParam}
          fromDateFilter={props.fromDateFilter}
          setFromDateFilter={props.setFromDateFilter}
          toDateFilter={props.toDateFilter}
          setToDateFilter={props.setToDateFilter}
        />
      </div>
    </div>
  );
}
export default Options;
