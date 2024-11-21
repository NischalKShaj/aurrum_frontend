// <------------------------ file to show the home page for the application -------------->

// importing the required modules
import Clients from "../components/clients/Clients";
import FeaturedApp from "../components/featuredApp/FeaturedApp";
import Features from "../components/features/Features";
import Help from "../components/help/Help";
import Hero from "../components/hero/Hero";
import Navbar from "../components/navbar/Navbar";
import Product from "../components/products/Product";

const Home = () => {
  return (
    <div>
      <div className="relative">
        <div className="fixed top-0 left-0 width-full z-10">
          <Navbar />
        </div>
        <Hero />
        <div className="flex items-center justify-between">
          <div className="flex-1 pr-8 text-right">
            <h1 className="text-4xl font-bold text-blue-800 mb-4">
              Simplified Operations, Increased Profits.
            </h1>
            <p className="text-lg text-gray-700 mb-4">
              AURUMM revolutionizes the way jewellery stores operate, offering
              seamless
              <br /> solutions for gold saving schemes,
              <br /> online sales platforms, and inventory management.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Streamline operations, increase productivity, and double your
              <br />
              revenue with our longstanding cutting-edge solutions!
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Welcome to a future of innovation, efficiency, and brilliance.
            </p>
            <p className="text-lg text-gray-700">Welcome to AURUMM.</p>
          </div>
          <div className="flex-1">
            <img
              src="/new_ausale.20a8529c.svg"
              alt="sale image"
              className="w-full h-auto max-w-[600px] mx-auto"
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
      </div>
    </div>
  );
};

export default Home;
