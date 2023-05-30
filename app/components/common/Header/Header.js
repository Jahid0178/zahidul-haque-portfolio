"use client";

import React, { useState } from "react";
import Logo from "./Logo/Logo";
import { CiMenuFries } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="py-5 bg-primary text-white">
      <div className="container">
        <nav className="flex flex-col md:justify-between md:flex-row gap-4 items-center">
          <Logo />
          <button
            className="flex gap-4 items-center"
            onClick={() => setIsOpen(!isOpen)}
          >
            <CiMenuFries size={25} /> Menu
          </button>
        </nav>
      </div>
      {isOpen && (
        <div className={`fixed z-20 left-0 right-0 bottom-0 w-full bg-white`}>
          <div className="container">
            <div className="h-screen flex flex-col">
              <div className="text-black flex justify-between mt-5">
                <h2 className="text-4xl font-medium">Z|H</h2>
                <button
                  className="flex gap-4 items-center"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Close <RxCross2 />
                </button>
              </div>
              <ul className="text-black text-right mt-4 flex flex-col justify-evenly h-screen">
                <li>
                  <Link
                    href="/"
                    className="text-6xl relative before:absolute before:inset-x-0 before:bottom-5 before:h-4 before:bg-[#FED9CA] before:w-0 before:hover:w-full before:transition-all before:duration-700 before:ease-in-out"
                  >
                    <span className="relative">Home</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-6xl relative before:absolute before:inset-x-0 before:bottom-5 before:h-4 before:bg-[#FED9CA] before:w-0 before:hover:w-full before:transition-all before:duration-700 before:ease-in-out"
                  >
                    <span className="relative">About</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-6xl relative before:absolute before:inset-x-0 before:bottom-5 before:h-4 before:bg-[#FED9CA] before:w-0 before:hover:w-full before:transition-all before:duration-700 before:ease-in-out"
                  >
                    <span className="relative">Works</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-6xl relative before:absolute before:inset-x-0 before:bottom-5 before:h-4 before:bg-[#FED9CA] before:w-0 before:hover:w-full before:transition-all before:duration-700 before:ease-in-out"
                  >
                    <span className="relative">Blogs</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-6xl relative before:absolute before:inset-x-0 before:bottom-5 before:h-4 before:bg-[#FED9CA] before:w-0 before:hover:w-full before:transition-all before:duration-700 before:ease-in-out"
                  >
                    <span className="relative">Contacts</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
