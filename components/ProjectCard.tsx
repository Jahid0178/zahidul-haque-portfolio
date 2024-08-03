import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Badge } from "./ui/badge";

const ProjectCard = ({ project }: any) => {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="px-0 pt-0">
        <Image
          src={project.imageUrl}
          alt={project.name}
          width={300}
          height={300}
          className="w-full"
        />
      </CardHeader>
      <CardContent className="space-y-4">
        <CardTitle>{project.name}</CardTitle>
        <div className="flex justify-between">
          <Link
            href={project.links.live}
            target="_blank"
            className="hover:underline"
          >
            Live Link
          </Link>

          <Link
            href={project.links.git}
            target="_blank"
            className="hover:underline"
          >
            Git Link
          </Link>
        </div>
      </CardContent>
      <CardFooter>
        <Dialog>
          <DialogTrigger>View Details</DialogTrigger>
          <DialogContent>
            <DialogHeader className="space-y-4">
              <Image
                src={project.imageUrl}
                alt={project.name}
                width={600}
                height={600}
              />
              <DialogTitle>{project.name}</DialogTitle>
              <DialogDescription>{project.description}</DialogDescription>
              <div>
                <h6 className="mb-2 font-semibold">Tech Stacks</h6>
                <div className="flex flex-wrap gap-2">
                  {project.techStacks.map((techStack: any) => (
                    <Badge key={techStack}>{techStack}</Badge>
                  ))}
                </div>
              </div>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
