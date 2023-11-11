import { Textarea } from "flowbite-react";
import React, { useCallback, useEffect, useState } from "react";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import Car1Background from "../../images/background/car_dotted_b_1.png";

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
  const [images, setImages] = useState();

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

  const onImageChange = (event) => {
    if (event.target.files && event.target.files.length > 1) {
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
          <div className="grid grid-rows-2 grid-cols-1 gap-4 mt-4">
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
          <div className="m-auto mt-4">
            <h1 className="font-bold underline decoration-dotted">
              Add New Images
            </h1>
            <input
              id="image-input"
              multiple
              className="rounded-md text-4xl mt-4"
              type="file"
              accept="image/*"
              onChange={onImageChange}
            />
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
