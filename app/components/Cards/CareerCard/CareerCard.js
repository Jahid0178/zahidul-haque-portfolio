import Image from "next/image";
import React from "react";

const CareerCard = ({ data }) => {
  const { companyName, start, end, logo, roll, location, type, jobType } = data;
  return (
    <div className="h-full w-full bg-blue-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-25 border border-gray-100 p-4">
      <Image
        src={logo}
        alt={companyName}
        width={200}
        height={200}
        className="w-full rounded"
        draggable={false}
      />
      <ul className="mt-4">
        <li className="text-2xl">{companyName}</li>
        <li className="my-1">Role: {roll}</li>
        <li className="my-1">Job Type: {jobType}</li>
        <li className="my-1">
          Location: {location} ({type})
        </li>
        <ul className="flex gap-4">
          <li className="my-1">Start: {start}</li>
          <li className="my-1">End: {end}</li>
        </ul>
      </ul>
    </div>
  );
};

export default CareerCard;
