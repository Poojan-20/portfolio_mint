'use client';
import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion";
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare,FaLinkedin } from "react-icons/fa";

export default function Intro() {
    return (
        <section className='mb-28 max-w-[50rem] text-center sm:mb-0'>
            <div className='flex items-center justify-center'>
                <div className='relative'>
                    <motion.div
                        initial={{ opacity: 0, scale: 0, }}
                        animate={{ opacity: 1, scale: 1, rotate: 360 }}
                        transition={{
                            type: 'tween',
                            duration: 0.4,
                            velocity: 100,
                        }}>
                        <Image src='/pfpemoji.png' alt='poojan potrait' width='200' height='200' quality='95' priority={true} className='h-30 w-30 rounded-3xl object-cover border-[0.05rem] border-white shadow-xl' />
                    </motion.div>

                    <motion.span className='absolute bottom-0 -right-4 text-4xl'
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: 'spring',
                            stiffness: 125,
                            delay: 0.1,
                            duration: 0.7,
                        }}>✌️</motion.span>

                </div>
            </div>

            <motion.p className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}>
                <span className="font-bold">Hello, I&#39;m Poojan.</span> I&#39;m a{" "}
                <span className="font-bold">full-stack developer</span><br />
                <span className="font-bold"></span> I break
                and make things with
                <span className="italic"> javascript</span>. My focus is{" "}
                <span className="underline">React (Next.js)</span>.</motion.p>

            <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.1,
                }}
            >
                <Link
                    href="#contact"
                    className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
                >
                    Contact me here{" "}
                    <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
                </Link>

                <a
                    className="bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.1] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10"
                    href="https://drive.google.com/file/d/1VKgJG9yX0BRM0KaLQ7970IKs30azwJdK/view?usp=drive_link"
                    target='__blank'
                >
                    Download Resume{" "}
                    <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
                </a>

                <a
                    className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full border border-black/10 focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer "
                    href="https://www.linkedin.com/in/poojan-patel2001"
                    target="_blank"
                >
                    <BsLinkedin/>
                </a>

                <a
                    className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full text-[1.35rem] border border-black/10 focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer "
                    href="https://github.com/Poojan-20"
                    target="_blank"
                >
                    <FaGithubSquare />
                </a>
            </motion.div>
        </section>
    )
}
