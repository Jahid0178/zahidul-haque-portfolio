import React from "react";
import HeroSection from "./_components/HeroSection";
import AboutSection from "./_components/AboutSection";
import SkillsSection from "./_components/SkillsSection";
import ExperienceSection from "./_components/ExperienceSection";
import WorksSection from "./_components/WorksSection";
import ContactMe from "./_components/ContactMe";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <WorksSection />
      <ContactMe />
    </>
  );
};

export default HomePage;
