import React from "react";
import { assets } from "../../assets/assets";

const Companies = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-600 mb-12">
          Trusted by learners from top companies
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center justify-center">
          <img
            src={assets.accenture_logo}
            alt="Accenture"
            className="h-10 mx-auto"
          />
          <img
            src={assets.microsoft_logo}
            alt="Microsoft"
            className="h-10 mx-auto"
          />
          <img src={assets.adobe_logo} alt="Adobe" className="h-10 mx-auto" />
          <img
            src={assets.walmart_logo}
            alt="Walmart"
            className="h-10 mx-auto"
          />
          <img src={assets.paypal_logo} alt="PayPal" className="h-10 mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default Companies;
