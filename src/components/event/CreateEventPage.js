import { Textarea } from "flowbite-react";
import React, { useCallback, useEffect, useState } from "react";
import { format } from "date-fns";
import { Link, useNavigate } from "react-router-dom";
import Car1Background from "../../images/background/car_dotted_b_1.png";
import DeleteConfirmation from "./DeleteConfirmation";

function CreateEventPage(props) {
  const formatDate = "dd-MM-yyyy";
  const navigate = useNavigate();
  const getTimeline = useCallback(
    (id) => {
      return props.timelines.find((timeline) => timeline.id === id);
    },
    [props.timelines]
  );
  const [newEvent, setNewEvent] = useState({
    id: null,
    timelineId: null,
    categoryId: null,
    name: "",
    description: "",
    startDate: "",
    endDate: "",
    images: "",
  });

  const [timeline, setTimeline] = useState(getTimeline(props.timelineId));
  const [name, setName] = useState();
  const [categoryId, setCategoryId] = useState(1);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [description, setDescription] = useState();
  const [images, setImages] = useState([]);

  const saveNewTrip = () => {
    let id = Math.max(...props.events.map((e) => e.id)) + 1;
    setNewEvent({
      id: parseInt(id),
      timelineId: parseInt(props.timelineId),
      categoryId: parseInt(categoryId),
      name: name,
      description: description,
      startDate: startDate,
      endDate: endDate,
      images: images,
    });
  };

  const deleteImage = (id) => {
    setImages(images.filter((image) => image !== id));
  };

  const onImageChange = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      const newImageUrls = [];
      const newFiles = [...event.target.files];
      newFiles.forEach((image) =>
        newImageUrls.push(URL.createObjectURL(image))
      );
      setImages(newImageUrls);
    }
  };

  useEffect(() => {
    if (newEvent.id !== null) {
      props.setEvents((prevEvents) => [...prevEvents, newEvent]);
      navigate("/create");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newEvent]);

  useEffect(() => {
    setTimeline(getTimeline(props.timelineId));
  }, [props.timelineId, getTimeline]);

  return (
    <>
      <img
        className="z-0 fixed flex w-1/2 top-30 right-0 scroll-auto opacity-30"
        src={Car1Background}
        alt="Car1Background"
      />
      <div className="z-10 relative block px-10">
        <div className="p-8 font-lobster my-6 mb-12 mx-auto w-max border-8 border-black border-dotted rounded-lg text-center">
          <h1 id="homepage-title" className="text-6xl font-bold m-auto mb-6">
            Add New Trip in
          </h1>
          <div className="border-2 border-black my-4" />
          <h2 className="text-5xl font-bold m-auto text-slate-700">
            {timeline.name}
          </h2>
        </div>
        <div className="text-left text-4xl">
          <div className="grid grid-rows-2 grid-cols-1 gap-4">
            <h1 className="font-bold underline decoration-dotted mr-4">Name</h1>
            <input
              id="name-input"
              className="rounded-md text-3xl border-0 shadow-md w-1/3"
              type="text"
              placeholder="New name..."
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex mt-4">
            <div className="grid grid-rows-2 grid-cols-1 gap-4">
              <h1 className="font-bold underline decoration-dotted mr-4">
                Category
              </h1>
              <select
                id="category-select"
                className="rounded-md text-3xl border-0 shadow-md my-auto mr-auto"
                onChange={(e) => setCategoryId(e.target.value)}
              >
                {props.categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="min-h-full w-0 m-4 mx-8 border-2 border-slate-500 rounded-md" />
            <div className="my-auto mr-12 text-center">
              <h1 className="mb-4 font-bold">
                There is no appropriate category?{" "}
              </h1>
              <h2 className="text-amber-900 underline decoration-dotted">
                Change it!
              </h2>
            </div>
            <div className="flex border-8 border-slate-500 border-dotted rounded-md">
              <Link
                className="text-white m-6 my-auto p-4 border-2 border-black rounded-lg bg-amber-900 hover:bg-amber-700 font-bold"
                to="/category"
              >
                Manage Categories
              </Link>
            </div>
          </div>
          <div className="grid grid-rows-2 grid-cols-1 gap-4 mt-4">
            <h1 className="font-bold underline decoration-dotted mr-4">
              Start date
            </h1>
            <input
              id="startdate-input"
              className="rounded-md text-3xl border-0 shadow-md mr-auto"
              type="date"
              onChange={(e) => {
                let newDate = format(new Date(e.target.value), formatDate);
                setStartDate(newDate);
              }}
            />
          </div>
          <div className="grid grid-rows-2 grid-cols-1 gap-4 mt-4">
            <h1 className="font-bold underline decoration-dotted mr-4">
              End date:
            </h1>

            <input
              id="enddate-input"
              className="rounded-md text-3xl border-0 shadow-md my-auto mr-auto"
              type="date"
              onChange={(e) => {
                let newDate = format(new Date(e.target.value), formatDate);
                setEndDate(newDate);
              }}
            />
          </div>
          <div className="m-auto mt-4">
            <h1 className="font-bold underline decoration-dotted">
              Description
            </h1>
            <Textarea
              id="description-textarea"
              className="mt-4 rounded-md text-3xl border-0 shadow-md h-64"
              placeholder="New description..."
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="flex m-auto mt-4">
            <div className="mr-6">
              <h1 className="font-bold underline m-0 decoration-dotted">
                Add New Images
              </h1>
              <input
                id="image-input"
                multiple
                className="rounded-md text-2xl w-80 mt-4 border-4 border-slate-800"
                type="file"
                accept="image/*"
                onChange={onImageChange}
              />
            </div>
            <div className="min-w-0 min-h-full border-2 border-black rounded-md m-0" />
            <div className="grid grid-flow-row grid-cols-3 min-w-max m-auto">
              {images.map((image) => {
                return (
                  <div key={image} className="rounded-md p-2">
                    <img
                      src={image}
                      alt=""
                      className="max-h-32 max-w-32 m-auto"
                    />
                    <DeleteConfirmation
                      className="flex w-min text-2xl m-auto mt-2 text-amber-950 border-2 border-amber-950 rounded-md hover:text-amber-700 hover:border-amber-700 hover:shadow-md hover:bg-slate-250 my-auto p-1 h-11 cursor-pointer"
                      deleteEvent={deleteImage}
                      id={image}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="m-auto rounded-lg border-2 border-black my-6" />
          <button
            className="border-2 border-black px-6 py-2 rounded-md bg-cyan-600 font-bold shadow-md hover:bg-cyan-500 hover:shadow-lg"
            onClick={saveNewTrip}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default CreateEventPage;
