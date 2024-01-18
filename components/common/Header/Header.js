"use client";

import React from "react";
import Logo from "./Logo/Logo";
import Link from "next/link";
import { useAptabase } from "@aptabase/react";
import { navigationLinks } from "../../../data/data";

const Header = () => {
  const { trackEvent } = useAptabase();
  return (
    <header className="py-5 sticky top-0 z-50">
      <div className="container">
        <nav className="flex justify-between md:flex-row gap-4 items-center">
          <Logo />
          <ul className="hidden md:flex gap-4">
            {navigationLinks.map((navigationLink, ind) => {
              const { id, title, href } = navigationLink;
              return (
                <li key={id}>
                  <Link
                    href={href}
                    className={`text-xl font-bold`}
                    onClick={() =>
                      trackEvent("nav_link", { title: title, href: href })
                    }
                  >
                    <span className="relative">{title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
