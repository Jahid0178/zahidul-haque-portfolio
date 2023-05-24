import React from "react";
import Button from "../components/Buttons/Button/Button";

const AboutPage = () => {
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
          <div>
            <h2 className="text-4xl md:text-6xl my-8">About Me</h2>
            <p className="mb-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
            <Button href="/">Get in touch</Button>
          </div>
          <div>2</div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
