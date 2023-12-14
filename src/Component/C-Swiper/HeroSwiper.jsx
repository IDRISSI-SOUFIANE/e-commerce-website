/* eslint-disable react/prop-types */

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

import "swiper/css/autoplay";

// eslint-disable-next-line react/prop-types

import "./heroSwiper.css";

const HeroSwiper = ({ slides, slideChange }) => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={1}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        6768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      }}
      loop={true}
      modules={[Autoplay]}
      className="heroswiper"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide._id}>
          <img
            src={slide.bgImg}
            alt=""
            onClick={() => slideChange(slide._id)}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSwiper;
