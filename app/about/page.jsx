import React from "react";
import DownloadButton from "../components/Buttons/DownloadButton/DownloadButton";

const AboutPage = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h2 className="text-4xl my-5">About Me</h2>
            <p className="mb-5">
              I&apos;m AKM Zahidul Haque, a MERN Stack Developer with 2 years of
              experience. Proficient in MongoDB, Express.js, React, Next, and
              Node.js, I&apos;ve built web applications and RESTful APIs. Feel
              free to contact me at <b>zahidul.haque767@gmail.com</b> or
              <b>+8801789293803</b> to discuss how I can assist you with your
              web development requirements!
            </p>
            <DownloadButton
              href={"/public/assets/pdf/Zahidul-Haque-Resume.pdf"}
            >
              Download CV
            </DownloadButton>
          </div>
          <div>
            <h2>Tech S</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
