"use client";

import Link from "next/link";
import React from "react";

const IconButton = ({ title, children, href, type, ...rest }) => {
  console.log(type);
  return (
    <>
      <Link
        title={title}
        href={type === "mail" ? `mailto:${href}` : href}
        {...rest}
      >
        {children}
      </Link>
    </>
  );
};

export default IconButton;
