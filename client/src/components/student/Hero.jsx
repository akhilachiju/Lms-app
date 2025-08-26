import React from "react";
import heroImage from "../../assets/hero_image.svg";
import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <section className="bg-black text-white">
      <div className="container mx-auto px-10 py-10 flex flex-col-reverse md:flex-row items-center justify-between">
        {/* Text content */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            Learn Anything, Anytime
          </h1>
          <p className="text-gray-300 text-lg">
            Access hundreds of courses and become an expert in your field. Start
            your journey today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"></div>
          <SearchBar />
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end mb-8 md:mb-0">
          <img
            src={heroImage}
            alt="Learning illustration"
            className="w-1/2 transition-transform duration-500 ease-in-out hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
