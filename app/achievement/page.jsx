"use client";

import React, { useState } from "react";
import Image from "next/image";
import { awards } from "@/data/data";

const AchievementPage = () => {
  const [overlayOpen, setOverlayOpen] = useState(false);
  return (
    <section>
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-right">
          Awards I&apos;ve earned.
        </h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {awards.map((award) => {
            const { id, title, src, institute } = award;
            return (
              <div
                key={id}
                className="p-2 shadow-[-4px_4px_0_0_#111223] border border-black"
              >
                <Image
                  src={src}
                  alt={title}
                  width={500}
                  height={500}
                  onClick={() => {
                    setOverlayOpen(!overlayOpen);
                    setImgSrc(src);
                    trackEvent("award_image", { title: title });
                  }}
                  className="max-h-80 object-cover"
                />
                <div className="mt-2">
                  <h2 className="text-xl">{title}</h2>
                  <p className="text-lg">{institute}</p>
                </div>
              </div>
            );
          })}
        </div>

        {overlayOpen && (
          <div
            id="overlay"
            className="fixed top-0 left-0 right-0 bottom-0 bg-black/50 flex justify-center items-center h-screen z-50"
            onClick={() => setOverlayOpen(!overlayOpen)}
          >
            <Image
              src={imgSrc}
              alt="Image"
              width={1000}
              height={1000}
              style={{ height: 800 }}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default AchievementPage;
