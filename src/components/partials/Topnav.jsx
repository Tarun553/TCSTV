import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../utils/Axios";
import noimage from "/noimage.png";

const Topnav = () => {
  const [query, setquery] = useState(""); // State for user input
  const [searches, setsearches] = useState([]); // State for search results

  // Function to fetch search results
  const getserches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setsearches(data.results); // Set the search results in state
    } catch (error) {
      console.log(error); // Log any errors that occur during the fetch
    }
  };

  // Effect to run whenever the query changes
  useEffect(() => {
    if (query.length > 0) {
      getserches(); // Fetch search results
    } else {
      setsearches([]); // Clear the search results when query is empty
    }
  }, [query]); // Dependency array: re-run effect when 'query' changes

  return (
    <div className="w-full h-[10vh] flex justify-start ml-[15%] items-center relative">
      <i className="ri-search-line text-3xl text-zinc-400"></i>
      <input
        onChange={(e) => setquery(e.target.value)} // Set query when user types
        value={query} // Controlled input
        className="w-[50%] mx-10 p-5 text-xl outline-none text-white border-none bg-transparent"
        type="text"
        placeholder="Search anything"
      />
      {query.length > 0 && (
        <i
          className="ri-close-fill text-3xl text-zinc-400"
          onClick={() => setquery("")} // Clear query when close button is clicked
        ></i>
      )}

      {/* Conditional rendering of search results */}
      {query.length > 0 && (
        <div className="absolute w-[50%] max-h-[50vh] bg-zinc-200 top-[100%] left-[5%] overflow-auto rounded">
          {searches.map((s, i) => (
            <Link
              key={i}
              className="inline-block w-[100%] p-10  justify-start border-b-2 text-zinc-600 font-semibold hover:text-zinc-950 hover:bg-zinc-300 duration-300 border-zinc-100 items-center"
            >
              {/* Display image if available */}
              <img
                src={
                      s.backdrop_path || s.profile_path
                        ? `https://image.tmdb.org/t/p/original/${
                            s.backdrop_path || s.profile_path
                          }`
                        : noimage
                        }
                alt="" 
                className="w-[10vh] h-[10vh] object-cover rounded shadow-xl mr-4"
              />
              <span>
                {s.name || s.title || s.original_name || s.original_title}
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Topnav;
