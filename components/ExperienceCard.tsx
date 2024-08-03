import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Icon from "./Icon";

interface ExperienceProps {
  data: {
    id: number;
    companyName: string;
    roll: string;
    location: string;
    duration: {
      start: string;
      end: string;
    };
    jobType: string;
  };
}

const ExperienceCard = ({ data }: ExperienceProps) => {
  const { companyName, roll, location, duration, jobType } = data;
  return (
    <Card className="group bg-white">
      <CardHeader>
        <CardTitle className="text-xl">{companyName}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <p>Roll: {roll}</p>
        <p>Location: {location}</p>
        <p>
          Duration: {duration.start} - {duration.end}
        </p>
        <p>Job Type: {jobType}</p>
      </CardContent>
    </Card>
  );
};

export default ExperienceCard;
