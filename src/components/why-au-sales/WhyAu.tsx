// <------------------------------- file to show why we require this --------------->

// importing the required modules

const WhyAu = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-8 bg-gray-50">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-8 text-center px-2">
        Why AURUMM - The AU Sales Advantage?
      </h2>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-[90rem] p-4 sm:p-8">
        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-lg p-6 sm:p-8 hover:shadow-xl transition-all duration-700 ease-in-out transform hover:scale-105 hover:translate-y-1 flex flex-col w-full">
          <div className="flex items-center justify-center w-full mb-6">
            <img
              src="/icon_4.62d8bce5.svg"
              alt="AU SALES logo"
              className="w-16 h-16 md:w-20 md:h-20"
            />
          </div>
          <h2 className="font-semibold text-center text-lg md:text-xl mt-4">
            Comprehensive Inventory Management
          </h2>
          <p className="text-gray-700 mt-4 text-sm md:text-base text-center">
            Efficiently track, manage, and optimize your jewellery inventory
            with advanced features tailored for the jewellery industry.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-md rounded-lg p-6 sm:p-8 hover:shadow-xl transition-all duration-700 ease-in-out transform hover:scale-105 hover:translate-y-1 flex flex-col w-full">
          <div className="flex items-center justify-center w-full mb-6">
            <img
              src="/icon_1.5e6099f9.svg"
              alt="AU SALES logo"
              className="w-16 h-16 md:w-20 md:h-20"
            />
          </div>
          <h2 className="font-semibold text-center text-lg md:text-xl mt-4">
            Customer-Centric Approach
          </h2>
          <p className="text-gray-700 mt-4 text-sm md:text-base text-center">
            Deliver exceptional customer experiences through personalized
            services and tailored recommendations, fostering long-term
            relationships.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-md rounded-lg p-6 sm:p-8 hover:shadow-xl transition-all duration-700 ease-in-out transform hover:scale-105 hover:translate-y-1 flex flex-col w-full">
          <div className="flex items-center justify-center w-full mb-6">
            <img
              src="/icon_2.a07dbe9f.svg"
              alt="AU SALES logo"
              className="w-16 h-16 md:w-20 md:h-20"
            />
          </div>
          <h2 className="font-semibold text-center text-lg md:text-xl mt-4">
            Real-Time Analytics
          </h2>
          <p className="text-gray-700 mt-4 text-sm md:text-base text-center">
            Gain valuable insights into sales trends, customer preferences, and
            inventory performance, empowering data-driven decision-making for
            business growth.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white shadow-md rounded-lg p-6 sm:p-8 hover:shadow-xl transition-all duration-700 ease-in-out transform hover:scale-105 hover:translate-y-1 flex flex-col w-full">
          <div className="flex items-center justify-center w-full mb-6">
            <img
              src="/icon_3.0b2e7924.svg"
              alt="AU SALES logo"
              className="w-16 h-16 md:w-20 md:h-20"
            />
          </div>
          <h2 className="font-semibold text-center text-lg md:text-xl mt-4">
            Seamless Integration
          </h2>
          <p className="text-gray-700 mt-4 text-sm md:text-base text-center">
            Integrate seamlessly with existing systems and platforms, ensuring a
            smooth transition and maximizing operational efficiency.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyAu;
