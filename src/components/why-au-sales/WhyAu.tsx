// <------------------------------- file to show why we require this --------------->

// importing the required modules
// import React from "react";

const WhyAu = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-8 bg-gray-50">
      <h2 className="text-3xl font-bold text-blue-800 mb-8">
        Why AURUMM - The AU Sales Advantage?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 w-full max-w-[90rem] p-8">
        <div className="bg-white shadow-md rounded-lg p-8 hover:shadow-xl transition-all duration-700 ease-in-out transform hover:scale-105 hover:translate-y-1 flex flex-col w-full max-w-lg">
          <div className="flex  rounded w-44 space-x-4 h-12 items-center px-4">
            <img
              src="/icon_4.62d8bce5.svg"
              alt="AU SALES logo"
              className="w-20 h-20"
            />
          </div>
          <h2 className="font-semibold mt-4">
            Comprehensive Inventory Management
          </h2>
          <p className="text-gray-700 mb-6 flex-grow mt-6">
            Efficiently track, manage, and optimize your jewellery inventory
            with advanced features tailored for the jewellery industry.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-8 hover:shadow-xl transition-all duration-500 ease-in-out transform hover:scale-105 hover:translate-y-1 flex flex-col w-full max-w-lg">
          <div className="flex  rounded w-44 space-x-4 h-12 items-center px-4">
            <img
              src="/icon_1.5e6099f9.svg"
              alt="AU SALES logo"
              className="w-20 h-20"
            />
          </div>
          <h2 className="font-semibold mt-4">Customer-Centric Approach</h2>
          <p className="text-gray-700 mb-6 flex-grow mt-6">
            Deliver exceptional customer experiences through personalized
            services and tailored recommendations, fostering long-term
            relationships.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-8 hover:shadow-xl transition-all duration-500 ease-in-out transform hover:scale-105 hover:translate-y-1 flex flex-col w-full max-w-lg">
          <div className="flex  rounded w-44 space-x-4 h-12 items-center px-4">
            <img
              src="/icon_2.a07dbe9f.svg"
              alt="AU SALES logo"
              className="w-20 h-20"
            />
          </div>
          <h2 className="font-semibold mt-4">Real-Time Analytics</h2>
          <p className="text-gray-700 mb-6 flex-grow mt-6">
            Gain valuable insights into sales trends, customer preferences, and
            inventory performance, empowering data-driven decision-making for
            business growth.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-8 hover:shadow-xl transition-all duration-500 ease-in-out transform hover:scale-105 hover:translate-y-1 flex flex-col w-full max-w-lg">
          <div className="flex  rounded w-44 space-x-4 h-12 items-center px-4">
            <img
              src="/icon_3.0b2e7924.svg"
              alt="AU SALES logo"
              className="w-20 h-20"
            />
          </div>
          <h2 className="font-semibold mt-4">Seamless Integration</h2>
          <p className="text-gray-700 mb-6 flex-grow mt-6">
            Integrate seamlessly with existing systems and platforms, ensuring a
            smooth transition and maximizing operational efficiency.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyAu;
