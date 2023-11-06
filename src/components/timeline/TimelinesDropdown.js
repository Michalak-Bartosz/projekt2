import React from "react";
import { Dropdown } from "flowbite-react";
import { HiViewGrid } from "react-icons/hi";

function TimelinesDropdown(props) {
  return (
    <div className={props.className}>
      <Dropdown inline={true} label="Timelines">
        <Dropdown.Header className="block text-2xl underline text-white bg-slate-900 p-4">
          <span>Select your timeline!</span>
        </Dropdown.Header>
        <Dropdown.Divider />
        {props.timelines.map((timeline) => (
          <Dropdown.Item
            key={"dropdown-item-" + timeline.id}
            className="flex p-2 text-1xl"
            icon={HiViewGrid}
          >
            <h1
              className="ml-2"
              key={"link-" + timeline.id}
              onClick={() => props.setTimelineId(timeline.id)}
            >
              {timeline.name}
            </h1>
          </Dropdown.Item>
        ))}
      </Dropdown>
    </div>
  );
}

export default TimelinesDropdown;
