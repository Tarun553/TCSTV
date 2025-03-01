import React from "react";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className=" w-screen h-screen bg-[#1F1E24] flex">
      <Routes>
      <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
