import React, { useEffect, useState } from "react";
import { Dropdown } from "flowbite-react";
import { HiViewGrid } from "react-icons/hi";
import { IoIosArrowDropdown } from "react-icons/io";
import { Tooltip } from "react-tooltip";

import { format } from "date-fns";
import { BsInfoCircleFill } from "react-icons/bs";

function SortFilterMenu(props) {
  const formatDate = "dd-MM-yyyy";
  const sortParams = ["Start Date", "End Date", "Name"];
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [menuSize, setMenuSize] = useState("0px");
  const [menuColor, setMenuColor] = useState("transparent");
  const [whiteTransparentColor, setWhiteTransparentColor] =
    useState("transparent");
  const [blackTransparentColor, setBlackTransparentColor] =
    useState("transparent");
  const [applyFilterButtonColor, setApplyFilterButtonColor] =
    useState("transparent");
  const [clearFilterButtonColor, setClearFilterButtonColor] =
    useState("transparent");
  const [triggerColor, setTriggerColor] = useState("transparent");
  const [inputType, setInputType] = useState("");

  useEffect(() => {
    if (props.status) {
      setMenuSize("48rem");
      setMenuColor("rgb(30 41 59)");
      setWhiteTransparentColor("white");
      setBlackTransparentColor("black");
      setApplyFilterButtonColor("rgb(22 163 74)");
      setClearFilterButtonColor("rgb(159 18 57)");
      setTriggerColor("rgb(71 85 105)");
      setInputType("date");
    } else {
      setMenuSize("0rem");
      setMenuColor("transparent");
      setWhiteTransparentColor("transparent");
      setBlackTransparentColor("transparent");
      setApplyFilterButtonColor("transparent");
      setClearFilterButtonColor("transparent");
      setTriggerColor("transparent");
      setInputType("");
    }
  }, [props.status]);

  const getTrigger = () => {
    return (
      <div
        className={
          "font-lobster text-white px-4 py-2 rounded-md m-auto font-extrabold flex cursor-pointer border-2 bg-slate-600 hover:bg-slate-400"
        }
        style={{
          borderColor: whiteTransparentColor,
          color: whiteTransparentColor,
          backgroundColor: triggerColor,
          transition: "all 0.5s",
        }}
      >
        <h1 className="m-auto">Sort by</h1>
        <IoIosArrowDropdown className="m-auto size-2xl" />
      </div>
    );
  };

  const clearFilter = () => {
    setFromDate(null);
    setToDate(null);
    props.setFromDateFilter(null);
    props.setToDateFilter(null);
  };

  const applyFilter = () => {
    props.setFromDateFilter(fromDate);
    props.setToDateFilter(toDate);
  };

  return (
    <div
      className="z-5 text-center flex fixed text-black top-[192px] text-2xl h-32 rounded-md right-28 p-3 m-auto transition-all"
      style={{
        backgroundColor: menuColor,
        width: menuSize,
        transition: "all 1s",
      }}
    >
      <div className="m-auto min-w-max">
        <div className="flex text-center m-auto">
          <h1
            className="flex m-auto my-2 text-white font-lobster"
            style={{
              color: whiteTransparentColor,
              transition: "all 1s",
            }}
          >
            Sort param:&nbsp;
          </h1>
          <h1
            className="flex m-auto"
            style={{
              color: whiteTransparentColor,
              transition: "all 1s",
            }}
          >
            {props.sortParam}
          </h1>
        </div>
        <Dropdown label="" renderTrigger={getTrigger}>
          <Dropdown.Header className="font-lobster text-2xl underline text-white bg-slate-900 p-4">
            <span>Select sort param!</span>
          </Dropdown.Header>
          <Dropdown.Divider />
          {sortParams.map((param) => (
            <Dropdown.Item
              key={"dropdown-item-" + param}
              className="flex p-2 text-1xl"
              icon={HiViewGrid}
              onClick={() => {
                props.setSortParam(param);
              }}
            >
              <h1 className="ml-2 font-lobster" key={"link-" + param}>
                {param}
              </h1>
            </Dropdown.Item>
          ))}
        </Dropdown>
      </div>
      <div
        className="w-0 min-h-full border-2 mx-2 my-auto rounded-md"
        style={{
          borderColor: whiteTransparentColor,
          transition: "all 0.5s",
        }}
      />
      <div className="text-white m-auto mx-2 pr-16">
        <form>
          <div className="flex font-lobster m-auto">
            <Tooltip id="filter-tooltip" />
            <BsInfoCircleFill
            className="m-auto mr-4"
              data-tooltip-id="filter-tooltip"
              data-tooltip-content="Filter base of 'From' -> 'Start Date' param and 'To' -> 'End Date' param."
              data-tooltip-place="top"
            />
            <h1
              className="mr-4 text-4xl"
              style={{
                color: whiteTransparentColor,
                transition: "all 0.5s",
              }}
            >
              Filter
            </h1>
            <input
              id="input-reset"
              type="reset"
              defaultValue="Reset"
              className="my-auto mr-4 px-2 py-1 rounded-md border-white border-2 hover:bg-green-400 cursor-pointer"
              style={{
                color: whiteTransparentColor,
                borderColor: whiteTransparentColor,
                backgroundColor: clearFilterButtonColor,
                transition: "all 0.3s",
              }}
              onClick={clearFilter}
            />
            <div
              className="m-auto ml-0 px-2 py-1 rounded-md border-white border-2 hover:bg-green-400 cursor-pointer"
              style={{
                color: whiteTransparentColor,
                borderColor: whiteTransparentColor,
                backgroundColor: applyFilterButtonColor,
                transition: "all 0.3s",
              }}
              onClick={applyFilter}
            >
              Apply
            </div>
          </div>
          <div
            className="min-w-full h-0 border-2 my-2 rounded-md"
            style={{
              borderColor: whiteTransparentColor,
              transition: "all 0.3s",
            }}
          />
          <div className="flex">
            <h1
              className="flex font-lobster my-auto mr-2"
              style={{
                color: whiteTransparentColor,
                transition: "all 0.3s",
              }}
            >
              From
            </h1>
            <input
              id="input-from-date"
              className="text-black mr-2"
              defaultValue={
                props.fromDateFilter
                  ? format(new Date(props.fromDateFilter), "yyyy-MM-dd")
                  : null
              }
              type="date"
              required={false}
              style={{
                color: blackTransparentColor,
                backgroundColor: whiteTransparentColor,
                borderColor: whiteTransparentColor,
                transition: "all 0.3s",
              }}
              onChange={(e) => {
                let newDate = format(new Date(e.target.value), formatDate);
                setFromDate(newDate);
              }}
            />
            <h1
              className="font-lobster my-auto mr-2"
              style={{
                color: whiteTransparentColor,
                transition: "all 0.3s",
              }}
            >
              To
            </h1>
            <input
              id="input-to-date"
              className="text-black"
              defaultValue={
                props.toDateFilter
                  ? format(new Date(props.toDateFilter), "yyyy-MM-dd")
                  : null
              }
              required={false}
              type={inputType}
              style={{
                color: blackTransparentColor,
                backgroundColor: whiteTransparentColor,
                borderColor: whiteTransparentColor,
                transition: "all 0.3s",
              }}
              onChange={(e) => {
                let newDate = format(new Date(e.target.value), formatDate);
                setToDate(newDate);
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default SortFilterMenu;
