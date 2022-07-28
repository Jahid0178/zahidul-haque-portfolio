import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container mx-auto px-3">
      <div className="h-screen flex justify-center items-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold">
            Zahidul <span className="text-orange-500">Haque</span>
          </h1>
          <p className="text-2xl py-4">Front End Developer</p>
          <Link to="/contact-us" className="btn-primary inline-block">
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
