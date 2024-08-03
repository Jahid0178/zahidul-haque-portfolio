"use client";

import React from "react";
import SectionHeading from "@/components/SectionHeading";
import { skills } from "@/data/data";
import Icon from "@/components/Icon";

const SkillsSection = () => {
  return (
    <section
      className="bg-gray-50"
      id="skills"
    >
      <div className="container">
        <SectionHeading
          title={"Showcase of My Skills"}
          subtitle={"Highlighting My Technical Proficiencies"}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((skill: any) => {
            return (
              <div
                key={skill.id}
                className="flex gap-2 items-center p-4 shadow-lg group rounded-md bg-white dark:bg-slate-800/50 cursor-pointer"
              >
                <div className="flex items-center justify-center h-[45px] min-w-[45px] -rotate-45 bg-amber-500/10 group-hover:bg-amber-500 text-amber-500 group-hover:text-white text-center rounded-xl me-5 transition-all duration-500">
                  <div className="rotate-45">{skill.icon()}</div>
                </div>
                <div>{skill.title}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
