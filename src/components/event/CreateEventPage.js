import { Textarea } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { format } from "date-fns";

function CreateEventPage(props) {
  const formatDate = "dd-MM-yyyy";
  const [newEvent, setEvent] = useState({
    id: null,
    timelineId: null,
    categoryId: null,
    name: "",
    description: "",
    startDate: "",
    endDate: "",
    imagePath: "",
  });

  const [name, setName] = useState();
  const [categoryId, setCategoryId] = useState(1);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [description, setDescription] = useState();
  const [image, setImage] = useState();

  const saveNewTrip = () => {
    let id = Math.max(...props.events.map((e) => e.id)) + 1;
    setEvent({
      id: parseInt(id),
      timelineId: parseInt(props.timelineId),
      categoryId: parseInt(categoryId),
      name: name,
      description: description,
      startDate: startDate,
      endDate: endDate,
      imagePath: image,
    });
    console.log(image);
  };

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  useEffect(() => {
    if (newEvent.id !== null) {
      console.log(newEvent);
      props.setEvents((prevEvents) => [...prevEvents, newEvent]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newEvent]);

  return (
    <div className="block px-10">
      <h1 className="text-6xl font-bold pb-10 text-center underline decoration-dotted">
        Add New Trip
      </h1>
      <div className="text-left text-4xl">
        <div className="grid grid-rows-2 grid-cols-1 gap-4">
          <h1 className="font-bold underline mr-4">Name</h1>
          <input
            id="name-input"
            className="rounded-md text-3xl border-0 shadow-md w-1/3"
            type="text"
            placeholder="New name..."
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="grid grid-rows-2 grid-cols-1 gap-4 mt-4">
          <h1 className="font-bold underline mr-4">Category</h1>
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
          <h1 className="font-bold underline mr-4">Start date</h1>
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
          <h1 className="font-bold underline mr-4">End date:</h1>

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
          <h1 className="font-bold underline">Description</h1>
          <Textarea
            id="description-textarea"
            className="mt-4 rounded-md text-3xl border-0 shadow-md h-64"
            placeholder="New description..."
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="m-auto mt-4">
          <h1 className="font-bold underline">Upload image...</h1>
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
          className="border-2 border-black px-6 py-2 rounded-md bg-cyan-600 font-bold shadow-md hover:bg-cyan-500 hover:shadow-lg"
          onClick={saveNewTrip}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default CreateEventPage;
