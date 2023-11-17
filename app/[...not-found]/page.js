import React from "react";
import Button from "@/components/Buttons/Button/Button";

const Custom404 = () => {
  return (
    <section className="h-screen flex justify-center items-center">
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl">404 Page Not Found</h2>
        <p className="mt-2 text-base">
          The page you are looking for doesn&apos;t exist or has been moved
        </p>
        <Button href="/">Back to home</Button>
      </div>
    </section>
  );
};

export default Custom404;
