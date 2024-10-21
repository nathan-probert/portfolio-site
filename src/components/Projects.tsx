import React from 'react';
import { ProjectCard } from '@/components/ProjectCard';
import { TopicHeader } from '@/components/TopicHeader';

const projects = [
    {
        logo: '/images/logo.jpg',
        title: 'SmartScore - Predict NHL Goalscorers',
        description: 'This program predicts NHL goalscorers for DraftKings bets using machine learning.',
        technologies: [
            { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
            { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' },
            { name: 'TensorFlow', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
            { name: 'pandas', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
            { name: 'NumPy', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
        ],
        githubLink: 'https://github.com/nathan-probert/smartScore',
        projectLink: '/smartscore'
    },
    {
        logo: '', // Replace with the actual icon you want to use for each project
        title: 'Project 2',
        description: 'Description of Project 2.',
        technologies: [
            { name: 'React', logo: '/logos/react.svg' },
            { name: 'Node.js', logo: '/logos/nodejs.svg' }
        ],
        githubLink: 'https://github.com/example/project2',
    },
    // Add more projects as needed
];

export function ProjectComponents() {
    return (
        <div>
            <TopicHeader title="Projects" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 pt-12">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        logo={project.logo}
                        title={project.title}
                        description={project.description}
                        technologies={project.technologies}
                        githubLink={project.githubLink}
                        projectLink={project.projectLink}
                    />
                ))}
            </div>
        </div>
    );
}
