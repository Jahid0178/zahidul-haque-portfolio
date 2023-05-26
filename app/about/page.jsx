import React from "react";
import DownloadButton from "../components/Buttons/DownloadButton/DownloadButton";
import Link from "next/link";
import { skills } from "@/data/data";
import Image from "next/image";
import va from "@vercel/analytics";

const AboutPage = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h2 className="text-4xl mb-5">About Me</h2>
            <p className="mb-5">
              I&apos;m AKM Zahidul Haque, a MERN Stack Developer with 2 years of
              experience. Proficient in MongoDB, Express.js, React, Next, and
              Node.js, I&apos;ve built web applications and RESTful APIs. Feel
              free to contact me at <b>zahidul.haque767@gmail.com</b> or
              <b>+8801789293803</b> to discuss how I can assist you with your
              web development requirements!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
              <ul>
                <li className="mb-3">
                  <p>
                    <b>Name:</b> AKM Zahidul Haque
                  </p>
                </li>
                <li className="my-3">
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
            <DownloadButton
              href={"/public/assets/pdf/Zahidul-Haque-Resume.pdf"}
              onClick={() => va.track("Download Resume Button")}
            >
              Download CV
            </DownloadButton>
          </div>
          <div>
            <h2 className="text-4xl mb-5">Skills</h2>
            <div className="flex flex-wrap items-center gap-4">
              {skills.map((skill) => (
                <div key={skill.id}>
                  <Image
                    src={skill.icon}
                    alt={skill.title}
                    width={100}
                    height={100}
                    className="w-16"
                    title={skill.title}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
