import { createClient } from "next-sanity";

export async function getHeroPage() {
  const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
    dataset: "production",
    apiVersion: "2023-03-04",
  });

  return await client.fetch(`*[_type == "hero"]{
      _id,
      title,
      subtitle,
      description,
    }`);
}
