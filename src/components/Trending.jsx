import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./partials/Topnav";
import Dropdown from "./partials/Dropdown";
import axios from "../utils/Axios";
import Cards from "./partials/Cards";
import Loading from "./Loading";

const Trending = () => {
    const [category, setCategory] = useState("all");
    const [duration, setDuration] = useState("day");
    const [trending, settrending] = useState([]);

    const getTrending = async () => {
        try {
            const { data } = await axios.get(
                `/trending/${category}/${duration}`
              );
          settrending(data.results);
        } catch (error) {
          console.log("Error:", error);
        }
      };
      useEffect(() => {
        getTrending();
      }, [category, duration])
  const navigate = useNavigate();
  return trending.length > 0 ? (
    <>
    <div className="w-screen h-screen overflow-hidden overflow-y-auto px-[3%]">

      <div className=" flex items-center w-full">
        <h1 className=" w-[20%] font-semibold text-2xl text-zinc-400">
          <i
            onClick={() => navigate(-1)}
            class="ri-arrow-left-line hover:text-purple-600"
            ></i>
          Trending
        </h1>
        <Topnav/>
        <Dropdown title="Categories" options={["Movie", "TV", "All"]} func={(e) => setCategory(e.target.value)}  />
        <div className=" w-[2%]"></div>
        <Dropdown title="Duration" options={["Week", "Day"]} func={(e) => setDuration(e.target.value)}  />
      </div>

         <Cards data={trending} title={category} />

    </div>
  
            </>
  ): <Loading />
};

export default Trending;
