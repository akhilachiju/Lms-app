import React from "react";
import { assets } from "../../assets/assets";

const CallToAction = () => {
  return (
    <section className="py-12 bg-white text-center">
      <div className="max-w-4xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
          Take the Next Step in Your Learning Journey
        </h2>

        {/* Subheading */}
        <p className="text-gray-600 mb-12">
          Join thousands of learners who are upgrading their skills and building
          brighter futures. Start your journey today!
        </p>

        {/* CTA Buttons Wrapper */}
        <div className="flex flex-wrap justify-center items-center gap-4">
          {/* CTA Link */}
          <a
            href="#"
            className="inline-block border bg-black border-white text-white px-6 py-3 rounded-full font-medium"
          >
            Get Started
          </a>

          {/* Learn More Button */}
          <button className="flex items-center gap-2 border px-6 py-3 rounded-full font-medium cursor-pointer">
            Learn more
            <img src={assets.arrow_icon} alt="arrow_icon" className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
