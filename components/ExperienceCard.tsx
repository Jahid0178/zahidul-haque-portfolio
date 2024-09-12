import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import moment from "moment";

interface ExperienceProps {
  data: {
    id: number;
    company: string;
    role: string;
    location: string;
    startDate: string;
    endDate: string;
    jobType: string;
  };
}

const ExperienceCard = ({ data }: ExperienceProps) => {
  const { company, role, location, startDate, endDate, jobType } = data;
  const formatStartDate = moment(startDate).format("L");
  const formatEndDate = moment(endDate).format("L");
  return (
    <Card className="group bg-white">
      <CardHeader>
        <CardTitle className="text-xl">{company}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <p>Role: {role}</p>
        <p>Location: {location}</p>
        <p>
          Duration: {formatStartDate} - {endDate ? formatEndDate : "Present"}
        </p>
        <p>Job Type: {jobType}</p>
      </CardContent>
    </Card>
  );
};

export default ExperienceCard;
