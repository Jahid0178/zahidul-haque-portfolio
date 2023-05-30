"use client";

import React, { useState } from "react";
import Logo from "./Logo/Logo";
import { CiMenuFries } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";
import { navigationLinks } from "@/data/data";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState(0);

  console.log(active);

  return (
    <header className="py-5">
      <div className="container">
        <nav className="flex justify-between md:flex-row gap-4 items-center">
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
                <h2 className="text-4xl font-bold">Z | H</h2>
                <button
                  className="flex gap-4 items-center"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Close <RxCross2 />
                </button>
              </div>
              <ul className="text-gray-400 text-right mt-4 flex flex-col justify-evenly h-screen">
                {navigationLinks.map((navigationLink, ind) => {
                  const { id, title, href } = navigationLink;
                  return (
                    <li key={id}>
                      <Link
                        href={href}
                        className={`text-7xl font-bold relative before:absolute before:inset-x-0 before:bottom-6 before:h-6 before:bg-[#FED9CA] before:w-0 before:hover:w-full before:transition-all before:duration-300 before:ease-in-out hover:text-black ${
                          active === ind ? "text-black" : ""
                        }`}
                        onClick={() => setActive(ind)}
                      >
                        <span className="relative">{title}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
