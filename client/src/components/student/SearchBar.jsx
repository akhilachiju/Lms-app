import React, { useState } from "react";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ data }) => {
  const navigate = useNavigate();
  const [input, setInput] = useState(data ? data : "");

  const onSearchHandler = (e) => {
    e.preventDefault();
    if (input.trim()) {
      navigate("/course-list" + input);
    }
  };

  return (
    <form
      onSubmit={onSearchHandler}
      className="flex items-center bg-white rounded-full overflow-hidden shadow-md w-11/12 sm:w-full max-w-md mx-auto md:mx-0"
    >
      {/* Icon */}
      <div className="px-2 sm:px-3">
        <img
          src={assets.search_icon}
          alt="Search icon"
          className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500"
        />
      </div>

      {/* Input */}
      <input
        onChange={(e) => setInput(e.target.value)}
        value={input}
        type="text"
        placeholder="Search for courses..."
        className="flex-grow px-1.5 py-1.5 xs:px-2 xs:py-2 sm:px-3 sm:py-3 text-xs xs:text-sm sm:text-base text-black outline-none"
      />

      {/* Search Button */}
      <button
        type="submit"
        className="border bg-black border-white text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full font-medium text-sm sm:text-base cursor-pointer"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
