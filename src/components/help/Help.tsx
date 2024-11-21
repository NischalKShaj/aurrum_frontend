// <------------------------------- file to show the component for support ------------------>

// importing the required modules
import { FiUsers } from "react-icons/fi";
import { MdDownload } from "react-icons/md";
import { FaChartLine } from "react-icons/fa";

const Help = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-8 bg-gray-50">
      <h2 className="text-3xl font-bold text-blue-800 mb-8">
        This is The Future of Jewellery Store Management
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
          <h2 className="font-semibold mt-4">All-Round Assistance</h2>
          <p className="text-gray-700 mb-6 flex-grow mt-6">
            Crafted for excellence, AURUMM is a premium end-to-end software
            suite that is designed for jewellery stores of all sizes.
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
          <h2 className="font-semibold mt-4">Relationship Management</h2>
          <p className="text-gray-700 mb-6 flex-grow mt-6">
            Stay tuned with your customers and vendors to keep their data safe
            and sound - with AURUMM, anything is possible!
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
          <h2 className="font-semibold mt-4">Technical Support</h2>
          <p className="text-gray-700 mb-6 flex-grow mt-6">
            Our dedicated team of professionals are available anytime throughout
            the year to resolve all your queries!
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
          <h2 className="font-semibold mt-4">Stay Ahead</h2>
          <p className="text-gray-700 mb-6 flex-grow mt-6">
            We&apos;re always keeping up with the latest trends and updating our
            platforms - so you'll always have the edge over your competitors!
          </p>
        </div>
      </div>
      <div className="flex bg-gray-200 w-[1000px] justify-center py-6 gap-24">
        <div className="flex flex-col items-center">
          <FiUsers size={40} className="text-blue-800 mb-2" />
          <h2 className="text-3xl font-bold text-blue-800">50+</h2>
          <p className="text-gray-700">Clients</p>
        </div>
        <div className="flex flex-col items-center">
          <MdDownload size={40} className="text-blue-800 mb-2" />
          <h2 className="text-3xl font-bold text-blue-800">10K+</h2>
          <p className="text-gray-700">Downloads</p>
        </div>
        <div className="flex flex-col items-center">
          <FaChartLine size={40} className="text-blue-800 mb-2" />
          <h2 className="text-3xl font-bold text-blue-800">72%</h2>
          <p className="text-gray-700">Client Revenue Increase</p>
        </div>
      </div>
    </div>
  );
};

export default Help;
