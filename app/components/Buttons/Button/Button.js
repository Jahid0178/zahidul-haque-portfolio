import Link from "next/link";
import React from "react";

const Button = ({ children, href }) => {
  return (
    <Link href={href} className="btn-primary mt-4">
      {children}
    </Link>
  );
};

export default Button;
