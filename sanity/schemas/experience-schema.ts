const experienceSchema = {
  title: "Experience",
  name: "experience",
  type: "document",
  fields: [
    {
      title: "Company",
      name: "company",
      type: "string",
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "company",
      },
    },

    {
      title: "Role",
      name: "role",
      type: "string",
      options: {
        list: [
          "Front End Developer",
          "Back End Developer",
          "Full Stack Developer",
        ],
      },
      initialValue: "Front End Developer",
    },
    {
      title: "Location",
      name: "location",
      type: "string",
    },
    {
      title: "Start Date",
      name: "startDate",
      type: "datetime",
    },
    {
      title: "End Date",
      name: "endDate",
      type: "datetime",
    },
    {
      title: "Job Type",
      name: "jobType",
      type: "string",
      options: {
        list: ["Remote", "Full Time", "Part Time", "Intern", "Hybrid"],
      },
      initialValue: "Full Time",
    },
  ],
};

export default experienceSchema;
