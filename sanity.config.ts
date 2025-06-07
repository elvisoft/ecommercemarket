import schemas from "@/sanity/schemas";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

const config = defineConfig({
  projectId: '9jdygoed',
  dataset: "production",
  title: 'Mi aplicacion test',
  apiVersion: "2023-03-09",
  basePath: "/admin",
  plugins: [structureTool()],
  schema: { types: schemas },
});

export default config;
