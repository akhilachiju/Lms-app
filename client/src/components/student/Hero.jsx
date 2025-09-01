import React from "react";
import heroImage from "../../assets/hero_image.svg";
import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <section className="bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 py-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-8">
        
        {/* Text content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-5">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">
            Learn Anything, Anytime
          </h1>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-md mx-auto lg:mx-0">
            Access hundreds of courses and become an expert in your field. Start
            your journey today!
          </p>

          {/* SearchBar */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start w-full">
            <SearchBar className="w-full sm:w-auto" />
          </div>
        </div>

        {/* Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src={heroImage}
            alt="Learning illustration"
            className="w-3/4 sm:w-2/3 max-w-xs sm:max-w-sm md:max-w-md transition-transform duration-500 ease-in-out hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
