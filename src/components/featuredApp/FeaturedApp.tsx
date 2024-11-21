// <----------------------- file to show the featured apps ------------------------>

// importing the required modules
import { useNavigate, Link } from "react-router-dom";

const FeaturedApp = () => {
  const navigate = useNavigate();

  const handleMove = () => {
    navigate("/product/ausales");
  };

  return (
    <div className="flex flex-col items-center justify-center px-4 py-8 bg-gray-50">
      <h1 className="text-3xl font-bold text-blue-800 mb-8">
        AURUMM for Your Jewellery Business
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-[110rem] p-8">
        <div className="bg-[#FFF6E2E5] shadow-md rounded-lg p-8 hover:shadow-xl transition-all duration-500 ease-in-out transform hover:scale-95 hover:translate-y-1 flex flex-col w-full max-w-lg">
          <div className="flex bg-white rounded w-44 space-x-4 h-12 items-center px-4">
            <img
              src="/symbol.2d89ec5c.svg"
              alt="AU SALES logo"
              className="w-8 h-8"
            />
            <p className="font-semibold">AU SALES</p>
          </div>
          <h2 className="text-lg mt-6 font-semibold text-blue-600 mb-4">
            All-Round Inventory Management Assistant
            <div
              className="h-[3px] w-full mt-1 rounded-full"
              style={{
                background:
                  "linear-gradient(to right, #fbbf24, rgba(251, 191, 36, 0) 80%)",
              }}
            ></div>
          </h2>
          <p className="text-gray-700 mb-6 flex-grow">
            If you're looking for a holistic store management solution, then AU
            Sales is the only app you need!
          </p>
          <div className="mt-auto">
            <button
              onClick={handleMove}
              className="rounded-full bg-[#D7B56D] hover:bg-[#C1A05F] text-white py-3 px-6 text-lg transition-colors duration-300"
            >
              Get Started
            </button>
          </div>
        </div>
        <div className="bg-[#EDFFF2E5] shadow-md rounded-lg p-8 hover:shadow-xl transition-all duration-500 ease-in-out transform hover:scale-95 hover:translate-y-1 flex flex-col w-full max-w-lg">
          <div className="flex bg-white rounded w-44 h-12 items-center px-4 space-x-4">
            <img
              src="/symbol.2d89ec5c.svg"
              alt="AU PAY logo"
              className="w-8 h-8"
            />
            <p className="font-semibold">AU PAY</p>
          </div>
          <h2 className="text-lg mt-6 font-semibold text-blue-600 mb-4">
            An Exclusive Gold Savings Scheme Payment App
            <div
              className="h-[3px] w-full mt-1 rounded-full"
              style={{
                background:
                  "linear-gradient(to right, #48bb78, rgba(72, 187, 120, 0) 80%)",
              }}
            ></div>
          </h2>
          <p className="text-gray-700 mb-6 flex-grow">
            Make gold scheme payments simple and easy for your customers with AU
            Pay - the ultimate jewellery finance partner.
          </p>
          <div className="mt-auto">
            <Link
              to="#"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <button className="rounded-full bg-[#41945A] hover:bg-[#357A4B] text-white py-3 px-6 text-lg transition-colors duration-300">
                Get Started
              </button>
            </Link>
          </div>
        </div>
        <div className="bg-[#DFF3FFAB] shadow-md rounded-lg p-8 hover:shadow-xl transition-all duration-500 ease-in-out transform hover:scale-95 hover:translate-y-1 flex flex-col w-full max-w-lg">
          <div className="flex bg-white rounded w-44 space-x-4 h-12 px-4 items-center">
            <img
              src="/symbol.2d89ec5c.svg"
              alt="AU SHOP logo"
              className="w-8 h-8"
            />
            <p className="font-semibold">AU SHOP</p>
          </div>
          <h2 className="text-lg mt-6 font-semibold text-blue-600 mb-4">
            Give Your Fine Jewellery A Sleek Online Platform!
            <div
              className="h-[3px] w-full mt-1 rounded-full"
              style={{
                background:
                  "linear-gradient(to right, #00bcd4, rgba(0, 188, 212, 0) 80%)",
              }}
            ></div>
          </h2>
          <p className="text-gray-700 mb-6 flex-grow">
            Are you ready to give your customers the ultimate online jewellery
            shopping experience? Discover AU Shop and let's begin!
          </p>
          <div className="mt-auto">
            <Link
              to="#"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <button className="rounded-full bg-[#36A4E5] hover:bg-[#2B8AC2] text-white py-3 px-6 text-lg transition-colors duration-300">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedApp;
