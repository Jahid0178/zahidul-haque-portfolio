"use client";

import Link from "next/link";
import { BsGithub, BsFacebook, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="py-4 bg-primary text-white">
      <div className="container">
        <div className="flex justify-between items-center">
          <p>© {new Date().getFullYear()} Zahidul Haque. All Right Reserved</p>
          <ul className="flex items-center gap-4">
            <li>
              <Link href="#">
                <BsGithub title="Github" />
              </Link>
            </li>
            <li>
              <Link href="#">
                <BsFacebook title="Facebook" />
              </Link>
            </li>
            <li>
              <Link href="#">
                <BsLinkedin title="LinkedIn" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
