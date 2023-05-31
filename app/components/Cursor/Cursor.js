"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [resize, setResize] = useState(0);

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const windowResize = () => {
      setResize(window.innerWidth);
    };

    window.addEventListener("mousemove", mouseMove);

    window.addEventListener("resize", windowResize);

    return () => {
      window.addEventListener("mousemove", mouseMove);
      window.addEventListener("resize", windowResize);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 30,
      y: mousePosition.y - 30,
    },
  };

  console.log(resize);

  return (
    <motion.div
      className={`w-16 h-16 border-2 border-black fixed top-0 left-0 rounded-full z-50 pointer-events-none ${
        resize > 567 ? "block" : "hidden"
      }`}
      variants={variants}
      animate="default"
    />
  );
};

export default Cursor;
