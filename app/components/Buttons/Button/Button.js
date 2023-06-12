import React from "react";
import Link from "next/link";

const Button = ({ children, href }) => {
  return (
    <Link href={href} className="btn-primary mt-4">
      {children}
    </Link>
  );
};

export default Button;
