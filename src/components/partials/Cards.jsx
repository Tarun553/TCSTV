import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ data, title }) => {
  return (
    <div className="flex flex-wrap gap-3.5 w-full">
      {data.map((c, i) => (
        <Link className=" shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] w-[25vh] mr-[5%] mb-[5%]" key={i}>
          <img
            className=" h-[40vh] object-cover"
            src={`https://image.tmdb.org/t/p/original/${
              c.backdrop_path || c.data.profile_path
            }`}
            alt=""
          />
          <h1 className=" text-xl text-zinc-300 mt-3 font-semibold">
          {c.name || c.original_name || c.original_title || c.title}

          </h1>
        </Link>
      ))}
    </div>
  );
};

export default Cards;
