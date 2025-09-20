import React from "react";
import { assets } from "../../assets/assets";

const SearchBar = ({ value, onChange }) => {
  return (
    <form
      className="flex items-center bg-white rounded-full overflow-hidden shadow-md 
                 w-11/12 sm:w-full max-w-md mx-auto md:mx-0 relative"
    >
      {/* Input */}
      <input
        value={value}
        onChange={onChange}
        type="text"
        placeholder="Search for courses..."
        className="flex-grow px-2 py-2 xs:px-3 xs:py-2.5 sm:px-4 sm:py-3 
                   text-sm xs:text-base sm:text-base text-black outline-none"
      />

      {/* Clear (X) Button */}
      {value && (
        <button
          type="button"
          onClick={() => onChange({ target: { value: "" } })}
          className="absolute right-12 xs:right-14 sm:right-14 text-gray-400 hover:text-black"
        >
          <img src={assets.cross_icon} alt="Cross icon" />
        </button>
      )}

      {/* Search Icon */}
      <div
        className="flex items-center justify-center 
                   w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 
                   bg-black rounded-full mr-0.5 sm:mr-1.5"
      >
        <img
          src={assets.search_icon}
          alt="Search icon"
          className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 filter brightness-0 invert"
        />
      </div>
    </form>
  );
};

export default SearchBar;
