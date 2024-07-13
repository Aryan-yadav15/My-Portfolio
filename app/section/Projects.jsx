'use client'

import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { ThreeDCardDemo } from '../components/ui/DemoHoverCard';
import Link from 'next/link';
import '../globals.css';
import { motion, useAnimation } from 'framer-motion';

const Projects = () => {
    const projectData = [
        { id: 1, title: 'Project 1', link: 'https://zebiops.com', description: 'Description for Project 1', color: 'bg-red-500', img: '/Mockup/pr1.png', techStack: ['React', 'Node.js', 'MongoDB'] },
        { id: 2, title: 'Project 2', link: 'zebiops.com', description: 'Description for Project 2', color: 'bg-blue-500', img: '/Mockup/pr2.png', techStack: ['Next.js', 'Express', 'MySQL'] },
        { id: 3, title: 'Project 3', link: 'zebiops.com', description: 'Description for Project 3', color: 'bg-green-500', img: '/Mockup/pr3.png', techStack: ['Vue.js', 'Firebase', 'GraphQL'] },
    ];

    const [ref, inView] = useInView({
        triggerOnce: true, // Only trigger once
        threshold: 0.1, // Trigger when 10% of the element is visible
    });
    const controls = useAnimation();

    useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1, y: 0 });
        }
    }, [controls, inView]);

    const [activeProjectId, setActiveProjectId] = useState(null); // Initialize with null or an initial project ID

    const handleSetActiveProject = (projectId) => {
        setActiveProjectId(projectId);
    };

    return (
        <div className="relative w-full bg-custom-gradient">
            <div className="flex flex-col lg:flex-row justify-between px-4 sm:px-10 lg:px-20">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 100 }}
                    animate={controls}
                    transition={{ duration: 1.5 }}
                    className="lg:flex-1"
                >
                    <section className="sticky hidden top-0 h-screen lg:flex flex-col justify-start pt-10 sm:pt-20 lg:pt-28">
                        <h1 className="text-2xl sm:text-5xl lg:text-9xl font-semibold text-gray-500 opacity-50">Projects</h1>
                        <p className="hidden lg:flex mt-4 sm:mt-6 lg:mt-10 text-base sm:text-lg lg:text-xl text-gray-300">
                            {activeProjectId !== null && projectData.find(project => project.id === activeProjectId)?.description}
                        </p>
                        <div className="w-[60%] flex flex-row flex-wrap pt-5">
                            {activeProjectId !== null && projectData.find(project => project.id === activeProjectId)?.techStack.map(tech => (
                                <TechPill key={tech} tech={tech} />
                            ))}
                        </div>
                    </section>
                </motion.div>
                <section className="flex flex-col gap-10 sm:gap-20 space-y-10 pb-20 sm:pb-40 lg:pb-80 pt-0  lg:pt-[40rem] lg:flex-1">
                    <h1 className='lg:hidden flex text-7xl text-gray-500 font-semibold pt-20 text-center'>Projects </h1>
                    {projectData.map(project => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            onIntersection={handleSetActiveProject}
                        />
                    ))}
                </section>
            </div>
        </div>
    );
};

const ProjectCard = ({ project, onIntersection }) => {
    const { ref, inView } = useInView({
        threshold: 0.5, // Adjust threshold as needed
        rootMargin: '0px 0px -10% 0px', // Adjust root margin to control when intersection is triggered
    });

    useEffect(() => {
        if (inView) {
            onIntersection(project.id);
        }
    }, [inView, onIntersection, project.id]);

    return (
        <Link href={'/'}>
            <div ref={ref}>
                <ThreeDCardDemo project={project} />
            </div>
        </Link>
    );
};

const TechPill = ({ tech }) => {
    return (
        <div className="bg-gray-50 rounded-full text-sm px-4 py-2 font-medium text-gray-900 m-1">
            {tech}
        </div>
    );
};

export default Projects;
