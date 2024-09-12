const skillsSchema = {
  title: "Skills",
  name: "skills",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
    },
    {
      title: "Icon",
      name: "icon",
      type: "file",
      options: {
        accept: ".svg",
      },
      description: "Upload SVG icon",
    },
  ],
};

export default skillsSchema;
