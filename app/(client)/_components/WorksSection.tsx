import React from "react";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/data";

const WorksSection = () => {
  return (
    <section
      className="bg-gray-50"
      id="projects"
    >
      <div className="container">
        <SectionHeading
          title={"Recent Projects"}
          subtitle={"Showcasing My Latest Work and Achievements"}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorksSection;
