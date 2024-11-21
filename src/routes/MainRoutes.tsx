// <----------------------- file to show the main routes of the application ------------------>

// importing the required modules
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Product from "../pages/Product";
import Contact from "../pages/Contact";

const MainRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/ausales" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default MainRoutes;
