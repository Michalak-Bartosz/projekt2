import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import EventPage from "./components/EventPage";
import { Events } from "./loadData/Events";
import { Cateogries } from "./loadData/Categories";

function App() {
  const [events, setEvents] = useState(Events);
  const [categories, setCategories] = useState(Cateogries);

  return (
    <>
      <Navbar />
      <div
        id="page"
        className="static m-auto p-8 mt-28 h-full w-full text-black font-eduTasBeginner"
      >
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                events={events}
                setEvents={setEvents}
                categories={categories}
                setCategorie={setCategories}
              />
            }
          />
          <Route
            path="/event/*"
            element={
              <EventPage
                events={events}
                setEvents={setEvents}
                categories={categories}
                setCategories={setCategories}
              />
            }
          />
          <Route path="*" element={<p>Path not resolved</p>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
