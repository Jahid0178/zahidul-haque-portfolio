"use client";

import React, { useEffect, useState } from "react";
import DownloadButton from "../components/Buttons/DownloadButton/DownloadButton";
import Link from "next/link";
import { awards, comapnyNames, skills } from "@/data/data";
import Image from "next/image";
import va from "@vercel/analytics";
import PageHeader from "../components/common/PageHeader/PageHeader";
import AboutPic from "/public/images/work-from-anywhere.png";

const AboutPage = () => {
  const [overlayOpen, setOverlayOpen] = useState(false);
  const [imgSrc, setImgSrc] = useState("");
  console.log(imgSrc);

  return (
    <>
      <section id="about">
        <div className="container">
          <PageHeader title="About" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div className="text-center">
              <div className="mb-4">
                <Image
                  src={AboutPic}
                  alt="Zahidul Haque's Photo"
                  width={500}
                  height={500}
                  className="mx-auto rounded"
                />
              </div>
              <DownloadButton
                href={
                  "https://drive.google.com/file/d/1AHX0uwhk0yarzanyt5SFpcuicpyS986a/view?usp=sharing"
                }
                onClick={() => va.track("Download Resume Button")}
              >
                Download CV
              </DownloadButton>
            </div>
            <div>
              <p className="mb-5 text-xl">
                My name’s Zahidul Haque. I am a web developer based in
                Bangladesh. I am adept in quite few technologies ie. MERN stack.
                I try to learn new technologies that pique my interest in my
                free time & play video games 🎮.
              </p>
              <div className="flex flex-col md:flex-row gap-4">
                <ul>
                  <li className="mb-3">
                    <p>
                      <b>Phone:</b> +8801789293803
                    </p>
                  </li>
                  <li className="my-3">
                    <p>
                      <b>Experience:</b> 2 Years
                    </p>
                  </li>
                  <li className="mt-3">
                    <p>
                      <b>Age:</b> 24
                    </p>
                  </li>
                </ul>
                <ul>
                  <li className="mb-3">
                    <p>
                      <b>Address:</b> Savar, Dhaka, Bangladesh
                    </p>
                  </li>
                  <li className="my-3">
                    <p>
                      <b>Work Status:</b> Available
                    </p>
                  </li>
                  <li className="mt-3">
                    <p>
                      <b>Github:</b>{" "}
                      <Link href="https://github.com/Jahid0178" target="_blank">
                        Link
                      </Link>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold">My experience</h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {comapnyNames.map((companyName) => {
              const {
                id,
                companyName: name,
                roll,
                location,
                start,
                end,
                jobType,
                type,
              } = companyName;
              return (
                <div
                  key={id}
                  className="group relative border border-black p-4 rounded before:absolute before:top-0 before:left-0 before:bottom-0 before:w-0 before:h-full before:hover:w-full before:bg-black before:transition-all before:duration-500 before:ease-in-out"
                >
                  <div className="relative group-hover:text-white">
                    <h2 className="text-2xl font-bold">{name}</h2>
                    <p className="my-2">Roll: {roll}</p>
                    <p className="mb-2">Location: {location}</p>
                    <p className="mb-2">
                      Start: {start} - End: {end}
                    </p>
                    <p>
                      Job Type: {jobType} ({type})
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-right">
            Awards I&apos;ve earned.
          </h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {awards.map((award) => {
              const { id, title, src, institute } = award;
              return (
                <div key={id} className="p-2">
                  <Image
                    src={src}
                    alt={title}
                    width={500}
                    height={500}
                    onClick={() => {
                      setOverlayOpen(!overlayOpen);
                      setImgSrc(src);
                    }}
                  />
                  <div className="mt-2">
                    <h2 className="text-xl">{title}</h2>
                    <p className="text-lg">{institute}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {overlayOpen && (
            <div
              id="overlay"
              className="fixed top-0 left-0 right-0 bottom-0 bg-black/50 flex justify-center items-center h-screen"
              onClick={() => setOverlayOpen(!overlayOpen)}
            >
              <Image src={imgSrc} alt="Image" width={1000} height={1000} />
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default AboutPage;
