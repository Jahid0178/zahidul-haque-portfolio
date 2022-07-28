import React from "react";
import ProfileImage from "../../../assets/images/Photo.jpg";

const About = () => {
  return (
    <div className="container mx-auto px-3">
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-4/5 mx-auto py-20">
          <div>
            <img
              className="mx-auto w-80 rounded-xl"
              src={ProfileImage}
              alt="Profile"
            />
          </div>
          <div>
            <div>
              <h2 className="uppercase text-3xl font-bold">
                Zahidul <span className="text-orange-500">Haque</span>
              </h2>
              <p className="py-4">Front-end Developer</p>
              <p>
                My name is Zahidul Haque. I am a Front-end Developer, and I'm
                very passionate and dedicated to my work. With 1 years
                experience as a professional a Front-end Developer, I have
                acquired the skills and knowledge.
              </p>
              <button className="btn-primary mt-20">See More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
