// <------------------------------------------- file to create the contact form ----------------------------->

// importing the required modules
import { Mail, Instagram, Facebook } from "lucide-react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const Contact = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-200 via-blue-300 to-blue-500 overflow-hidden">
        <div className="absolute top-20 left-8 w-40 h-40 sm:w-64 sm:h-64 rounded-full bg-blue-500 opacity-20 animate-pulse"></div>
        <div className="absolute top-32 right-8 w-48 h-48 sm:w-80 sm:h-80 rounded-full bg-green-400 opacity-15 animate-pulse"></div>
        <div className="absolute bottom-20 left-24 w-56 h-56 sm:w-72 sm:h-72 rounded-full bg-teal-300 opacity-20 animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="fixed top-0 left-0 w-full z-20">
          <Navbar />
        </div>
        <div className="container mx-auto px-4 py-24 sm:py-32 pt-32">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-1/2 space-y-8">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-900 leading-tight">
                See how Aurumm can transform your Business
              </h1>
              <p className="text-xl text-blue-700">
                Ready to make a move? Reach out to us, and let's get things
                rolling!
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold text-blue-900 mb-2">
                    Email
                  </h3>
                  <a
                    href="mailto:support@atts.in"
                    className="text-blue-600 hover:text-blue-800 flex items-center gap-2"
                  >
                    <Mail size={20} />
                    support@atts.in
                  </a>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-blue-900 mb-2">
                    Social
                  </h3>
                  <div className="flex gap-4">
                    <a
                      href="https://www.instagram.com/aurumm_serv_soft/"
                      className="text-blue-600 hover:text-blue-800 flex items-center gap-2"
                    >
                      <Instagram size={20} />
                      Instagram
                    </a>
                    <a
                      href="https://www.facebook.com/people/Aurumm/61558187474609/"
                      className="text-blue-600 hover:text-blue-800 flex items-center gap-2"
                    >
                      <Facebook size={20} />
                      Facebook
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <form className="bg-white p-8 rounded-xl shadow-2xl relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Enter your full name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter your email address"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <label
                    htmlFor="projectType"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select Project Type</option>
                    <option value="AuPay">Au Pay</option>
                    <option value="AuSales">Au Sales</option>
                    <option value="AuShops">Au Shops</option>
                  </select>
                </div>
                <div className="mt-6">
                  <label
                    htmlFor="budget"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Budget
                  </label>
                  <input
                    type="number"
                    id="budget"
                    placeholder="Enter your budget"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="mt-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Enter your message"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  ></textarea>
                </div>
                <div className="mt-8">
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white font-medium py-3 px-4 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 transform hover:scale-105"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
