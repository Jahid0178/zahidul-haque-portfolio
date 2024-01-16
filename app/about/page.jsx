"use client";

import React, { useState } from "react";
import DownloadButton from "@/components/Buttons/DownloadButton/DownloadButton";
import Link from "next/link";
import Image from "next/image";
import PageHeader from "@/components/common/PageHeader/PageHeader";
import AboutPic from "/public/images/work-from-anywhere.png";
import { useAptabase } from "@aptabase/react";

const AboutPage = () => {
  const [imgSrc, setImgSrc] = useState("");
  const { trackEvent } = useAptabase();

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
                  "https://drive.google.com/file/d/1ZSo_z5t2RU4xF_oMs-1abClVe0oG2WF8/view?usp=sharing"
                }
                onClick={() => trackEvent("Download CV")}
              >
                Download CV
              </DownloadButton>
            </div>
            <div>
              <p className="mb-5 text-xl">
                Hi there! I&apos;m AKM Zahidul Haque, a passionate and dedicated
                Front-End Developer based in Bangladesh. With a strong focus on
                creating seamless user experiences using React, I&apos;ve spent
                the past two years immersing myself in the world of web
                development, constantly honing my skills, and staying up-to-date
                with the latest industry trends.
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
    </>
  );
};

export default AboutPage;
