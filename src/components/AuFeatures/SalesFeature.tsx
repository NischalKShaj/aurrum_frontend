// <--------------------------------- file to show the sales features of the application ----------------->

// importing the required modules

// features that needs to be rendered
const features = [
  {
    title: "Real-Time Integration of HO & Branches",
    description:
      "Seamlessly sync operations between headquarters and branches for efficient management.",
    items: [
      {
        img: "/Seamless Communication.1ba88877.svg",
        text: "Seamless Communication",
      },
      { img: "/Centralized Control.6d1ec122.svg", text: "Centralized Control" },
    ],
  },
  {
    title: "Estimation & Billing",
    description:
      "Streamline the process of estimating costs and generating bills for smooth transactions.",
    items: [
      {
        img: "/Customizable Templates.f501601d.svg",
        text: "Customizable Templates",
      },
      { img: "/Automated_process.9330db17.svg", text: "Automated Processes" },
    ],
  },
  {
    title: "Stock & RFID Inventory Management",
    description:
      "Utilize RFID technology for precise inventory tracking and efficient stock management.",
    items: [
      { img: "/Precision Tracking.fb45c3b4.svg", text: "Precision Tracking" },
      {
        img: "/Efficient Stock Control.0c8e3289.svg",
        text: "Efficient Stock Control",
      },
    ],
  },
  {
    title: "Order Management",
    description:
      "Simplify order processing and tracking to enhance customer service and satisfaction.",
    items: [
      {
        img: "/Streamlined Processing.afb4c1ba.svg",
        text: "Streamlined Processing",
      },
      { img: "/Enhanced Tracking.1000fd90.svg", text: "Enhanced Tracking" },
    ],
  },
  {
    title: "Karighar Management",
    description:
      "Effectively manage artisans and workshops to ensure smooth production processes.",
    items: [
      {
        img: "/Artisan Coordination.48265fd3.svg",
        text: "Artisan Coordination",
      },
      { img: "/Workshop Oversight.1134225f.svg", text: "Workshop Oversight" },
    ],
  },
  {
    title: "Staff Management",
    description:
      "Efficiently handle employee scheduling, performance tracking, and payroll management.",
    items: [
      {
        img: "/Schedule Optimization.ae917b59.svg",
        text: "Schedule Optimization",
      },
      {
        img: "/Performance Tracking.d1fc5d4f.svg",
        text: "Performance Tracking",
      },
    ],
  },
  {
    title: "HUID",
    description:
      "Implement unique identifiers for products to enhance security and streamline inventory management.",
    items: [
      {
        img: "/Unique Product Identification.a0563e30.svg",
        text: "Unique Product Identification",
      },
      {
        img: "/003-cyber-security 1.52031d88.svg",
        text: "Enhanced Security Measures",
      },
    ],
  },
  {
    title: "Scheduled Report & Notification",
    description:
      "Stay informed with scheduled reports and timely notifications for better decision-making and operational efficiency.",
    items: [
      { img: "/back-in-time 1.8cee4ac3.svg", text: "Timely Insights" },
      { img: "/Proactive Alerts.6809476d.svg", text: "Proactive Alerts" },
    ],
  },
];

const SalesFeature = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-12 text-center">
          Explore Our Key Features
        </h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col"
            >
              <div className="p-6 flex-grow">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h2>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {feature.description}
                </p>
              </div>
              <div className="space-y-3 p-4 bg-white">
                {feature.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-4 p-3 rounded-lg"
                  >
                    <img
                      src={item.img}
                      alt=""
                      className="w-8 h-8 object-contain flex-shrink-0"
                    />
                    <span className="text-gray-700 font-medium text-sm">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SalesFeature;
