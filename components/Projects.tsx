import React from 'react';
import { ProjectCard } from './ProjectCard';
import { TopicHeader } from './TopicHeader';

const projects = [
    {
        logo: '/images/logo.jpg',
        title: 'SmartScore',
        description: "Predict NHL goalscorers for the Tim Horton's Hockey Challenge!",
        technologies: [
            { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' },
            { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
            { name: 'TensorFlow', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
            { name: 'pandas', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
            { name: 'NumPy', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
            { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
            { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
            { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
            { name: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
            { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
        ],
        githubLink: 'https://github.com/nathan-probert/smartScore',
        projectLink: '/smartscore'
    },

    {
        logo: '/images/imaginate-logo.png',
        title: 'Imaginate',
        description: "Can you tell the difference between AI and real photos? Test your skills with this daily game!",
        technologies: [
            { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' },
            { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
            { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
            { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
            { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
            { name: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
            { name: 'Flask', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
            { name: 'GitHub Actions', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg' },
        ],
        githubLink: 'https://github.com/imaginate-ai',
        projectLink: 'https://playimaginate.com/'
    },

    {
        logo: '/images/wordle-solver-logo.jpg',
        title: 'Wordle Wizard',
        description: "Helps you solve Wordle puzzles by suggesting the best words to guess next!",
        technologies: [
            { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
            { name: 'Gradle', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gradle/gradle-original.svg' },
        ],
        githubLink: 'https://github.com/nathan-probert/wordle-solver',
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
