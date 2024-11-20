// <---------------------- file to crate the hero section ------------------>

// importing the required modules
import { useCallback, useEffect, useState } from "react";

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
    <div className="bg-blue-200 h-screen flex justify-center items-center flex-col">
      <h3 className="text-blue-900 font-bold text-6xl">
        360° Software Solutions for
        <br /> Your <span className="text-blue-500">JEWELLERY</span> Store
      </h3>
      <div
        className={`transition-all duration-300 ease-in-out mb-8 h-20 flex items-center justify-center text-2xl font-semibold text-blue-500 ${cursorClass}`}
      >
        {displayedText}
      </div>
      <button className="bg-gradient-to-r from-blue-900 to-green-600 text-white rounded-full py-2 font-bold px-4 flex items-center space-x-2">
        Book a Demo
        <span className="text-2xl">&rarr;</span>
      </button>
    </div>
  );
};

export default Hero;
