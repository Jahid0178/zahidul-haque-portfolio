const heroSchema = {
  title: "Hero",
  name: "hero",
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
      title: "Subtitle",
      name: "subtitle",
      type: "string",
    },
    {
      title: "Description",
      name: "description",
      type: "text",
    },
  ],
};

export default heroSchema;
