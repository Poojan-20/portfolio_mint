'use client';

import React from 'react'
import SectionHeading from './sectionheading'
import { skillsData } from '@/lib/data'
import { useSectionInView } from "@/lib/hooks";
import { motion } from 'framer-motion';


const fadeinanimationvariants={
    initial:{
        opacity:0,
        y:100,
    },
    animate:(index:number)=>({
        opacity:1,
        y:0,
        transition:{
            delay:0.05 * index,
        }
    }),
};

export default function Skills() {
   const {ref} = useSectionInView('Skills');

  return (
  <section ref={ref} id='skills' className='mb-40 max-w-[53rem] scroll-mt-28'>
    <SectionHeading>Some Technologies i have worked on</SectionHeading>
    <ul className='flex flex-wrap justify-center gap-2 text-lg text-gray-800'>
        {
            skillsData.map((skill,index)=>(
                <motion.li className='bg-white borderBlack rounded-xl px-4 py-2 text-lg md:px-5 md:py-3 dark:bg-white/10 dark:text-white/80' key={index}
                variants={fadeinanimationvariants}
                initial='initial'
                whileInView='animate'
                viewport={{
                    once:true,
                }}
                custom={index}>
                    {skill}
                </motion.li>
            ))
        }
    </ul>
  </section>
  )
}
