import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { useLocation } from "react-router-dom";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import AppContext from "../../context/AppContext";

const Navbar = () => {
  const { navigate, isEducator } = useContext(AppContext);
  const location = useLocation();
  const isCourseListPage = location.pathname.includes("/course-list");
  const { openSignIn } = useClerk();
  const { user } = useUser();

  return (
    <div
      className={`flex items-center justify-between px-4 sm:px-6 md:px-10 lg:px-20 py-2 ${
        isCourseListPage ? "bg-white" : "bg-black"
      }`}
    >
      {/* Logo */}
      <img
        onClick={() => navigate("/")}
        src={assets.logo}
        alt="Logo"
        className="w-18 sm:w-20 md:w-24 cursor-pointer"
      />

      {/* Menu */}
      <div className="flex items-center gap-3 sm:gap-5">
        {user && (
          <div className="flex items-center text-gray-500">
            <button
              onClick={() => navigate("/educator")}
              className="transform transition duration-200 hover:scale-105 text-xs sm:text-sm md:text-base cursor-pointer"
            >
              {isEducator ? "Educator Dashboard" : "Become Educator"}
            </button>
            <span className="text-gray-400 mx-2 sm:mx-4">|</span>
            <button
              onClick={() => navigate("/my-enrollments")}
              className="transform transition duration-200 hover:scale-105 text-xs sm:text-sm md:text-base cursor-pointer"
            >
              My Enrollments
            </button>
          </div>
        )}

        {/* User Button / Sign In */}
        {user ? (
          <UserButton />
        ) : (
          <button onClick={() => openSignIn()} className="ml-2 sm:ml-4">
            <img
              src={assets.user_icon}
              alt="User icon"
              className="w-6 sm:w-8 h-6 sm:h-8 cursor-pointer"
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
