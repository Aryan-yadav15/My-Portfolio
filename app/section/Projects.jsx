'use client'

import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
    const projectData = [
        { id: 1, title: 'Project 1', description: 'Description for Project 1', color: 'bg-red-500' },
        { id: 2, title: 'Project 2', description: 'Description for Project 2', color: 'bg-blue-500' },
        { id: 3, title: 'Project 3', description: 'Description for Project 3', color: 'bg-green-500' },
        // Add more projects as needed
    ];

    const [activeProjectId, setActiveProjectId] = useState(null); // Initialize with null or an initial project ID

    const handleSetActiveProject = (projectId) => {
        setActiveProjectId(projectId);
    };

    return (
        <div className='relative w-full bg-custom-gradient'>
            <div className="flex flex-row justify-between px-20">
                <div className="flex-1">
                    <section className="sticky top-0 h-screen flex flex-col justify-start pt-28">
                        <h1 className="text-9xl font-semibold text-gray-500 opacity-50">Projects</h1>
                        <p className="mt-10 text-xl text-gray-300">
                            {activeProjectId !== null && projectData.find(project => project.id === activeProjectId)?.description}
                        </p>
                    </section>
                </div>

                <section className="flex flex-col gap-20 space-y-10 pb-80 pt-[40rem] flex-1">
                    {projectData.map(project => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            onIntersection={(inView) => inView && handleSetActiveProject(project.id)}
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
        rootMargin: '0px 0px -50% 0px', // Adjust root margin to control when intersection is triggered
      });

    return (
        <div
            ref={ref}
            className={`h-[500px] w-[500px] ${project.color}`}
        >
            {inView && onIntersection(project.id)} {/* Pass project.id to onIntersection */}
        </div>
    );
};

export default Projects;
