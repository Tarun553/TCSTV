import React from "react";
import Dropdown from "../partials/Dropdown";

const HorizontalCards = ({ data}) => {
  console.log(data);

  return (
  <>

      <div className=" w-100% mb-5 flex overflow-y-hidden  ">
        {data.map((d, i) => (
            <div key={i} className=" min-w-[15%] h-full  bg-zinc-900 mr-5 mb-5">
            <img
              className="w-full h-[55%] object-cover"
              src={`https://image.tmdb.org/t/p/original/${
                  d.poster_path || d.background_path
                }`}
                alt=""
                />

            <div className=" text-white p-3 h-[45%]">
              <h1 className=" text-xl font-semibold mt-3 mb-3">
                {data.title || d.original_name || d.original_title || d.name}
              </h1>

              <p className=" mt-3 mb-3">
                {d.overview.slice(0, 50) + "...more" || "No Overview"}
              </p>
            </div>
          </div>
        ))}
      </div>
      </>
  );
};

export default HorizontalCards;
