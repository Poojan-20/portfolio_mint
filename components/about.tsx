'use client';
import React from 'react'
import SectionHeading from './sectionheading'
import { motion } from "framer-motion";


export default function About() {
    return (
        <motion.section className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
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
