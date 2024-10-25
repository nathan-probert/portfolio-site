import React from 'react';
import { ProjectCard } from './ProjectCard';
import { TopicHeader } from './TopicHeader';

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
];

export function ProjectComponent() {
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
