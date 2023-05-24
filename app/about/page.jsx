import React from "react";
import DownloadButton from "../components/Buttons/DownloadButton/DownloadButton";

const AboutPage = () => {
  return (
    <section>
      <div className="container">
        <div className="text-center w-ful md:w-2/3 mx-auto bg-[#151C28] p-6 rounded">
          <h2 className="text-4xl my-5">About Me</h2>
          <p className="mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </p>
          <DownloadButton href={"/public/assets/pdf/Zahidul-Haque-Resume.pdf"}>
            Download CV
          </DownloadButton>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
