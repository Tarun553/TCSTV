import React from "react";
import { Link } from "react-router-dom";

const Header = ({
  backdrop_path,
  profile_path,
  overview,
  title,
  release_date,
  media,
}) => {
  const imageUrl = backdrop_path
    ? `https://image.tmdb.org/t/p/original/${backdrop_path}`
    : profile_path
    ? `https://image.tmdb.org/t/p/original/${profile_path}`
    : ""; // Fallback in case both are missing

  return (
    <div
      style={{
        background: imageUrl
          ? `linear-gradient(rgba(0,0,0,.4),rgba(0,0,0,.7),rgba(0,0,0,.9)), url(${imageUrl})`
          : "linear-gradient(rgba(0,0,0,.4),rgba(0,0,0,.7),rgba(0,0,0,.9))", // Fallback to gradient if no image
        minHeight: "60vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full h-[50vh] flex flex-col justify-end items-start p-[5%]"
    >
      <h1 className=" text-5xl font-black text-white ">
        {title || "No Title"}
      </h1>
      <p className="w-[50%] mt-4 text-white">
        {overview.slice(0, 200) + "...more" || "No Overview"}
      </p>
      <p className="text-white mt-4">
        <i class="ri-megaphone-fill text-yellow-400 mr-1"></i>
        {release_date || "No Release Date"}
        <i class="ri-album-fill text-yellow-400 mr-1 ml-5"></i>
        {media.toUpperCase() || "No Media"}
      </p>
      <Link className=" p-4 rounded text-white font-semibold mt-5 bg-purple-600">Watch Trailer</Link>
    </div>
  );
};

export default Header;
