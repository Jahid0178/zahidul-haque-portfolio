import React from "react";
import HomePage from "./home/page";
import AboutPage from "./about/page";
import WorksPage from "./works/page";
import ContactPage from "./contact/page";

const App = () => {
  return (
    <div>
      <HomePage />
      <AboutPage />
      <WorksPage />
      <ContactPage />
    </div>
  );
};

export default App;
