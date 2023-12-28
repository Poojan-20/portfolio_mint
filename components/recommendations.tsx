'use client';

import React, { useRef, useState } from "react";
import SectionHeading from './sectionheading'
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards,Autoplay } from 'swiper/modules';
import { useSectionInView } from "@/lib/hooks";
import Image from "next/image";
import 'swiper/css';
import 'swiper/css/effect-cards';




export default function Recommendations() {
  const {ref} = useSectionInView('Projects',0.5);
  return (
    <section ref={ref} id="recommendations" className="mb-28 max-w-[50rem] scroll-mt-28">
      <SectionHeading>Some Of my Recommendations</SectionHeading>
      <div className="flex flex-col md:flex md:flex-row overflow-clip mb-8 relative">
        <div className="flex flex-col mx-10 mb-8 z-10">
          <h2 className="text-white text-lg mb-4 text-center font-semibold">Games</h2>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards,Autoplay]}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        className="w-[17rem] h-[17rem] hover:scale-105 transform transition duration-50"
      >
        <SwiperSlide className="flex items-center justify-center rounded-2xl">
        <Image
              src="/godofwar.webp"
              alt="poojan potrait"
              width={280}
              height={280}
            />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center rounded-2xl"><Image
              src="/uncharted.webp"
              alt="poojan potrait"
              width={280}
              height={280}
            /></SwiperSlide>
        <SwiperSlide className="flex items-center justify-center rounded-2xl"><Image
              src="/eldenring.jpg"
              alt="poojan potrait"
              width={280}
              height={280}
            /></SwiperSlide>
        <SwiperSlide className="flex items-center justify-center rounded-2xl"><Image
              src="/spidermanmilesmorales.webp"
              alt="poojan potrait"
              width={280}
              height={280}
            /></SwiperSlide>
        <SwiperSlide className="flex items-center justify-center rounded-2xl"><Image
              src="/tombraider.jpg"
              alt="poojan potrait"
              width={280}
              height={280}
            /></SwiperSlide>
        <SwiperSlide className="flex items-center justify-center rounded-2xl"><Image
              src="/acvalhalla.jpg"
              alt="poojan potrait"
              width={280}
              height={280}
            /></SwiperSlide>
      </Swiper>
      </div>
        <div className="flex flex-col mx-20 z-10">
          <h2 className="text-white text-xl mb-4 text-center font-semibold">Movies/Series</h2>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards,Autoplay]}
        autoplay={{
          delay: 2800,
          disableOnInteraction: false,
        }}
        className="w-[17rem] h-[17rem] hover:scale-105  transform transition duration-50"
      >
        <SwiperSlide className="flex items-center justify-center rounded-2xl">
        <Image
              src="/peakyblinders.webp"
              alt="poojan potrait"
              width={280}
              height={280}
            />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center rounded-2xl"><Image
              src="/sherlock.jpg"
              alt="poojan potrait"
              width={280}
              height={280}
            /></SwiperSlide>
        <SwiperSlide className="flex items-center justify-center rounded-2xl"><Image
              src="/Gran_Turismo.jpg"
              alt="poojan potrait"
              width={280}
              height={280}
            /></SwiperSlide>
        <SwiperSlide className="flex items-center justify-center rounded-2xl"><Image
              src="/spidermanmilesmorales.webp"
              alt="poojan potrait"
              width={280}
              height={280}
            /></SwiperSlide>
        <SwiperSlide className="flex items-center justify-center rounded-2xl"><Image
              src="/tombraider.jpg"
              alt="poojan potrait"
              width={280}
              height={280}
            /></SwiperSlide>
        <SwiperSlide className="flex items-center justify-center rounded-2xl"><Image
              src="/godofwar.webp"
              alt="poojan potrait"
              width={280}
              height={280}
            /></SwiperSlide>
      </Swiper>
      </div>
       </div>
    </section>
   
  );
}
