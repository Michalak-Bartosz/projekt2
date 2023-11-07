import { Textarea } from "flowbite-react";
import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";

function EditEventPage(props) {
  const formatDate = "dd-MM-yyyy";
  const queryParams = new URLSearchParams(window.location.search);
  const navigate = useNavigate();

  const getEvent = (id) => {
    return props.events.find((event) => event.id === parseInt(id));
  };

  const getCategory = (id) => {
    return props.categories.find((category) => category.id === id);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const event = useMemo(() => getEvent(queryParams.get("id")), []);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const category = useMemo(() => getCategory(event.categoryId), []);

  const [updated, setUpdated] = useState(false);
  const [name, setName] = useState(event.name);
  const [categoryId, setCategoryId] = useState(event.categoryId);
  const [startDate, setStartDate] = useState(event.startDate);
  const [endDate, setEndDate] = useState(event.endDate);
  const [description, setDescription] = useState(event.description);
  const [image, setImage] = useState(event.imagePath);

  const updateTrip = () => {
    event.categoryId = returnIfChanged(event.categoryId, parseInt(categoryId));
    event.name = returnIfChanged(event.name, name);
    event.description = returnIfChanged(event.description, description);
    event.startDate = returnIfChanged(event.startDate, startDate);
    event.endDate = returnIfChanged(event.endDate, endDate);
    event.imagePath = returnIfChanged(event.imagePath, image);
    setUpdated(true);
  };

  const returnIfChanged = (currentValue, newValue) => {
    if (currentValue !== newValue) {
      return newValue;
    }
    return currentValue;
  };

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  useEffect(() => {
    if (updated === true) {
      props.setEvents((prevEvents) => [
        ...prevEvents.filter((e) => e.id !== event.id),
        event,
      ]);
      navigate("/");
      setUpdated(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updated]);

  return (
    <div className="block px-10">
      <h1 className="text-6xl font-lobster font-bold m-auto w-max px-10 py-5 mb-10 text-center border-8 border-black border-dotted rounded-lg">
        Edit Trip
      </h1>
      <div className="text-left text-4xl">
        <div className="grid grid-rows-2 grid-cols-1 gap-4">
          <div className="flex">
            <h1 className="font-bold underline decoration-dotted mr-4">
              Name:
            </h1>
            <h1 className="text-slate-500">{event.name}</h1>
          </div>
          <input
            id="name-input"
            className="rounded-md text-3xl border-0 shadow-md w-1/3"
            type="text"
            placeholder="New name..."
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="grid grid-rows-2 grid-cols-1 gap-4 mt-4">
          <div className="flex">
            <h1 className="font-bold underline decoration-dotted mr-4">
              Category:
            </h1>
            <h1 className="text-slate-500">{category.name}</h1>
          </div>
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
          <div className="flex">
            <h1 className="font-bold underline decoration-dotted mr-4">
              Start date:
            </h1>
            <h1 className="text-slate-500">{event.startDate}</h1>
          </div>
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
          <div className="flex">
            <h1 className="font-bold underline decoration-dotted mr-4">
              End date:
            </h1>
            <h1 className="text-slate-500">{event.endDate}</h1>
          </div>
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
          <h1 className="font-bold underline decoration-dotted">Description</h1>
          <Textarea
            id="description-textarea"
            className="mt-4 rounded-md text-3xl border-0 shadow-md h-64"
            placeholder={event.description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="m-auto mt-4">
          <h1 className="font-bold underline decoration-dotted">
            Upload image
          </h1>
          <input
            id="image-input"
            className="rounded-md text-4xl mt-4"
            type="file"
            accept="image/*"
            onChange={onImageChange}
          />
        </div>
        <div className="m-auto rounded-lg border-2 border-black my-6" />
        <button
          type="submit"
          className="border-2 border-black px-6 py-2 rounded-md bg-cyan-600 font-bold shadow-md hover:bg-cyan-500 hover:shadow-lg"
          onClick={updateTrip}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default EditEventPage;
