import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Tracker from "@/components/Tracker";
import { getAboutPage } from "@/sanity/sanity-utils";

const AboutSection = async () => {
  const aboutPageContent = await getAboutPage();
  const { title, description } = aboutPageContent[0];
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
              {title}
            </h2>
            <p className="text-slate-400 max-w-xl text-base">{description}</p>
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
