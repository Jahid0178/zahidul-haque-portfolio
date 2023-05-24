"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import selfPicture from "/public/images/photo.png";
import Typed from "typed.js";
import { socialLinks } from "@/data/data";
import IconButton from "./components/Buttons/IconButton/IconButton";
import AboutPage from "./about/page";
import ContactPage from "./contact/page";
import ScrollToTop from "./components/Buttons/ScrollToTop/ScrollToTop";

const HomePage = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["MERN Stack Developer", "Front End Developer."],
      smartBackspace: true,
      typeSpeed: 40,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    // https://devcore-template.webflow.io/
    <>
      <section>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
            <div>
              <h4 className="text-secondary text-xl tracking-widest">
                Hi! I&apos;m Zahidul Haque
              </h4>
              <h1 className="text-4xl md:text-6xl my-4">
                MERN Stack Developer and Digital Strategist
              </h1>
              <span className="text-lg" ref={el}></span>
              <div className="mt-4 flex gap-4 flex-wrap">
                {socialLinks.map((socialLink) => (
                  <IconButton
                    key={socialLink.id}
                    title={socialLink.title}
                    href={socialLink.link}
                    onClick={() => console.log("clicked on social link")}
                    className="hover:bg-indigo-800 p-2 rounded-sm"
                    target="_blank"
                  >
                    {socialLink.icon}
                  </IconButton>
                ))}
              </div>
            </div>
            <div>
              <Image
                src={selfPicture}
                alt="Zahidul Haque Picture"
                width={200}
                height={200}
                className="mx-auto w-64"
              />
            </div>
          </div>
        </div>
      </section>
      <AboutPage />
      {/* Contact us page */}
      <ContactPage />
      {/* Scroll To Top Button */}
      <span className="fixed right-4 bottom-3">
        <ScrollToTop />
      </span>
    </>
  );
};

export default HomePage;
