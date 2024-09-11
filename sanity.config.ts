import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

const config = defineConfig({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
  dataset: "production",
  title: "Zahidul Portfolio",
  apiVersion: "2023-03-04",
  basePath: "/admin",
  plugins: [deskTool()],
});

export default config;
