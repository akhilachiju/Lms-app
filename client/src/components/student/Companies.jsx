import React from "react";
import { assets } from "../../assets/assets";

const Companies = () => {
  const logos = [
    { src: assets.paypal_logo, alt: "PayPal" },
    { src: assets.accenture_logo, alt: "Accenture" },
    { src: assets.adobe_logo, alt: "Adobe" },
    { src: assets.microsoft_logo, alt: "Microsoft" },
    { src: assets.walmart_logo, alt: "Walmart" },
  ];

  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-600 mb-10 sm:mb-12 max-w-2xl md:max-w-3xl mx-auto text-sm sm:text-base">
          Trusted by learners from top companies
        </p>

        <div className="relative w-full overflow-hidden">
          {/* inner row: whitespace-nowrap prevents wrapping; animate-marquee does the animation */}
          <div className="flex items-center gap-16 whitespace-nowrap animate-marquee">
            {/* first set */}
            {logos.map((l, i) => (
              <img
                key={`a-${i}`}
                src={l.src}
                alt={l.alt}
                className="h-10 flex-shrink-0"
              />
            ))}

            {/* duplicate set for seamless loop */}
            {logos.map((l, i) => (
              <img
                key={`b-${i}`}
                src={l.src}
                alt={l.alt}
                className="h-10 flex-shrink-0"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Companies;
