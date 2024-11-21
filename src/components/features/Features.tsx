// <---------------------------- files to show the features of the application ----------------->

// importing the required modules
import { useEffect, useState } from "react";
import { AiOutlineCloud } from "react-icons/ai";
import {
  FaPiggyBank,
  FaDatabase,
  FaFileInvoice,
  FaDollarSign,
  FaChartBar,
} from "react-icons/fa";

const Features = () => {
  const images = [
    "/featuresimg.40ecab2c.svg",
    "/Report&Dashboard.bf71cc14.svg",
    "/featuresimg.40ecab2c.svg",
    "/Estimation & Billing.a551ded4.svg",
    "/Cost_Management.4f898207.svg",
    "/Report&Dashboard.bf71cc14.svg",
  ];

  const subtext = [
    "Go digital and stay ahead with our all-round cloud support services",
    "Give your customers a comprehensive savings scheme management experience.",
    "All your data - accessible anywhere, anytime. Organised in the easiest manner possible.All your data - accessible anywhere, anytime. Organised in the easiest manner possible.",
    "Go digital and stay ahead with our all-round cloud support services.",
    "Keeping track of your expenses has never been easier.",
    "Automated reports for actionable insights - managing your numbers is simple and easy!",
  ];

  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );
  const [selectedSubText, setSelectedSubText] = useState<number | null>(null);

  useEffect(() => {
    setSelectedImageIndex(0);
    setSelectedSubText(0);
  }, []);

  // for updating the image and the sub text
  const handleClick = (index: number) => {
    setSelectedImageIndex(index);
    setSelectedSubText(index);
  };

  const featureIcons = [
    <AiOutlineCloud key="cloud" size={32} />,
    <FaPiggyBank key="piggy" size={32} />,
    <FaDatabase key="database" size={32} />,
    <FaFileInvoice key="invoice" size={32} />,
    <FaDollarSign key="dollar" size={32} />,
    <FaChartBar key="chart" size={32} />,
  ];

  return (
    <div>
      <h1 className="text-3xl mt-8 font-bold text-blue-800 mb-8">
        Growth with AURUMM:
        <br /> Your Partner in Success!
      </h1>

      <div className="flex gap-6">
        <div className="flex flex-col gap-4">
          {[
            "Cloud Support",
            "Savings Scheme Management",
            "Data Management",
            "Estimation & Billing",
            "Cost Management",
            "Reporting & Dashboard",
          ].map((feature, index) => (
            <div
              key={index}
              onClick={() => handleClick(index)}
              className="cursor-pointer p-4 bg-gray-100 shadow-lg rounded-lg transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex items-center gap-2">
                {/* Icon with gradient outline */}
                <div className="p-2 bg-white rounded-full text-blue-500">
                  {featureIcons[index]}
                </div>
                <span>{feature}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center">
          {selectedImageIndex !== null && (
            <img
              src={images[selectedImageIndex]}
              alt="Feature image"
              className="w-[700px] h-[400px] object-contain mb-4"
            />
          )}
          {selectedSubText !== null && (
            <div className="text-center text-lg text-gray-700 w-[700px] break-words">
              {subtext[selectedSubText]}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Features;
