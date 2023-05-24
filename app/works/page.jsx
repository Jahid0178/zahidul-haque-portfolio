import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ProjectCard from "../components/Cards/ProjectCard/ProjectCard";
import "swiper/css/pagination";

const WorksPage = () => {
  return (
    <section>
      <div className="container">
        <h2 className="text-4xl">Latest Works</h2>
        <div className="mt-4">
          <Swiper
            slidesPerView={3}
            spaceBetween={20}
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
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
                slidesPerView: 3,
                spaceBetween: 40,
              },
              860: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
            className="mySwiper"
          >
            {[1, 2, 3, 4, 5, 6].map((item, ind) => (
              <SwiperSlide key={ind}>
                <ProjectCard />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default WorksPage;
