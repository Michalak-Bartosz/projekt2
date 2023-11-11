import React, { useEffect, useState } from "react";
import CompasRose from "../../images/background/compass_rose.png";
import { Dropdown } from "flowbite-react";
import { HiViewGrid } from "react-icons/hi";
import { IoIosArrowDropdown } from "react-icons/io";
import InfoIcon from "@mui/icons-material/Info";
import { format } from "date-fns";
import IconWithTooltip from "icon-with-tooltip";

function SortFilterMenu(props) {
  const formatDate = "dd-MM-yyyy";
  const sortParams = ["Start Date", "End Date", "Name"];
  const [status, setStatus] = useState(false);
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
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);

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

  const showMenu = () => {
    if (status) {
      setStatus(false);
    } else {
      setStatus(true);
    }
  };

  useEffect(() => {
    if (status) {
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
  }, [status]);

  return (
    <div id="sort-filter-button" className="relative z-10">
      <div
        className="z-10 text-center fixed top-50 right-14 cursor-pointer"
        onClick={showMenu}
      >
        <img
          className="h-32 scroll-auto bg-slate-300 hover:bg-slate-200 avatar aspect-square rounded-full shadow-xl p-2 border-slate-800 border-4 hover:shadow-x2"
          src={CompasRose}
          alt="CompasRose"
          style={{
            transition: "all 0.1s",
          }}
        />
        <h1 className="mt-2 font-lobster text-3xl">Sort/Filter</h1>
      </div>
      <div
        className="z-5 text-center flex fixed text-black top-55 text-2xl h-32 rounded-md right-28 p-3 m-auto"
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
                <h1 className="ml-2 font-lobster" key={"link-" + param.id}>
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
              <div className="m-auto mr-0">
                <IconWithTooltip
                  Icon={InfoIcon}
                  text="Filter base of 'From' -> 'Start Date' param and 'To' -> 'End Date' param."
                  placement="top"
                />
              </div>
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
                type={inputType}
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
                defaultValue={() => format(new Date(fromDate), "yyyy-MM-dd")}
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
                defaultValue={() => format(new Date(toDate), "yyyy-MM-dd")}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SortFilterMenu;
