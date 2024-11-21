// <------------------------------ file to show anyone of the product --------------->

// importing the required modules
import Navbar from "../components/navbar/Navbar";
import WhyAu from "../components/why-au-sales/WhyAu";
import SalesFeature from "../components/AuFeatures/SalesFeature";
import Footer from "../components/footer/Footer";

const Product = () => {
  return (
    <div>
      <div className="relative">
        <div className="fixed top-0 left-0 width-full z-10">
          <Navbar />
        </div>
        <div className="bg-gradient-to-r from-blue-200 via-blue-300 to-blue-500 h-[700px] flex justify-center items-start flex-col px-8 sm:px-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-opacity-30 pointer-events-none">
            <div className="absolute top-20 left-16 w-64 h-64 rounded-full bg-blue-500 opacity-20 animate-pulse"></div>
            <div className="absolute top-32 right-16 w-80 h-80 rounded-full bg-green-400 opacity-15 animate-pulse"></div>
            <div className="absolute bottom-20 left-40 w-72 h-72 rounded-full bg-teal-300 opacity-20 animate-pulse"></div>
          </div>

          <div className="relative max-w-4xl">
            <h3 className="text-blue-900 font-serif text-5xl sm:text-6xl md:text-7xl font-bold leading-tight mb-4">
              Inventory Management has <br /> Never Looked So Luxurious.
            </h3>
            <p className="text-blue-700 text-lg sm:text-xl md:text-2xl">
              Seamlessly track, organize, and elevate your business operations.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 px-4">
          <div className="flex justify-center">
            <img
              src="/new_ausale.20a8529c.svg"
              alt="SVG feature"
              className="w-full max-w-[400px] h-auto md:max-w-[600px] object-contain"
            />
          </div>

          <div className="flex flex-col items-center md:items-start max-w-full text-center md:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-yellow-500 mb-4 break-words">
              The Hybrid ERP Magic
            </h2>
            <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-700 break-words max-w-[500px]">
              Inventory Management Excellence In Every Tap
            </p>
            <p className="text-base md:text-lg mt-2 text-gray-700 break-words max-w-[700px]">
              At AURUMM, we understand the artistry and precision that goes into
              every piece of jewellery. AU Sales is a testament to that
              understanding, offering an unparalleled solution for managing your
              jewellery store inventory. With a focus on simplicity and
              sophistication, AU Sales streamlines your operations and makes
              tracking your inventory the easiest it has ever been: allowing you
              to focus on what truly matters — your craft.
            </p>
          </div>
        </div>
        <WhyAu />
        <SalesFeature />
        <Footer />
      </div>
    </div>
  );
};

export default Product;
