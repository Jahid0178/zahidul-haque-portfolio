import React from "react";
import SectionHeading from "@/components/SectionHeading";
import ExperienceCard from "@/components/ExperienceCard";
import { experiences } from "@/data/data";
import { getWorkExperience } from "@/sanity/sanity-utils";

const ExperienceSection = async () => {
  const worksExperiences = await getWorkExperience();
  return (
    <section id="experience">
      <div className="container">
        <SectionHeading
          title={"Professional Experience"}
          subtitle={"Journey Through My Career Milestones"}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {worksExperiences.map((experience: any) => (
            <ExperienceCard
              key={experience._id}
              data={experience}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
