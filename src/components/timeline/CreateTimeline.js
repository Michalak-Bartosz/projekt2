import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateTimeline(props) {
  const navigate = useNavigate();
  const [name, setName] = useState();
  const [newTimeline, setNewTimeline] = useState({
    id: null,
    name: null,
  });

  const saveNewTimeline = () => {
    let id = Math.max(...props.timelines.map((e) => e.id)) + 1;
    setNewTimeline({
      id: id,
      name: name,
    });
  };

  useEffect(() => {
    if (newTimeline.id !== null) {
      props.setTimelines((prevTimelines) => [...prevTimelines, newTimeline]);
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newTimeline]);
  return (
    <div className="block text-center px-10">
      <div>
        <h1 className="text-6xl font-lobster font-bold m-auto w-max px-10 py-5 mb-10 text-center border-8 border-black border-dotted rounded-lg">
          Add New Timeline
        </h1>
      </div>

      <div className="w-1/3 m-auto text-4xl">
        <div className="grid grid-rows-2 grid-cols-1 gap-4">
          <h1 className="font-bold mr-4 underline decoration-dotted">Name</h1>
          <input
            id="name-input"
            className="rounded-md text-3xl border-0 shadow-md"
            type="text"
            placeholder="New name..."
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="m-auto rounded-lg border-2 border-black my-6" />
        <button
          className="border-2 border-black px-6 py-2 rounded-md bg-cyan-600 font-bold shadow-md hover:bg-cyan-500 hover:shadow-lg"
          onClick={saveNewTimeline}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default CreateTimeline;
