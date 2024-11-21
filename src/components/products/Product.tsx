// <------------------------------------ file to show the products -------------------->

// import required modules
import { useEffect, useState } from "react";

const Product = () => {
  const svgImages = [
    "/new_aupay.939fae7c.svg",
    "/new_ausale.20a8529c.svg",
    "/new_aushop.a2faba30.svg",
  ];

  const headings = [
    "The Golden Gold App",
    "The Hybrid ERP Magic",
    "Open Your Shop To World",
  ];

  const text = [
    " We're Making Jewellery Scheme Payments Easier.",
    "Inventory Management Excellence in Every Tap",
    "A Smooth Jewellery Shopping Experience",
  ];
  const [selectedSVGIndex, setSelectedSVGIndex] = useState<number | null>(null);

  const [selectedText, setSelectedText] = useState<number | null>(null);

  const [selectedHeading, setSelectedHeading] = useState<number | null>(null);

  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    setSelectedSVGIndex(0);
    setSelectedText(0);
    setSelectedHeading(0);
    setActiveIndex(0);
  }, []);

  // for updating the feature part
  const featureClick = (index: number) => {
    setSelectedHeading(index);
    setSelectedText(index);
    setSelectedSVGIndex(index);
    setActiveIndex(index);
  };

  return (
    <div>
      <div className="flex flex-row gap-6 items-center justify-center mt-20">
        {["AU PAY", "AU SALES", "AU SHOPS"].map((buttonText, index) => (
          <button
            key={buttonText}
            onClick={() => featureClick(index)}
            className={`rounded-full ${
              activeIndex === index ? "bg-[#2B8AC2]" : "bg-[#36A4E5]"
            } text-white py-3 px-6 text-lg transition-colors duration-300 w-[200px]`}
          >
            {buttonText}
          </button>
        ))}
      </div>
      <div className="mt-12 text-center flex flex-row items-center justify-center gap-6">
        {selectedSVGIndex !== null && (
          <div className="flex justify-center">
            <img
              src={svgImages[selectedSVGIndex]}
              alt="SVG feature"
              className="w-[600px] h-[500px] object-contain"
            />
          </div>
        )}

        <div className="flex flex-col items-start max-w-full">
          {selectedHeading !== null && (
            <h2 className="text-6xl font-semibold text-yellow-500 mb-4 break-words">
              {headings[selectedHeading]}
            </h2>
          )}

          {selectedText !== null && (
            <p className="text-3xl text-gray-700 break-words max-w-[500px]">
              {text[selectedText]}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;