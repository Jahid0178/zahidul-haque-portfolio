import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container mx-auto px-3">
      <nav className="flex justify-between items-center py-3">
        <h2 className="text-3xl">
          <span className="text-orange-500">Z</span>ahidul{" "}
          <span className="text-orange-500">H</span>aque
        </h2>
        <ul>
          <li style={listItem}>
            <Link
              to="/"
              className="hover:text-orange-400 hover:ease-in duration-300"
            >
              Home
            </Link>
          </li>
          <li style={listItem}>
            <Link
              to="/about"
              className="hover:text-orange-400 hover:ease-in duration-300"
            >
              About
            </Link>
          </li>
          <li style={listItem}>
            <Link
              to="/portfolio"
              className="hover:text-orange-400 hover:ease-in duration-300"
            >
              Portfolio
            </Link>
          </li>
          <li style={listItem}>
            <Link
              to="/contact-us"
              className="hover:text-orange-400 hover:ease-in duration-300"
            >
              Contact Me
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;

const listItem = {
  display: "inline-block",
  margin: "0 10px",
};
