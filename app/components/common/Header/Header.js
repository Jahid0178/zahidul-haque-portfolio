"use client";

import Link from "next/link";
import Logo from "./Logo/Logo";
import { navigationLinks } from "@/data/data";

const Header = () => {
  return (
    <header className="py-5 bg-primary text-white">
      <div className="container">
        <nav className="flex justify-between items-center">
          <Logo />
          <ul className="flex gap-4">
            {navigationLinks.map((navigationLink) => (
              <li key={navigationLink.id}>
                <Link
                  href={navigationLink.href}
                  className="text-lg hover:text-secondary transition-all"
                >
                  {navigationLink.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
