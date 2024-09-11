import React from "react";
import Link from "next/link";
import Image from "next/image";
import Tracker from "@/components/Tracker";
import { Button } from "@/components/ui/button";
import { getHeroPage } from "@/sanity/sanity-utils";

const HeroSection = async () => {
  const heroPageContent = await getHeroPage();
  const { title, subtitle, description } = heroPageContent[0];
  return (
    <section
      className="bg-gradient-to-b from-white to-orange-200 dark:from-slate-900 dark:to-black relative pt-40"
      id="home"
    >
      <div className="container">
        <div>
          <div className="text-center space-y-4 max-w-lg mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold">{title}</h1>
            <p className="text-2xl font-medium">{subtitle}</p>
            <p className="text-gray-600">{description}</p>
            <div className="flex justify-center items-center gap-4">
              <Tracker
                eventName="Download CV Button"
                eventCategory="Button"
                eventLabel="Download CV"
                eventAction="Click"
              >
                <Button
                  asChild
                  size="lg"
                  className="rounded-full"
                >
                  <Link
                    href="https://drive.google.com/file/d/1N1pPLXRsFZWuNkyZO0TCp8XCs9X6__kz/view"
                    target="_blank"
                  >
                    Download CV
                  </Link>
                </Button>
              </Tracker>
              <Tracker
                eventName="Hire Me Button"
                eventCategory="Button"
                eventLabel="Hire Me"
                eventAction="Click"
              >
                <Button
                  size="lg"
                  className="rounded-full"
                  asChild
                >
                  <Link href="#contact">Hire Me</Link>
                </Button>
              </Tracker>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/images/hero-image.png"
              alt="Person Image"
              width={500}
              height={480}
              className="relative -bottom-16 left-1/2 -translate-x-1/2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
