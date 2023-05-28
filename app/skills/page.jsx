import { skills } from "@/data/data";
import Image from "next/image";
import React from "react";

const SkillsPage = () => {
  return (
    <section>
      <div className="container">
        <h2 className="text-4xl mb-5">Skills</h2>
        <div className="flex flex-wrap items-center gap-4">
          {skills.map((skill) => (
            <div key={skill.id}>
              <Image
                src={skill.icon}
                alt={skill.title}
                width={100}
                height={100}
                className="w-16"
                title={skill.title}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsPage;
