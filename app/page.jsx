import React from "react";
import HomePage from "./home/page";
import AboutPage from "./about/page";
import WorksPage from "./works/page";
import ContactPage from "./contact/page";
import SkillsPage from "./skills/page";
import CareerPage from "./career/page";
import AchievementPage from "./achievement/page";

const App = () => {
  return (
    <div>
      <HomePage />
      <AboutPage />
      <SkillsPage />
      <CareerPage />
      <AchievementPage />
      <WorksPage />
      <ContactPage />
    </div>
  );
};

export default App;
