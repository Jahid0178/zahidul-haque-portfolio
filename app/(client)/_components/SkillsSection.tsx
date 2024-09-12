import React from "react";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import { getSkillsPage } from "@/sanity/sanity-utils";

const SkillsSection = async () => {
  const skillsPageContent = await getSkillsPage();
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
          {skillsPageContent.map(
            (skill: { title: string; icon: string; slug: string }) => {
              return (
                <div
                  key={skill.slug}
                  className="flex gap-2 items-center p-4 shadow-lg group rounded-md bg-white dark:bg-slate-800/50 cursor-pointer"
                >
                  <div className="flex items-center justify-center h-[45px] min-w-[45px] ">
                    <Image
                      src={skill.icon}
                      alt={skill.slug}
                      width={45}
                      height={45}
                    />
                  </div>
                  <div>{skill.title}</div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
