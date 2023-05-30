import { skills } from "@/data/data";
import Image from "next/image";

const SkillsPage = () => {
  return (
    <section>
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold">Skills</h2>
        <div className="flex flex-wrap items-center gap-4 mt-8">
          {skills.map((skill) => (
            <div
              key={skill.id}
              title={skill.title}
              className="border border-black px-4 py-2 cursor-pointer rounded"
            >
              <span>{skill.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsPage;
