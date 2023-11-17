"use client";

import { useAptabase } from "@aptabase/react";
import Link from "next/link";

const Logo = () => {
  const { trackEvent } = useAptabase();
  return (
    <Link
      href="/"
      onClick={() => trackEvent("logo_home_link", { title: "Logo Home Page" })}
    >
      <h2 className="text-4xl font-bold">Z | H</h2>
    </Link>
  );
};

export default Logo;
