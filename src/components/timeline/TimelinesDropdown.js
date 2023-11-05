import React from "react";
import { Dropdown } from "flowbite-react";
import { HiViewGrid } from "react-icons/hi";

function TimelinesDropdown(props) {
  return (
    <div className={props.className}>
      <Dropdown inline={true} label="Timelines">
        <Dropdown.Header>
          <span className="block text-sm">Select your timeline!</span>
        </Dropdown.Header>
        <Dropdown.Divider />
        {props.timelines.map((timeline) => (
          <Dropdown.Item
            key={timeline.id}
            className="flex p-2"
            icon={HiViewGrid}
          >
            {timeline.name}
          </Dropdown.Item>
        ))}
      </Dropdown>
    </div>
  );
}

export default TimelinesDropdown;
