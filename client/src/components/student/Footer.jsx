import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import AppContext from "../../context/AppContext";

const Footer = () => {
  const { navigate } = useContext(AppContext);

  return (
    <footer className="bg-black text-white px-8 md:px-20 py-12">
      <div className="grid md:grid-cols-3 gap-12">
        {/* Left */}
        <div>
          {/* Logo */}
          <div
            onClick={() => navigate("/")}
            className="flex items-center cursor-pointer mb-4"
          >
            <img src={assets.logo} alt="Logo" className="w-10 h-10 mr-2" />
          </div>

          {/* Description */}
          <p className="max-w-sm text-sm leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text.
          </p>
        </div>

        {/* Middle */}
        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Privacy policy
              </a>
            </li>
          </ul>
        </div>

        {/* Right */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            Subscribe to our newsletter
          </h3>
          <p className="text-sm mb-4">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <form className="flex items-center bg-white rounded-full overflow-hidden shadow-md w-full max-w-md">
            {/* Input */}
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-3 text-black text-sm outline-none"
              required
            />

            {/* Subscribe Button */}
            <button
              type="submit"
              className="border bg-black border-white text-white px-6 py-3 rounded-full font-medium"
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
