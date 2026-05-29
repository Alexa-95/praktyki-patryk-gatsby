import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper/modules";
import works from "../assets/images/Works.png";

export default function Contact() {
  return (
    <div id="works" className="bg-mainDark">
      <div className="max-w-7xl px-6 py-[128px] gap-[5vw] flex flex-col md:flex-row mx-auto">
        <div className="w-full max-w-lg mx-auto">
          <h2 className="text-center text-accent font-IBMPlex text-[32px] underline">
            Works
          </h2>
          <p className="text-center font-IBMPlex text-[14px] my-4">
            I had the pleasure of working with these awesome projects
          </p>
          <div className="">
            TODO Formularz
          </div>
        </div>
      </div>
    </div>
  )
}