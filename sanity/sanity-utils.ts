import { createClient } from "next-sanity";

let client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
  dataset: "production",
  apiVersion: "2023-03-04",
});

export async function getHeroPage() {
  return await client.fetch(`*[_type == "hero"]{
      _id,
      title,
      subtitle,
      description,
    }`);
}

export async function getAboutPage() {
  return await client.fetch(`*[_type == "about"]{
    _id,
    title,
    description,
  }`);
}

export async function getSkillsPage() {
  return await client.fetch(`*[_type == "skills"]{
      _id,
      title,
      "slug": slug.current,
      "icon": icon.asset->url,
    }`);
}
