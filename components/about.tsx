"use client";
import React, { useEffect } from "react";
import SectionHeading from "./sectionheading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
      ref={ref}
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3 text-center">
        An avid developer navigating the tech waves at Jio Private Limited. By
        day, I'm crafting and delivering tech wonders, infusing creativity into
        projects that push boundaries.
      </p>
      <p className="mb-3 text-center">
        But when it's time to unwind, gaming is my brain fuzz remedy. Armed with
        Valorant, a keyboard, and a cup of coffee are my power ups, always one
        respawn away. I am always on the lookout for new music artists.I am not
        just building projects but I am basically a tech storyteller.Let's connect !!
      </p>
    </motion.section>
  );
}
