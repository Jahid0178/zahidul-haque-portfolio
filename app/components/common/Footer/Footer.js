"use client";

import Link from "next/link";
import { BsGithub, BsFacebook, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="py-4 text-black border-t">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Zahidul Haque. All Right Reserved</p>
          <ul className="flex items-center gap-4">
            <li>
              <Link href="#">
                <BsFacebook title="Facebook" />
              </Link>
            </li>
            <li>
              <Link href="#">
                <BsGithub title="Github" />
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
