import { Textarea } from "flowbite-react";
import React from "react";

function EditEventPage(props) {
  const queryParams = new URLSearchParams(window.location.search);

  const getEvent = (id) => {
    return props.events.find((event) => event.id === parseInt(id));
  };

  const getCategory = (id) => {
    return props.categories.find((category) => category.id === id);
  };

  const event = getEvent(queryParams.get("id"));
  const category = getCategory(event.categoryId);

  return (
    <form className="m-auto px-20 text-left text-4xl">
      <div className="grid grid-rows-2 grid-cols-1 gap-2 my-auto my-6">
        <div className="flex">
          <h1 className="font-bold underline mr-4">Name:</h1>
          <h1 className="text-slate-500">{event.name}</h1>
        </div>
        <input
          className="rounded-md text-3xl border-0 shadow-md w-1/3"
          type="text"
          placeholder="New name..."
        />
      </div>
      <div className="grid grid-rows-2 grid-cols-1 gap-2 my-auto my-6">
        <div className="flex">
          <h1 className="font-bold underline mr-4">Category:</h1>
          <h1 className="text-slate-500">{category.name}</h1>
        </div>
        <select className="rounded-md text-3xl border-0 shadow-md my-auto mr-auto">
          {props.categories.map((category) => (
            <option key={category.id} value={category}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-rows-2 grid-cols-1 gap-2 my-auto my-6">
        <div className="flex">
          <h1 className="font-bold underline mr-4">Start date:</h1>
          <h1 className="text-slate-500">{event.startDate}</h1>
        </div>
        <input
          className="rounded-md text-3xl border-0 shadow-md my-auto mr-auto"
          type="date"
        />
      </div>
      <div className="grid grid-rows-2 grid-cols-1 gap-2 my-auto my-6">
        <div className="flex">
          <h1 className="font-bold underline mr-4">End date:</h1>
          <h1 className="text-slate-500">{event.endDate}</h1>
        </div>
        <input
          className="rounded-md text-3xl border-0 shadow-md my-auto mr-auto"
          type="date"
        />
      </div>
      <div className="m-auto">
        <label className="font-bold underline">Description</label>
        <Textarea
          className="mt-6 rounded-md text-3xl border-0 shadow-md h-64"
          placeholder={event.description}
        />
      </div>
      <div className="m-auto">
        <h1 className="font-bold underline my-auto my-6">Upload image...</h1>
        <input
          className="rounded-md my-auto text-4xl flex"
          type="file"
          accept="image/*"
        />
      </div>
      <div className="m-auto rounded-lg border-2 border-black my-6" />
      <button
        type="submit"
        className="border-2 border-black px-6 py-2 rounded-md bg-cyan-600 font-bold shadow-md hover:bg-cyan-500 hover:shadow-lg"
      >
        Submit
      </button>
    </form>
  );
}

export default EditEventPage;
