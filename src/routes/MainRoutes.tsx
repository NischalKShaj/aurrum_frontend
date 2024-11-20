// <----------------------- file to show the main routes of the application ------------------>

// importing the required modules
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

const MainRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default MainRoutes;
