"use client";

import Link from "next/link";
import { BsGithub, BsFacebook, BsLinkedin } from "react-icons/bs";
import { useAptabase } from "@aptabase/react";
import ScrollToTop from "../../Buttons/ScrollToTop/ScrollToTop";

const Footer = () => {
  const { trackEvent } = useAptabase();
  return (
    <footer className="py-4 border-t">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p>
            © {new Date().getFullYear()} AKM Zahidul Haque. All Right Reserved
          </p>
          <ul className="flex items-center gap-4">
            <li>
              <Link
                href="#"
                onClick={() =>
                  trackEvent("footer_social_link", { title: "Facebook" })
                }
              >
                <BsFacebook title="Facebook" />
              </Link>
            </li>
            <li>
              <Link
                href="#"
                onClick={() =>
                  trackEvent("footer_social_link", { title: "Github" })
                }
              >
                <BsGithub title="Github" />
              </Link>
            </li>
            <li>
              <Link
                href="#"
                onClick={() =>
                  trackEvent("footer_social_link", { title: "LinkedIn" })
                }
              >
                <BsLinkedin title="LinkedIn" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* Scroll To Top Button */}
      <span className="fixed right-4 bottom-3">
        <ScrollToTop />
      </span>
    </footer>
  );
};

export default Footer;
