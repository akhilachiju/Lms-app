import React from "react";
import right from "../../assets/right.png";
import heroImage from "../../assets/hero_image.svg";
import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-black via-indigo-700 to-purple-700 text-white py-20 px-6 sm:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
            Empower Your Career Growth with{" "}
            <span className="text-yellow-300">Learning</span>
          </h1>
          <p className="text-gray-200 text-base sm:text-lg mb-8 max-w-xl mx-auto lg:mx-0">
            Access expert-led courses and video lessons designed to help you
            build new skills, grow professionally, and stay ahead in your career
            journey.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4">
            <a
              href="#courses"
              className="inline-flex items-center justify-center gap-2 border border-white bg-white text-black px-6 py-3 rounded-full font-medium shadow hover:scale-105 transition"
            >
              Get Started
            </a>

            <button className="inline-flex items-center justify-center gap-2 border border-white text-white px-6 py-3 rounded-full font-medium shadow hover:scale-105 transition">
              Learn More
              <img
                src={right}
                alt="arrow_icon"
                className="w-4 h-4"
              />
            </button>
          </div>
        </div>

        {/* Right Side Illustration */}
        <div className="flex justify-center lg:justify-end">
          <img
            src={heroImage} // replace with your illustration
            alt="Learning Illustration"
            className="w-full max-w-md lg:max-w-lg drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
