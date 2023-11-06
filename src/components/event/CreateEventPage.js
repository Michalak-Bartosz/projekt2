import { Textarea } from "flowbite-react";
import React from "react";

function CreateEventPage(props) {
  return (
    <form className="m-auto px-20 text-left text-4xl">
      <div className="grid grid-rows-2 grid-cols-1 gap-2 my-auto my-6">
        <h1 className="font-bold underline">Name</h1>
        <input
          className="rounded-md text-3xl border-0 shadow-md w-1/3"
          type="text"
          placeholder="New name..."
        />
      </div>
      <div className="grid grid-rows-2 grid-cols-1 gap-2 my-auto my-6">
        <h1 className="font-bold underline">Category</h1>
        <select className="rounded-md text-3xl border-0 shadow-md my-auto mr-auto">
          {props.categories.map((category) => (
            <option key={category.id} value={category}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-rows-2 grid-cols-1 gap-2 my-auto my-6">
        <h1 className="font-bold underline">Start date</h1>
        <input
          className="rounded-md text-3xl border-0 shadow-md my-auto mr-auto"
          type="date"
        />
      </div>
      <div className="grid grid-rows-2 grid-cols-1 gap-2 my-auto my-6">
        <h1 className="font-bold underline">End date</h1>
        <input
          className="rounded-md text-3xl border-0 shadow-md my-auto mr-auto"
          type="date"
        />
      </div>
      <div className="m-auto">
        <label className="font-bold underline mr-4">Description</label>
        <Textarea
          className="mt-6 rounded-md text-3xl border-0 shadow-md h-64"
          placeholder="New description..."
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

export default CreateEventPage;
