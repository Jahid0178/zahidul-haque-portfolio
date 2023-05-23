import Link from "next/link";
import React from "react";

const Button = ({ children, href }) => {
  return (
    <Link
      href={href}
      className="inline-block px-4 py-2 mt-4 bg-cyan-950 border border-cyan-500 rounded-full text-cyan-400 hover:bg-cyan-500 hover:text-black transition-colors text-base"
    >
      {children}
    </Link>
  );
};

export default Button;
