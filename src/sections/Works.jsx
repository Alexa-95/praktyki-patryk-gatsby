import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import works from '../assets/images/Works.png'

export default function Works() {
  return (
    <div id="works" className="bg-dark">
      <div className="max-w-7xl px-6 py-[128px] gap-[5vw] flex flex-col md:flex-row mx-auto">
        <div className="w-full max-w-lg mx-auto">
          <h2 className="text-center text-accent font-IBMPlex text-[32px] underline">
            Works
          </h2>
          <p className="text-center font-IBMPlex text-[14px] my-4">
            I had the pleasure of working with these awesome projects
          </p>
          <div className="">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              navigation
              loop={true}
            >
              <SwiperSlide>
                <img src={works} alt="Photo 1" />
              </SwiperSlide>

              <SwiperSlide>
                <img src={works} alt="Photo 2" />
              </SwiperSlide>

              <SwiperSlide>
                <img src={works} alt="Photo 3" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  )
}