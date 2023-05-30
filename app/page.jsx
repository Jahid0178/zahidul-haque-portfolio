"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import selfPicture from "/public/images/photo.png";
import Typed from "typed.js";
import { socialLinks } from "@/data/data";
import IconButton from "./components/Buttons/IconButton/IconButton";
import AboutPage from "./about/page";
import ContactPage from "./contact/page";
import ScrollToTop from "./components/Buttons/ScrollToTop/ScrollToTop";
import WorksPage from "./works/page";
import CareerPage from "./career/page";
import Loading from "./components/Loading/Loading";
import SkillsPage from "./skills/page";

const HomePage = () => {
  const el = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["MERN Stack Developer", "Front End Developer", "Freelancer"],
      smartBackspace: true,
      typeSpeed: 100,
      loop: true,
    });

    const timeOut = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      typed.destroy();
      clearTimeout(timeOut);
    };
  }, []);

  return (
    // https://devcore-template.webflow.io/
    <>
      {/* {isLoading && <Loading />} */}
      <section>
        <div className="container">
          <p className="text-center text-xl bg-orange-500 rounded p-2">
            Version changes are in progress. If facing any problem. Sincerely
            sorry.
          </p>
        </div>
      </section>
      <div className="fixed flex flex-col gap-4 inset-y-2/4 right-0">
        {socialLinks.map((socialLink) => (
          <IconButton
            key={socialLink.id}
            title={socialLink.title}
            href={socialLink.link}
            type={socialLink.type}
            onClick={() => console.log("clicked on social link")}
            className="hover:bg-black hover:text-white p-2 rounded-sm"
            target="_blank"
          >
            {socialLink.icon}
          </IconButton>
        ))}
      </div>
      <section>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
            <div>
              <h4 className="text-primary text-8xl md:text-[260px] font-bold tracking-widest">
                Hello<span className="text-[#FED9CA]">.</span>
              </h4>
              <h1 className="text-2xl md:text-4xl my-4">
                My name is Zahidul Haque. MERN Stack Developer Front End
                Focused.
              </h1>
              <span className="text-lg" ref={el}></span>
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
      {/* About Me Page */}
      <AboutPage />
      {/* Skills Page */}
      <SkillsPage />
      {/* Career Page */}
      <CareerPage />
      {/* Works Page */}
      <WorksPage />
      {/* Contact Me Page */}
      <ContactPage />
      {/* Scroll To Top Button */}
      <span className="fixed right-4 bottom-3">
        <ScrollToTop />
      </span>
    </>
  );
};

export default HomePage;
