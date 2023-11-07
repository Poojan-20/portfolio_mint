import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import Foode from '@/public/Foode.png'
import medjestic from '@/public/medjestic.png'
import thewalls from '@/public/thewalls.png'

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Thewalls",
    description:
      "The Walls app revolutionizes music discovery by dynamically generating personalized album walls using Spotify API data. With intuitive features like customizable backgrounds and easy social sharing.",
    tags: ["React", "Next.js", "Firebase", "Tailwind", "SpotifyAPI"],
    imageUrl: thewalls,
  },
  {
    title: "Medjestic",
    description:
      "Medjectisc offers a secure telemedicine platform for doctors and patients, featuring AES-encrypted medical records and WebRTC video consultations with AES encryption and a built-in pharmacy.",
    tags: ["React", "WebRTC", "Socket.io","firebase",'Node'],
    imageUrl: medjestic,
  },
  {
    title: "FoodE",
    description:
      "Foode redefines online grocery shopping with personalized recommendations, an intuitive cart system for effortless organization, and precise, transparent invoices for seamless transactions.",
    tags: ["React", "MongoDB", "Node", "Express", "python"],
    imageUrl: Foode,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Apollo",
  "Express",
  "Python",
  "Django",
  "Framer Motion",
] as const;