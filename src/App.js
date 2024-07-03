import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Home/Navbar";
import Home from "./Pages/Home/Homescreen";
import AboutMe from "./Pages/Home/AboutMe";
import MySkills from "./Pages/Home/MySkills";
import MyPortfolio from "./Pages/Home/MyPortfolio";
import ContactMe from "./Pages/Home/ContactMe";
import Footer from "./Pages/Home/Footer";
import PageNotFound from "./Pages/Home/PageNotFound";

function App() {
  return (
    <div className="App">
      {/* <Router> */}
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/skill" element={<MySkills />} />
          <Route path="/portfolio" element={<MyPortfolio />} />
          <Route path="/contact" element={<ContactMe />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </div>
      {/* </Router> */}
    </div>
  );
}

export default App;
