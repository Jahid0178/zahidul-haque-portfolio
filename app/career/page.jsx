"use client";

import { comapnyNames } from "../../data/data";
import PageHeader from "../../components/common/PageHeader/PageHeader";

const CareerPage = () => {
  return (
    <section>
      <div className="container">
        <PageHeader title="My Experience" />
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {comapnyNames.map((companyName) => {
            const {
              id,
              companyName: name,
              roll,
              location,
              start,
              end,
              jobType,
              type,
            } = companyName;
            return (
              <div
                key={id}
                className="group relative border bg-white border-black p-4 rounded shadow-[-4px_4px_0_0_#111223]"
              >
                <div className="relative group-hover:text-black">
                  <h2 className="text-2xl font-bold">{name}</h2>
                  <p className="my-2">Roll: {roll}</p>
                  <p className="mb-2">Location: {location}</p>
                  <p className="mb-2">
                    Start: {start} - End: {end}
                  </p>
                  <p>
                    Job Type: {jobType} ({type})
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CareerPage;
