"use client";

import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import { navigations } from "@/data/data";
import { useWindowScroll } from "@uidotdev/usehooks";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { MoonIcon, SunIcon } from "lucide-react";

const Header = () => {
  const [{ x, y }] = useWindowScroll();
  const { setTheme, theme } = useTheme();

  return (
    <header
      className={`py-6 sticky top-0 right-0 left-0 bg-white dark:bg-slate-900 z-10 ${
        y !== null && y > 24 ? "drop-shadow-md" : ""
      }`}
    >
      <div className="container">
        <nav className="flex justify-between items-center gap-4">
          <Logo />
          <ul className="hidden md:flex justify-center items-center gap-8">
            {navigations.map((navigation) => (
              <li key={navigation.id}>
                <Link
                  href={navigation.href}
                  className="font-medium hover:text-orange-500"
                >
                  {navigation.name}
                </Link>
              </li>
            ))}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                >
                  <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
