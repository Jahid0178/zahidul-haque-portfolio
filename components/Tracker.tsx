"use client";

import React from "react";
import { useAptabase } from "@aptabase/react";

type TrackerProps = {
  eventName: string;
  eventCategory: string;
  eventAction: string;
  eventLabel: string;
  children: React.ReactNode;
};

const Tracker = ({
  children,
  eventName,
  eventCategory,
  eventAction,
  eventLabel,
}: TrackerProps) => {
  const { trackEvent } = useAptabase();
  return (
    <div
      onClick={() =>
        trackEvent(eventName, {
          category: eventCategory,
          label: eventLabel,
          action: eventAction,
        })
      }
    >
      {children}
    </div>
  );
};

export default Tracker;
