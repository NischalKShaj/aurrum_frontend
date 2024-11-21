// <---------------------- file to show the clients ------------------------->

// importing the required modules
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Clients = () => {
  const images = [
    "/client1.a6ce8334.png",
    "/client2.375a298f.png",
    "/client3.bb1326d9.png",
    "/client4.ae1b0ded.png",
    "/client5.e84cda3c.png",
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 300,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="px-4 py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">
          Brands That Trust Us!
        </h2>
        <Slider {...settings} className="client-carousel">
          {images.map((image, index) => (
            <div key={index} className="px-4">
              <img
                src={image}
                alt={`Client ${index + 1}`}
                className="mx-auto h-20 object-contain"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Clients;
