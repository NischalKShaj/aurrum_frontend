// <---------------------- file to crate the hero section ------------------>

// importing the required modules
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const items = [
    "Unlock the Future of Jewellery Retail with AURUMM's Cutting-Edge Solutions.",
    "Streamline Your Jewellery Business Operations with Precision and Ease.",
    "Enhance Customer Experiences with AURUMM's Tailored Software Features.",
    "Empowering Jewellery Stores with Innovation and Scalability.",
  ];

  const animateText = useCallback(() => {
    let charIndex = 0;
    const currentItem = items[currentIndex];

    const typingInterval = setInterval(() => {
      if (charIndex <= currentItem.length) {
        setDisplayedText(currentItem.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
          setDisplayedText("");
        }, 2000);
      }
    }, 50);

    return () => clearInterval(typingInterval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  useEffect(() => {
    const cleanupAnimation = animateText();
    return cleanupAnimation;
  }, [animateText]);

  const cursorClass = "after:content-['|'] after:ml-1 after:animate-pulse";
  return (
    <div className="bg-gradient-to-r from-blue-200 via-blue-300 to-blue-500 h-screen flex justify-center items-center flex-col relative overflow-hidden">
      {/* Background Animations */}
      <div className="absolute top-0 left-0 w-full h-full bg-opacity-30 pointer-events-none">
        <div className="absolute top-10 left-10 w-48 h-48 sm:w-72 sm:h-72 rounded-full bg-blue-500 opacity-30 animate-pulse"></div>
        <div className="absolute top-24 right-10 w-64 h-64 sm:w-96 sm:h-96 rounded-full bg-green-500 opacity-20 animate-pulse"></div>
        <div className="absolute top-[70%] right-10 w-48 h-48 sm:w-72 sm:h-72 rounded-full bg-teal-400 opacity-30 animate-pulse"></div>
      </div>

      {/* Title Section */}
      <h3 className="text-blue-900 font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center drop-shadow-lg mb-6 px-4">
        360° Software Solutions for
        <br />
        Your <span className="text-blue-500">JEWELLERY</span> Store
      </h3>

      {/* Dynamic Text */}
      <div
        className={`transition-all duration-300 ease-in-out mb-8 h-16 flex items-center justify-center text-xl sm:text-2xl md:text-3xl font-medium text-blue-600 ${cursorClass}`}
      >
        {displayedText}
      </div>

      {/* Call-to-Action Button */}
      <Link to="/contact">
        <button className="bg-gradient-to-r from-blue-900 to-green-600 text-white rounded-full py-3 px-6 sm:px-8 md:px-10 font-bold text-lg sm:text-xl md:text-2xl flex items-center space-x-3 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <span>Book a Demo</span>
          <span className="text-xl sm:text-2xl">&rarr;</span>
        </button>
      </Link>
    </div>
  );
};

export default Hero;
