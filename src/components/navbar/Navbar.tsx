// <-------------------------- file to show the navbar ------------------->

// importing the required modules
// import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-white bg-opacity-30 backdrop-blur-md fixed top-0 w-full z-10">
      <nav className="top-10">
        <div className="flex flex-row items-center justify-between px-6 py-4">
          <Link to="/">
            <img src="/Aurum_Logo..png" alt="logo" />
          </Link>
          <div className="flex space-x-8">
            <Link to="/" className="text-black font-semibold ">
              Home
            </Link>
            <div className="text-black font-semibold cursor-pointer group relative inline-block">
              <span className="flex items-center">
                Product and Features
                <span className="ml-1 transform transition-transform duration-500 group-hover:rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-chevron-down"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              </span>
              <div className=" bg-opacity-30 backdrop:backdrop-blur-sm absolute left-0 hidden group-hover:block bg-white shadow-lg mt-2 w-[500px] rounded-lg">
                <div className="px-4 py-2 flex justify-left space-x-3 items-center">
                  <img
                    src="/symbol.2d89ec5c.svg"
                    alt="logo"
                    className="w-12 h-12 object-contain"
                  />
                  <div>
                    AuPay
                    <p className="text-gray-600 font-normal">
                      Gold saving scheme payment platform
                    </p>
                  </div>
                </div>
                <div className="px-4 py-2 flex space-x-3 items-center">
                  <img
                    src="/symbol.2d89ec5c.svg"
                    alt="logo"
                    className="w-12 h-12 object-contain"
                  />
                  <div>
                    AuSales
                    <p className="text-gray-600 font-normal">
                      Comprehensive jewellery store ERP
                    </p>
                  </div>
                </div>
                <div className="px-4 py-2 flex space-x-3 items-center">
                  <img
                    src="/symbol.2d89ec5c.svg"
                    alt="logo"
                    className="w-12 h-12 object-contain"
                  />
                  <div>
                    AuShop
                    <p className="text-gray-600 font-normal">
                      Online jewellery shopping platform{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <h5 className="text-black cursor-pointer font-semibold ">
              Contact
            </h5>
          </div>
          <button className="bg-gradient-to-r from-blue-900 to-green-600 text-white rounded-full py-2 font-bold px-4 flex items-center space-x-2">
            Book a Demo
            <span className="text-2xl">&rarr;</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
