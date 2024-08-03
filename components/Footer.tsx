import React from "react";
import SocialIcons from "./SocialIcons";
import { socialLinks } from "@/data/data";

const Footer = () => {
  return (
    <footer className="py-4 bg-gray-50 dark:bg-slate-900 text-black dark:text-white">
      <div className="container">
        <div className="flex justify-between flex-col md:flex-row items-center gap-4">
          <p>© {new Date().getFullYear()} Zahidul Haque. All rights reserved</p>
          <SocialIcons socialLinks={socialLinks} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
