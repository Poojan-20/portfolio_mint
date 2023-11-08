'use client';

import React, { useEffect } from 'react'
import SectionHeading from './sectionheading'
import { projectsData } from '@/lib/data'
import ProjectCard from './projectcard'
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
   const {ref} = useSectionInView('Projects',0.5);

    return (
        <section ref={ref}id='projects'className='scroll-mt-28 mb-28'>
            <SectionHeading>Some of my work</SectionHeading>
            <div>
                {
                    projectsData.map((project, index) => (
                        <React.Fragment key={index}>
                        <ProjectCard {...project}/>
                        </React.Fragment>
                    ))
                }
            </div>
        </section>
    )
}
