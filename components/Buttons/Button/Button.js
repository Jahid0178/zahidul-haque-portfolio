import React from "react";
import Link from "next/link";

const Button = ({ children, href, onClick }) => {
  return (
    <Link href={href} className="btn-primary mt-4" onClick={onClick}>
      {children}
    </Link>
  );
};

export default Button;
