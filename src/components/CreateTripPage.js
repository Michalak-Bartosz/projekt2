import { Dropdown } from "flowbite-react";
import React from "react";
import { HiViewGrid } from "react-icons/hi";
import { IoIosArrowDropdown } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Earth from ".././images/background/earth.png";

function CreateTripPage(props) {
  const navigate = useNavigate();
  const getTrigger = () => {
    return (
      <div className="ml-4 p-4 border rounded-lg bg-blue-900 hover:bg-blue-700 hover:cursor-pointer font-bold shadow-md flex">
        Timelines
        <IoIosArrowDropdown className="m-auto ml-2 size-2xl" />
      </div>
    );
  };
  return (
    <>
      <img
        className="z-0 fixed flex w-1/4 bottom-10 right-10 scroll-auto opacity-30"
        src={Earth}
        alt="Earth"
      />
      <div className="m-auto text-center p-8">
        <h1 className="text-6xl font-lobster font-bold m-auto w-max px-10 py-5 mb-10 text-center border-8 border-black border-dotted rounded-lg">
          Add New Trip!
        </h1>
        <div className="font-bold text-center text-slate-700 m-8 mb-12">
          <h1 className="m-auto text-6xl mb-8">
            Do you want to create a new timeline?
          </h1>
          <h2 className="m-auto text-5xl">...or select an existing one?</h2>
        </div>
        <div className="w-min m-auto">
          <div className="grid grid-rows-1 grid-cols-2 gap-4 justify-items-stretch m-auto text-4xl text-center w-max text-white font-lobster p-8 border-8 border-black border-dotted rounded-lg">
            <button
              className="p-4 border rounded-lg bg-green-900 hover:bg-green-700 font-bold"
              onClick={() => navigate("/create/timeline")}
            >
              Create New
            </button>
            <Dropdown label="" renderTrigger={getTrigger}>
              <Dropdown.Header className="block text-2xl underline text-white bg-slate-900 p-4 shadow-md">
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
                    navigate("/create/event");
                  }}
                >
                  <h1 className="ml-2" key={"link-" + timeline.id}>
                    {timeline.name}
                  </h1>
                </Dropdown.Item>
              ))}
            </Dropdown>
          </div>
          <button
            className="my-8 w-full text-4xl font-lobster text-white p-4 border rounded-lg bg-rose-900 hover:bg-rose-700 font-bold"
            onClick={() => navigate("/")}
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
}

export default CreateTripPage;
