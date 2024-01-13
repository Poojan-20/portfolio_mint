"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { useSectionInView } from "@/lib/hooks";
import { TypeAnimation } from "react-type-animation";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);

  return (
    <section
      ref={ref}
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
      id="home"
    >
      <div className="flex items-center justify-center ">
        <div className="relative">
          <motion.div
          className="rounded-3xl shadow-[12px_12px_0px_rgba(0,0,0,1)] dark:shadow-[12px_12px_0px_rgba(255,255,255,1)]"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'tween',
              duration: 0.4,
              velocity: 100,
            }}
          >
            
              <Image
              src="/peeps.png"
              alt="poojan potrait"
              width="200"
              height="250"
              quality="95"
              priority={true}
              className="block h-30 w-30 rounded-3xl border-white border-[0.2rem] object-cover shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 -right-4 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

{/* <div className="w-80 h-full border-black border-2 rounded-md shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-white">
   <a href="" className="block cursor-pointer">
      <article className="w-full h-full">
         <figure className="w-full h-1/2 border-black border-b-2">
            <img
               src="https://neo-brutalism-ui-library.vercel.app/assets/neo-brutalism-image3-6c6a875b.jpg"
               alt="thumbnail"
               className="w-full h-full object-cover"
               />
         </figure>
         <div className="px-6 py-5 text-left h-full">
            <p className="text-base mb-4">May 15th, 2023</p>
            <h1 className="text-[32px] mb-4">Neo Brutallism</h1>
            <p className="text-xs mb-4 line-clamp-4">
               Neobrutalism is an aesthetic characterized by high contrast
               elements, bright colors, and bold shapes. It is often used to make
               a statement, as it is meant to be eye-catching and stand out to
               the viewer. It is also used in user interface and web design, with
               features such as vibrant colors and bold shapes. Neobrutalism can
               also be used in print design, with an example being a bold shape
               with a vibrant color fill applied to it.
            </p>
            <strong>Read More</strong>
         </div>
      </article>
   </a>
</div> */}
        
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-semibold">Hello, I&#39;m Poojan.</span>
        <br /> I&#39;m a{" "}
        <span className="font-semibold">
          <TypeAnimation
            className="type"
            preRenderFirstString={true}
            sequence={[
              500,
              `"Developer"`, // initially rendered starting point
              1000,
              `"Gamer"`,
              1000,
              `"TechGeek"`,
              1000,
            ]}
            speed={65}
            style={{ fontSize: "1.875rem" }}
            repeat={Infinity}
          />
          <style global jsx>{`
            .type::after {
              content: ">";
              animation: cursor 1.1s infinite step-start;
            }
            @keyframes cursor {
              50% {
                opacity: 0;
              }
            }
          `}</style>
        </span>
        <br />
        <span className="font-normal"></span> I break and make things with
        <span className="italic"> javascript.</span>
      </motion.h1>

      <motion.div
        className="flex flex-col :flex-row items-center justify-center gap-3 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="https://mail.google.com/mail/?view=cm&fs=1&to=poojanp2008@gmail.com"
          target="_blank"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.1] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/70"
          href="https://drive.google.com/file/d/1VKgJG9yX0BRM0KaLQ7970IKs30azwJdK/view?usp=drive_link"
          target="__blank"
        >
          Download Resume{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <div className="flex flex-row gap-3">
          <a
            className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full border border-black/10 focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer dark:bg-white/10 dark:text-white/70"
            href="https://www.linkedin.com/in/poojan-patel2001"
            target="_blank"
          >
            <BsLinkedin />
          </a>
          <a
            className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full text-[1.35rem] border border-black/10 focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer dark:bg-white/10 dark:text-white/70"
            href="https://github.com/Poojan-20"
            target="_blank"
          >
            <FaGithubSquare />
          </a>
          <a
            className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full text-[1.35rem] border border-black/10 focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer dark:bg-white/10 dark:text-white/70"
            href="https://twitter.com/Poojan_bahaha"
            target="_blank"
          >
            <FaSquareXTwitter />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
