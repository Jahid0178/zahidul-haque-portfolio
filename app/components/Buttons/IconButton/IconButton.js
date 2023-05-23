"use client";

import Link from "next/link";
import React from "react";

const IconButton = ({ title, children, href, ...rest }) => {
  return (
    <>
      <Link title={title} href={href} {...rest}>
        {children}
      </Link>
    </>
  );
};

export default IconButton;
