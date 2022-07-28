import React from "react";
import Footer from "./common/Footer";
import Header from "./common/Header";
import Main from "./common/Main";

const TheLayout = () => {
  return (
    <div className="bg-black text-white">
      <div className="bg-black text-white">
        <Header />
      </div>
      <div>
        <Main />
      </div>
      <div className="bg-gray-800">
        <Footer />
      </div>
    </div>
  );
};

export default TheLayout;
