import React, { useState } from "react";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

const SearchBar = ({data}) => {
  const navigate = useNavigate();
  const [input, setInput] = useState(data ? data : "");
  const onSearchHandler = (e) => {
    e.preventDefault(); // prevent page reload
    if (input.trim()) {
      // navigate to course list page with query
      navigate("/course-list" + input);
    }
  };

  return (
    <form
      onSubmit={onSearchHandler}
      className="flex items-center bg-white rounded-lg overflow-hidden shadow-md w-full max-w-md mx-auto md:mx-0"
    >
      {/* Icon */}
      <div className="px-3">
        <img
          src={assets.search_icon}
          alt="Search icon"
          className="w-5 h-5 text-gray-500"
        />
      </div>

      {/* Input */}
      <input
        onChange={(e) => setInput(e.target.value)}
        value={input}
        type="text"
        placeholder="Search for courses..."
        className="flex-grow px-2 py-3 text-black outline-none"
      />

      {/* Search Button */}
      <button
        type="submit"
        className="border bg-black border-white text-white px-6 py-3 rounded-lg font-medium"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
