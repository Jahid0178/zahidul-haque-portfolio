import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section
      className="bg-gradient-to-b from-white to-orange-200 dark:from-slate-900 dark:to-black relative pt-40"
      id="home"
    >
      <div className="container">
        <div>
          <div className="text-center space-y-4 max-w-lg mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold">
              AKM Zahidul Haque
            </h1>
            <p className="text-2xl font-medium">I&apos;m Front End Developer</p>
            <p className="text-gray-600">
              I&apos;m a Front-End Developer with over 3 years of experience,
              specializing in crafting seamless user experiences and modern,
              responsive designs.
            </p>
            <div className="flex justify-center items-center gap-4">
              <Button
                asChild
                size="lg"
                className="rounded-full"
              >
                <Link
                  href="https://drive.google.com/file/d/1ZSo_z5t2RU4xF_oMs-1abClVe0oG2WF8/view"
                  target="_blank"
                >
                  Download CV
                </Link>
              </Button>
              <Button
                size="lg"
                className="rounded-full"
                asChild
              >
                <Link href="#contact">Hire Me</Link>
              </Button>
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
