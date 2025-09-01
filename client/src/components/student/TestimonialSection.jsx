import React from "react";
import { assets, dummyTestimonial } from "../../assets/assets";

const TestimonialSection = () => {
  return (
    <section className="py-12 md:py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3">
          Testimonials
        </h2>
        <p className="text-gray-600 mb-10 sm:mb-12 max-w-2xl md:max-w-3xl mx-auto text-sm sm:text-base">
          Hear from our learners as they share their journeys of transformation,
          success, and how our platform has made a difference in their lives.
        </p>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
          {dummyTestimonial.map((testimonial, index) => (
            <div
              key={index}
              className="w-full sm:w-[48%] lg:w-[30%] bg-white rounded-lg shadow-md overflow-hidden flex flex-col transition hover:shadow-lg"
            >
              {/* Header */}
              <div className="bg-gray-200 p-4 sm:p-6 flex items-center gap-3 sm:gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                />
                <div className="text-left">
                  <h3 className="font-semibold text-base sm:text-lg text-black">
                    {testimonial.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Body */}
              <div className="p-4 sm:p-6 flex flex-col flex-grow text-left">
                {/* Rating */}
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <img
                      key={i}
                      src={
                        i < Math.round(testimonial.rating)
                          ? assets.star
                          : i < testimonial.rating
                          ? assets.star_half
                          : assets.star_blank
                      }
                      alt="star"
                      className="w-4 h-4 sm:w-5 sm:h-5 mr-1"
                    />
                  ))}
                </div>

                {/* Feedback */}
                <p className="text-gray-700 text-sm sm:text-base flex-grow mb-4 leading-relaxed">
                  {testimonial.feedback}
                </p>

                {/* Read More */}
                <a
                  href="#"
                  className="text-blue-600 text-sm sm:text-base font-medium hover:underline mt-auto"
                >
                  Read more
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
