import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Navbar from "./components/navbar/Navbar";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="page mt-28">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<p>Path not resolved</p>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
