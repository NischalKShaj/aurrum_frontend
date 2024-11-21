// <-------------------------- file to show the navbar ------------------->

// importing the required modules
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const handleChange = () => {
    setShow(!show);
  };

  return (
    <div className="bg-white bg-opacity-30 backdrop-blur-md fixed top-0 w-full z-10">
      <nav className="top-0">
        <div className="flex flex-row items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link to="/">
            <img src="/Aurum_Logo..png" alt="logo" className="h-10 w-auto" />
          </Link>

          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="text-black font-semibold">
              Home
            </Link>
            <div className="relative inline-block">
              <span
                className="text-black font-semibold cursor-pointer flex items-center"
                onClick={handleChange}
              >
                Product and Features
                <span
                  className={`ml-1 transform transition-transform duration-500 ${
                    show ? "rotate-180" : "rotate-0"
                  }`}
                >
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
              {show && (
                <div className="absolute left-0 bg-opacity-30 backdrop-blur-sm bg-white shadow-lg mt-2 w-[300px] md:w-[500px] rounded-lg z-20">
                  <div className="px-4 py-2 flex space-x-3 items-center">
                    <img
                      src="/symbol.2d89ec5c.svg"
                      alt="logo"
                      className="w-10 h-10 object-contain"
                    />
                    <Link to="#">
                      AuPay
                      <p className="text-gray-600 font-normal text-sm">
                        Gold saving scheme payment platform
                      </p>
                    </Link>
                  </div>
                  <div className="px-4 py-2 flex space-x-3 items-center">
                    <img
                      src="/symbol.2d89ec5c.svg"
                      alt="logo"
                      className="w-10 h-10 object-contain"
                    />
                    <Link to="/product/ausales">
                      AuSales
                      <p className="text-gray-600 font-normal text-sm">
                        Comprehensive jewellery store ERP
                      </p>
                    </Link>
                  </div>
                  <div className="px-4 py-2 flex space-x-3 items-center">
                    <img
                      src="/symbol.2d89ec5c.svg"
                      alt="logo"
                      className="w-10 h-10 object-contain"
                    />
                    <Link to="#">
                      AuShop
                      <p className="text-gray-600 font-normal text-sm">
                        Online jewellery shopping platform
                      </p>
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <Link to="/contact" className="text-black font-semibold">
              Contact
            </Link>
            <Link to="/contact">
              <button className="bg-gradient-to-r from-blue-900 to-green-600 text-white rounded-full py-2 font-bold px-4 flex items-center space-x-2">
                Book a Demo
                <span className="text-2xl">&rarr;</span>
              </button>
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white bg-opacity-30 backdrop-blur-md py-4">
            <div className="flex flex-col space-y-4 items-center">
              <Link to="/" className="text-black font-semibold">
                Home
              </Link>
              <span
                className="text-black font-semibold cursor-pointer flex items-center"
                onClick={handleChange}
              >
                Product and Features
                <span
                  className={`ml-1 transform transition-transform duration-500 ${
                    show ? "rotate-180" : "rotate-0"
                  }`}
                >
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
              {show && (
                <div className="bg-opacity-30 backdrop-blur-sm bg-white shadow-lg mt-2 w-[300px] rounded-lg z-20">
                  <div className="px-4 py-2 flex space-x-3 items-center">
                    <img
                      src="/symbol.2d89ec5c.svg"
                      alt="logo"
                      className="w-10 h-10 object-contain"
                    />
                    <Link to="#">
                      AuPay
                      <p className="text-gray-600 font-normal text-sm">
                        Gold saving scheme payment platform
                      </p>
                    </Link>
                  </div>
                  <div className="px-4 py-2 flex space-x-3 items-center">
                    <img
                      src="/symbol.2d89ec5c.svg"
                      alt="logo"
                      className="w-10 h-10 object-contain"
                    />
                    <Link to="/product/ausales">
                      AuSales
                      <p className="text-gray-600 font-normal text-sm">
                        Comprehensive jewellery store ERP
                      </p>
                    </Link>
                  </div>
                  <div className="px-4 py-2 flex space-x-3 items-center">
                    <img
                      src="/symbol.2d89ec5c.svg"
                      alt="logo"
                      className="w-10 h-10 object-contain"
                    />
                    <Link to="#">
                      AuShop
                      <p className="text-gray-600 font-normal text-sm">
                        Online jewellery shopping platform
                      </p>
                    </Link>
                  </div>
                </div>
              )}
              <Link to="/contact" className="text-black font-semibold">
                Contact
              </Link>
              <Link to="/contact">
                <button className="bg-gradient-to-r from-blue-900 to-green-600 text-white rounded-full py-2 font-bold px-4 flex items-center space-x-2">
                  Book a Demo
                  <span className="text-2xl">&rarr;</span>
                </button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
