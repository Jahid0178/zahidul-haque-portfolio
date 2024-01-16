"use client";

import Image from "next/image";
import PageHeader from "@/components/common/PageHeader/PageHeader";
import { skills } from "@/data/data";

const SkillsPage = () => {
  return (
    <section>
      <div className="container">
        <PageHeader title="Skills" />
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="p-4 text-center shadow-[-4px_4px_0_0_#111223] hover:shadow-[0_0_0_0_#111223] border border-black rounded-md transition-all  hover:bg-[#b2cbde67]"
            >
              <Image
                src={skill.icon}
                alt={skill.title}
                width={50}
                height={50}
                className="mx-auto"
              />
              <p className="mt-2">{skill.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsPage;
