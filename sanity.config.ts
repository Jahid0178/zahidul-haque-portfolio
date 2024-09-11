import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import schemas from "./sanity/schemas";

const config = defineConfig({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
  dataset: "production",
  title: "Zahidul Haque Portfolio",
  apiVersion: "2023-03-04",
  basePath: "/admin",
  plugins: [structureTool()],
  schema: {
    types: schemas,
  },
});

export default config;
