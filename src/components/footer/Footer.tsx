// <------------------------- file to create footer for the application -------------------->

// importing the required modules
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 text-white py-8">
      <div className="container mx-auto px-4 text-center md:text-left">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-800">
              About Us
            </h3>
            <p className="text-black">
              World-class technical solutions for elevated jewellery store
              operations.
            </p>
            <Link to="/">
              <img src="/Aurum_Logo..png" alt="logo" className="h-20 w-auto" />
            </Link>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-800">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-blue-500">
                  Home
                </a>
              </li>
              <li>
                <a href="/#" className="text-blue-500">
                  About
                </a>
              </li>
              <li>
                <a href="/#" className="text-blue-500">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="text-blue-500">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-800">
              Solutions
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="/#" className="text-blue-500">
                  Au Pay
                </a>
              </li>
              <li>
                <a href="/product/ausales" className="text-blue-500">
                  Au Sales
                </a>
              </li>
              <li>
                <a href="/#" className="text-blue-500">
                  Au Shops
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-800">
              Contact
            </h3>
            <ul className="space-y-2">
              <p className="text-blue-500">
                Email:{" "}
                <a href="mailto:support@atts.in" className="text-blue-500">
                  support@atts.in
                </a>
              </p>
              <p className="text-blue-500">
                Phone:{" "}
                <a href="tel:+0422 4957575" className="text-blue-500">
                  0422 4957575
                </a>
              </p>
            </ul>
            <Link to="/contact">
              <button className="bg-gradient-to-r from-blue-900 to-green-600 text-white rounded-full py-2 font-bold px-4 flex items-center space-x-2 mt-2">
                Book a Demo
                <span className="text-2xl">&rarr;</span>
              </button>
            </Link>
          </div>
        </div>

        <div className="mt-8 border-t border-blue-800 pt-4">
          <p className="text-blue-400 text-sm">
            Aurumm made by{" "}
            <Link to="https://atts.in" className="hover:text-blue-800">
              ATTS Technologies
            </Link>
            . All Rights Reserved© 2024.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
