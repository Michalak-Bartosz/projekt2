import React from "react";
import { Dropdown } from "flowbite-react";
import { HiViewGrid } from "react-icons/hi";
import { IoIosArrowDropdown } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function TimelinesDropdown(props) {
  const navigate = useNavigate();
  const getTrigger = () => {
    return (
      <div className={props.className + " flex cursor-pointer"}>
        Timelines
        <IoIosArrowDropdown className="m-auto ml-2 size-2xl" />
      </div>
    );
  };

  return (
    <Dropdown label="" renderTrigger={getTrigger}>
      <Dropdown.Header className="block text-2xl underline text-white bg-slate-900 p-4">
        <span>Select your timeline!</span>
      </Dropdown.Header>
      <Dropdown.Divider />
      {props.timelines.map((timeline) => (
        <Dropdown.Item
          key={"dropdown-item-" + timeline.id}
          className="flex p-2 text-1xl"
          icon={HiViewGrid}
          onClick={() => {
            props.setTimelineId(timeline.id);
            navigate("/");
          }}
        >
          <h1 className="ml-2" key={"link-" + timeline.id}>
            {timeline.name}
          </h1>
        </Dropdown.Item>
      ))}
    </Dropdown>
  );
}

export default TimelinesDropdown;
