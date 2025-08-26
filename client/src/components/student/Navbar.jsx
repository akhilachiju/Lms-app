import React from "react";
import { assets } from "../../assets/assets";
import { Link, useLocation } from "react-router-dom";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";

const Navbar = () => {
  const location = useLocation();
  const isCourseListPage = location.pathname.includes("/course-list");
  const { openSignIn } = useClerk();
  const { user } = useUser();

  return (
    <div
      className={`flex items-center justify-between px-2 sm:px-8 md:px-12 lg:px-20 py-2 ${
        isCourseListPage ? "bg-white" : "bg-black"
      }`}
    >
      {/* Logo */}
      <img
        src={assets.logo}
        alt="Logo"
        className="w-28 lg:w-32 cursor-pointer scale-75"
      />

      {/* Desktop screen */}
      <div className="hidden md:flex items-center gap-5 text-gray-500">
        <div className="flex items-center gap-2">
          {user && (
            <>
              <button>Become Educator</button>
              <span className="text-gray-400">|</span>
              <Link to="/my-enrollments">My Enrollments</Link>
            </>
          )}
        </div>
        {user ? (
          <UserButton />
        ) : (
          <button
            onClick={() => openSignIn()}
            className="bg-white text-black px-5 py-3 rounded-full"
          >
            Create Account
          </button>
        )}
      </div>

      {/* Mobile screen */}
      <div className="md:hidden flex items-center gap-2 sm:gap-3 text-gray-500">
        <div className="flex items-center gap-1 sm:gap-2 max-sm:text-xs">
          {user && (
            <>
              <button>Become Educator</button>
              <span className="text-gray-400">|</span>
              <Link to="/my-enrollments">My Enrollments</Link>
            </>
          )}
        </div>
        {user ? (
          <UserButton />
        ) : (
          <button onClick={() => openSignIn()}>
            <img
              src={assets.user_icon}
              alt="User icon"
              className="w-8 h-8 cursor-pointer"
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
