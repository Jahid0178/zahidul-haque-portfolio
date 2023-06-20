"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import selfPicture from "/public/images/photo.png";
import Typed from "typed.js";
import { socialLinks } from "@/data/data";
import IconButton from "./components/Buttons/IconButton/IconButton";
import WorksPage from "./works/page";
import SkillsPage from "./skills/page";
import Link from "next/link";
import BlogsPage from "./blogs/page";

const HomePage = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["MERN Stack Developer", "Front End Developer", "Freelancer"],
      smartBackspace: true,
      typeSpeed: 100,
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
      <section data-scroll-container>
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
            <div className="relative">
              <Image
                src="/assets/shapes/shape-3.png"
                alt="shape"
                width={550}
                height={550}
                className="absolute top-0 left-0 right-0 mx-auto"
              />
              <Image
                src={selfPicture}
                alt="Zahidul Haque Picture"
                width={200}
                height={200}
                className="mx-auto w-64 grayscale hover:grayscale-0 transition-all ease-in-out delay-200"
                draggable={false}
              />
            </div>
          </div>
        </div>
      </section>
      {/* Skills Page */}
      <SkillsPage />
      {/* Works Page */}
      <WorksPage />
      <section>
        <div className="container">
          <div className="text-center w-full md:w-3/6 mx-auto">
            <h2 className="text-xl md:text-3xl mb-3">
              Like my work? Want to have a good quality projects? You can
              contact me now!
            </h2>
            <Link href={"/contact"} className="btn-primary">
              Contact
            </Link>
          </div>
        </div>
      </section>
      <BlogsPage />
    </>
  );
};

export default HomePage;
