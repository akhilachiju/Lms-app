import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import AppContext from "../../context/AppContext";

const Footer = () => {
  const { navigate } = useContext(AppContext);

  return (
    <footer className="bg-black text-white px-6 sm:px-12 md:px-12 lg:px-20 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left */}
        <div className="text-center lg:text-left">
          <div
            onClick={() => {
              navigate("/");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex justify-center lg:justify-start items-center cursor-pointer mb-6 lg:mb-8"
          >
            <img
              src={assets.logo}
              alt="Logo"
              className="w-14 h-14 lg:w-16 lg:h-16 mr-3"
            />
          </div>

          <p className="max-w-sm mx-auto lg:mx-0 text-sm leading-relaxed text-gray-300">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text.
          </p>
        </div>

        {/* Middle */}
        <div className="text-center lg:text-left">
          <h3 className="text-white font-semibold mb-6 lg:mb-8">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white text-gray-300">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white text-gray-300">
                Contact us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white text-gray-300">
                Privacy policy
              </a>
            </li>
          </ul>
        </div>

        {/* Right */}
        <div className="text-center lg:text-left">
          <h3 className="text-white font-semibold mb-4 lg:mb-8">
            Subscribe to our newsletter
          </h3>
          <p className="text-sm text-gray-300 mb-4">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <form className="flex items-center bg-white rounded-full shadow-md w-11/12 sm:w-full max-w-lg mx-auto xl:mx-0 overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow min-w-0 px-4 py-3 text-sm sm:text-base text-black outline-none"
              required
            />
            <button
              type="submit"
              className="border bg-black border-white text-white px-5 py-3 rounded-full font-medium text-sm sm:text-base flex-shrink-0 cursor-pointer"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 text-center mt-10 pt-4 text-xs text-gray-500">
        Copyright 2025 © LMS. All Right Reserved.
      </div>
    </footer>
  );
};

export default Footer;
