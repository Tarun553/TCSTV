import React, { useEffect, useState } from "react";
import Sidenavbar from "./partials/Sidenavbar";
import Topnav from "./partials/Topnav";
import axios from "../utils/Axios";
import Header from "./partials/Header";
import { data } from "react-router-dom";
import HorizontalCards from "./partials/HorizontalCards";
import Dropdown from "./partials/Dropdown";
import Loading from "./Loading";

const Home = () => {
  document.title = "TCSTV | Homepage";

  const [wallpaper, setWallpaper] = useState(null);
  const [trending, setTrending] = useState(null);
  const [category, setCategory] = useState("all");

  const getHeaderwallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      // Check if data and results exist
      if (data && data.results && data.results.length > 0) {
        // Select random data
        let randomData =
          data.results[Math.floor(Math.random() * data.results.length)];

        setWallpaper(randomData);
      }
    } catch (error) {
      console.log("Error fetching wallpaper:", error);
    }
  };

  const getTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/day`);
      setTrending(data.results);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    getHeaderwallpaper();
    getTrending();
  }, [category]);

  return wallpaper && trending ? (
    <>
      <Sidenavbar />
      <div className="w-[80%] h-full overflow-auto overflow-x-hidden">
        <Topnav />
        <Header
          backdrop_path={wallpaper.backdrop_path}
          profile_path={wallpaper.profile_path}
          title={
            wallpaper.original_title ||
            wallpaper.original_name ||
            wallpaper.title
          }
          overview={wallpaper.overview}
          release_date={wallpaper.release_date}
          media={wallpaper.media_type}
        />

        <div className=" flex justify-between p-5">
          <h1 className=" text-zinc-400 text-3xl font-semibold">Trending</h1>

          <Dropdown
            title="Sort By"
            options={["TV", "Movie", "All"]}
            func={(e) => setCategory(e.target.value)}
            value={category}
          />
        </div>

        <HorizontalCards
          data={trending}
          backdrop_path={trending.backdrop_path}
          poster_path={trending.poster_path}
        
        />
      </div>
    </>
  ) : (
    <div className="w-full h-screen bg-zinc-900 text-white flex justify-center items-center text-3xl">
      <Loading/>
    </div>
  );
};

export default Home;
