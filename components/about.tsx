'use client';
import React, { useEffect } from 'react'
import SectionHeading from './sectionheading'
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";


export default function About() {
   const {ref} = useSectionInView('About');
    
    return (
        <motion.section className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id='about'
            ref={ref}
        >
            <SectionHeading>About me</SectionHeading>
            <p className='mb-3 text-justify'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere itaque est quia reiciendis distinctio explicabo iure a asperiores, enim hic praesentium aspernatur obcaecati. Non iure possimus, quod veniam corporis porro.
            </p>
            <p className='mb-3 text-justify'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt aut sapiente cumque. Enim maxime illum odit! Neque odit natus provident iure, et quia tempora est omnis consectetur dicta perferendis veritatis atque possimus?
            </p>
        </motion.section>
    )
}
