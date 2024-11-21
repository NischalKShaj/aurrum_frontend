// <------------------------ file to show the home page for the application -------------->

// importing the required modules
import Clients from "../components/clients/Clients";
import FeaturedApp from "../components/featuredApp/FeaturedApp";
import Features from "../components/features/Features";
import Help from "../components/help/Help";
import Hero from "../components/hero/Hero";
import Navbar from "../components/navbar/Navbar";
import Product from "../components/products/Product";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <div>
      <div className="relative">
        <div className="fixed top-0 left-0 width-full z-10">
          <Navbar />
        </div>
        <Hero />
        <div className="flex flex-col-reverse md:flex-row items-center justify-between">
          <div className="flex-1 text-center md:text-right md:pr-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-800 mb-4">
              Simplified Operations, Increased Profits.
            </h1>
            <p className="text-sm sm:text-lg text-gray-700 mb-4">
              AURUMM revolutionizes the way jewellery stores operate, offering
              seamless
              <br className="hidden md:block" /> solutions for gold saving
              schemes,
              <br className="hidden md:block" /> online sales platforms, and
              inventory management.
            </p>
            <p className="text-sm sm:text-lg text-gray-700 mb-4">
              Streamline operations, increase productivity, and double your
              <br className="hidden md:block" />
              revenue with our longstanding cutting-edge solutions!
            </p>
            <p className="text-sm sm:text-lg text-gray-700 mb-4">
              Welcome to a future of innovation, efficiency, and brilliance.
            </p>
            <p className="text-sm sm:text-lg text-gray-700">
              Welcome to AURUMM.
            </p>
          </div>
          <div className="flex-1">
            <img
              src="/new_ausale.20a8529c.svg"
              alt="sale image"
              className="w-full h-auto max-w-[300px] sm:max-w-[400px] md:max-w-[600px] mx-auto"
            />
          </div>
        </div>
        <FeaturedApp />
        <div className="flex justify-center">
          <Features />
        </div>
        <Product />
        <Help />
        <Clients />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
