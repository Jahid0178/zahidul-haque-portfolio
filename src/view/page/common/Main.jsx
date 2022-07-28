import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../About/About";
import ContactUs from "../ContactUs/ContactUs";
import Experience from "../Experience/Experience";
import Home from "../Home/Home";
import Portfolio from "../Portfolio/Portfolio";

const Main = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />q
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </div>
  );
};

export default Main;
