import React from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

const SectionHeading = ({ title, subtitle }: SectionHeadingProps) => {
  return (
    <div className="space-y-4 text-center max-w-lg mx-auto mb-8">
      <h2 className="text-xl md:text-2xl font-semibold">{title}</h2>
      <p className="text-slate-400 text-base">{subtitle}</p>
    </div>
  );
};

export default SectionHeading;
