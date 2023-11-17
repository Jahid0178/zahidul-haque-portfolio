"use client";

import React from "react";
import { AptabaseProvider } from "@aptabase/react";

const AptabaseWrapper = ({ children }) => {
  return (
    <>
      <AptabaseProvider appKey="A-EU-1835013885">{children}</AptabaseProvider>
    </>
  );
};

export default AptabaseWrapper;
