"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import selfPicture from "/public/images/photo.png";
import Typed from "typed.js";
import { socialLinks } from "@/data/data";
import IconButton from "../components/Buttons/IconButton/IconButton";

const HomePage = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "React Js Developer",
        "Next Js Developer",
        "Front End Developer",
      ],
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
      <section
        data-scroll-container
        className="h-auto md:h-screen flex items-center pb-[10rem]"
      >
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
            <div>
              <h4 className="text-primary text-8xl md:text-[260px] font-bold tracking-widest">
                Hello<span className="text-[#FED9CA]">.</span>
              </h4>
              <h1 className="text-2xl md:text-4xl my-4">
                My name is AKM Zahidul Haque, <br /> Front End Developer.
              </h1>
              <span className="text-xl" ref={el}></span>
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
    </>
  );
};

export default HomePage;
