'use client';

import React from 'react'
import SectionHeading from './sectionheading'
import { projectsData } from '@/lib/data'
import ProjectCard from './projectcard'

export default function Projects() {
    return (
        <section className='scroll-mt-28 mb-28'>
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
