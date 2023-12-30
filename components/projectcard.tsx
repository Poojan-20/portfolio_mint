"useclient";
import React, { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { BsGithub,BsLink45Deg } from "react-icons/bs";
import Link from "next/link";

type ProjectProps = (typeof projectsData)[number];

export default function ProjectCard({
  title,
  description,
  tags,
  imageUrl,
  status,
  previewlink,
  githublink
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1.2"],
  });
  const scaleprogress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleprogress,
        transition: "opacity 0.4s, transform 0.4s",
      }}
      className={`sticky top-[8.3rem] group mb-3 sm:mb-8 md:mb-8 last:mb-0 md:top-[9rem]`}
    >
      <motion.section className="bg-gray-100 max-w-[42rem]  mb-4 border ml-4 border-black/5 md:overflow-hidden sm:pr-8 md:pr-8 relative md:h-[25rem] hover:bg-gray-200 transition md:group-even:pl-8 dark:text-white dark:bg-gray-700 dark:hover:bg-gray-500 rounded-2xl shadow-2xl">
        <Image
          className="relative rounded-xl top-[-9px] md:top-8 md:-right-[6rem] w-[24.25rem] shadow-2xl md:absolute transition   
          md:group-even:right-[initial] 
          md:group-even:-left-[6rem]
          md:group-hover:-translate-x-3 
          md:group-hover:translate-y-3 
          md:group-hover:-rotate-2 

          md:group-hover:scale-[1.05]
          md:group-even:group-hover:translate-x-3 
          md:group-even:group-hover:translate-y-3 
          md:group-even:group-hover:rotate-2"
          src={imageUrl}
          alt={title}
          quality={95}
        />
        <div className="pt-4 pb-7 px-5 md:pl-10 md:pt-10 md:pr-2 md:max-w-[50%] flex flex-col h-full md:group-even:ml-[18rem]">
        <div className="flex flex-row">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <Link href={githublink} target="__blank" className=' bg-black/[0.7] ml-2 mt-1 px-2 py-1  rounded-full text-white  dark:text-white/70'>
              <BsGithub className="h-5 w-5"/>
            </Link>
            <Link  href={previewlink} target="__blank" className=' bg-black/[0.7] ml-2 mt-1 px-2 py-1  rounded-full text-white  dark:text-white/70 '>
              <BsLink45Deg className="h-5 w-5"/>
            </Link>
        </div>
        <p className="project-status-content-wrapper my-2 text-xs rounded px-2 py-2 bg-black/[0.7] text-white w-fit hover:bg-zinc-800 dark:hover:bg-slate-600">{status}</p>  
          <p className="mt-2 leading-relaxed text-gray-700 text-ellipsis dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </motion.section>
    </motion.div>
  );
}
