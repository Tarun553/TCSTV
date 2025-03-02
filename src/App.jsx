import React from "react";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Trending from "./components/Trending";


const App = () => {
  return (
    <div className=" w-screen h-screen bg-[#1F1E24] flex">
      <Routes>
      <Route path="/" element={<Home />} />
      //trendingpath 
      <Route path="/trending" element={<Trending />} />
      </Routes>
    </div>
  );
};

export default App;
