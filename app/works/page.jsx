"use client";

import ProjectCard from "../components/Cards/ProjectCard/ProjectCard";
import { projects } from "@/data/data";
import PageHeader from "../components/common/PageHeader/PageHeader";
import { usePathname } from "next/navigation";
import "swiper/css/pagination";

const WorksPage = () => {
  const pathname = usePathname();
  return (
    <section id="work">
      <div className="container">
        {pathname.slice(1) && <PageHeader title="Works" />}
        <PageHeader title="Latest Works" />
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.id} data={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorksPage;
