"use client";

import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ProjectCard from "../components/Cards/ProjectCard/ProjectCard";
import "swiper/css/pagination";
import { projects } from "@/data/data";

const WorksPage = () => {
  return (
    <section id="work">
      <div className="container">
        <h2 className="text-4xl">Latest Works</h2>
        <div className="mt-8">
          <Swiper
            slidesPerView={4}
            spaceBetween={20}
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{
              delay: 2000,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              480: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              640: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
            className="mySwiper pb-9"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <ProjectCard data={project} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default WorksPage;
