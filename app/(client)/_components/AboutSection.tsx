import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Tracker from "@/components/Tracker";

const AboutSection = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
          <div className="lg:col-span-5 lg:px-8">
            <Image
              src="/images/about-image.png"
              alt="About me image"
              width={400}
              height={400}
              className="mx-auto"
            />
          </div>
          <div className="lg:col-span-7 space-y-4">
            <h2 className="md:text-2xl text-xl md:leading-normal leading-normal font-semibold">
              I&apos;m a Passionate Web Developer
            </h2>
            <p className="text-slate-400 max-w-xl text-base">
              Hi there! I&apos;m AKM Zahidul Haque, a passionate and dedicated
              Front-End Developer from Bangladesh. For the past three years,
              I&apos;ve been focused on building smooth and engaging user
              experiences with React. I&apos;m always improving my skills and
              keeping up with the latest trends in web development to deliver
              the best results in every project.
            </p>
            <Tracker
              eventName="See Work"
              eventCategory="Button"
              eventAction="Click"
              eventLabel="See Work"
            >
              <Button
                variant="outline"
                size="lg"
                className="rounded-full"
                asChild
              >
                <Link href="#contact">See Work</Link>
              </Button>
            </Tracker>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
