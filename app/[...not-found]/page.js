import React from "react";
import Button from "../components/Buttons/Button/Button";

const Custom404 = () => {
  return (
    <section className="h-screen flex justify-center items-center">
      <div className="text-center">
        <h2>404 Page Not Found</h2>
        <Button href="/">Back to home</Button>
      </div>
    </section>
  );
};

export default Custom404;
