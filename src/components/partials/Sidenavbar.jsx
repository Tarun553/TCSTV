import React from "react";
import { Link } from "react-router-dom";

const Sidenavbar = () => {
  return (
    <div className="w-[20%] h-full border-r-2 border-zinc-400 p-10 ">
      <h1 className=" text-2xl font-bold text-white">
        <i class="text-[#7036A8BF] ri-tv-fill mr-2"></i>
        <span className=" text-2xl">TCSTV.</span>
      </h1>
      <nav className=" text-zinc-400 gap-3 text-xl flex flex-col">
        <h1 className=" text-white font-semibold text-xl mt-10 mb-5">
          New Feeds
        </h1>
        <Link to="/trending" className=" hover:bg-[#7036A8BF] p-5 text-white rounded-lg duration-300"><i class="ri-fire-fill"></i> Trending</Link>
        <Link className=" hover:bg-[#7036A8BF] p-5 text-white rounded-lg duration-300"><i class="ri-bard-fill mr-1.5"></i> Popular</Link>
        <Link className=" hover:bg-[#7036A8BF] p-5 text-white rounded-lg duration-300"><i class="ri-movie-2-fill"></i> Movies</Link>
        <Link className=" hover:bg-[#7036A8BF] p-5 text-white rounded-lg duration-300"><i class="ri-tv-2-fill"></i> Tv Shows</Link>
        <Link className=" hover:bg-[#7036A8BF] p-5 text-white rounded-lg duration-300"><i class="ri-team-fill mr-1.5"></i> People</Link>
      </nav>
      <hr className=" border-none h-[1px] bg-zinc-400" />
      <nav className=" text-zinc-400 gap-3 text-xl flex flex-col">
        <h1 className=" text-white font-semibold text-xl mt-10 mb-5">
          Website Information
        </h1>
        <Link className=" hover:bg-[#7036A8BF] p-5 text-white rounded-lg duration-300"><i class="ri-information-fill"></i> About</Link>
        <Link className=" hover:bg-[#7036A8BF] p-5 text-white rounded-lg duration-300"><i class="ri-phone-fill"></i> Contact Us</Link>
       
      </nav>
    </div>
  );
};

export default Sidenavbar;
