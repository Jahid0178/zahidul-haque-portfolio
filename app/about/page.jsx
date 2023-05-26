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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
            <DownloadButton
              href={"/public/assets/pdf/Zahidul-Haque-Resume.pdf"}
            >
              Download CV
            </DownloadButton>
          </div>
          <div>2</div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
