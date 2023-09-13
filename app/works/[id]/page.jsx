"use client";

import Button from "@/app/components/Buttons/Button/Button";
import PageHeader from "@/app/components/common/PageHeader/PageHeader";
import { projects } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const WorkDetails = ({ params }) => {
  const [data, setData] = useState({});
  const { id } = params;

  useEffect(() => {
    const filteredItems = projects.filter((project) => project.id == id);
    setData(filteredItems[0]);
  }, [id]);

  const { image, title, gitLink, liveLink, technologies, description } = data;

  return (
    <section>
      <div className="container">
        <PageHeader title={title} className="text-left" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <div className="p-1">
            <Image
              src={image}
              alt={title}
              width={1000}
              height={1000}
              className="w-full"
            />
          </div>
          <div className="p-1">
            {/* <h2 className="text-2xl font-bold mb-2">{title}</h2> */}
            <div className="flex gap-3 mb-4">
              <Link
                className="hover:underline"
                href={liveLink || ""}
                target="_blank"
              >
                Live Link
              </Link>
              <Link
                className="hover:underline"
                href={gitLink || ""}
                target="_blank"
              >
                Git Link
              </Link>
            </div>
            <div>
              <h2 className="text-xl mb-2">Description</h2>
              <p>{description}</p>
              <div className="mt-4">
                <h3 className="text-xl">Technologies Used</h3>
                <ul>
                  {technologies?.map((technologie, ind) => (
                    <li key={ind} className="my-2 list-disc list-inside">
                      {technologie}
                    </li>
                  ))}
                </ul>
              </div>
              <Button href="/works">Back To Works Page</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkDetails;
