// <------------------------------- file to show the component for support ------------------>

// importing the required modules
import { FiUsers } from "react-icons/fi";
import { MdDownload } from "react-icons/md";
import { FaChartLine } from "react-icons/fa";

const Help = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-8 bg-gray-50">
      <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">
        This is The Future of Jewellery Store Management
      </h2>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-[90rem] p-4 sm:p-8">
        {[
          {
            img: "/icon_4.62d8bce5.svg",
            title: "All-Round Assistance",
            description:
              "Crafted for excellence, AURUMM is a premium end-to-end software suite that is designed for jewellery stores of all sizes.",
          },
          {
            img: "/icon_1.5e6099f9.svg",
            title: "Relationship Management",
            description:
              "Stay tuned with your customers and vendors to keep their data safe and sound - with AURUMM, anything is possible!",
          },
          {
            img: "/icon_2.a07dbe9f.svg",
            title: "Technical Support",
            description:
              "Our dedicated team of professionals are available anytime throughout the year to resolve all your queries!",
          },
          {
            img: "/icon_3.0b2e7924.svg",
            title: "Stay Ahead",
            description:
              "We're always keeping up with the latest trends and updating our platforms - so you'll always have the edge over your competitors!",
          },
        ].map((card, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-all duration-500 ease-in-out transform hover:scale-105 hover:translate-y-1 flex flex-col items-start"
          >
            <div className="flex items-center rounded w-20 h-20 mb-4">
              <img
                src={card.img}
                alt={`${card.title} logo`}
                className="w-20 h-20"
              />
            </div>
            <h2 className="font-semibold mb-2">{card.title}</h2>
            <p className="text-gray-700 flex-grow">{card.description}</p>
          </div>
        ))}
      </div>

      {/* Statistics Section */}
      <div className="flex flex-wrap bg-gray-200 justify-center py-6 gap-12 w-full max-w-[90rem]">
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
