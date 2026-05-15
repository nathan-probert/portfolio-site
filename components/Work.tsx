import React from 'react';
import { TopicHeader } from './TopicHeader';
import { WorkCard } from './WorkCard';


const workExperiences = [
    {
        logo: '/images/hubspot.png',
        company: 'HubSpot',
        title: 'Software Engineer Intern',
        focus: 'Developer Infrastructure & Security',
        timeline: 'May 2026 - August 2026',
        description:
            'Incoming intern on the Developer Infrastructure & Security team, working on backend systems that support platform security and internal tooling.',
        blogLink: '',
    },
    {
        logo: '/images/sap.png',
        company: 'SAP',
        title: 'Software Developer Intern',
        focus: 'Cloud Infrastructure & Developer Tools',
        timeline: 'January 2026 - May 2026',
        description:
            'Built Kubernetes stress-testing systems and internal MCP integrations to improve CI reliability and enable AI-assisted debugging workflows.',
        blogLink: '/W26-SAP',
    },
    {
        logo: '/images/evertz.png',
        company: 'Evertz.io',
        title: 'Software Developer Intern',
        focus: 'Distributed Systems & Reliability',
        timeline: 'May 2025 - September 2025',
        description:
            'Improved cloud system reliability through automated failure recovery and reduced operational overhead across distributed services.',
        blogLink: '/S25-Evertz',
    },
    {
        logo: '/images/evertz.png',
        company: 'Evertz.io',
        title: 'Software Developer Intern',
        focus: 'CI/CD Systems & Cloud Platform Engineering',
        timeline: 'May 2024 - December 2024',
        description:
            'Built and optimized cloud tooling and CI/CD pipelines to improve deployment speed, reliability, and operational security.',
        blogLink: '/S24-Evertz',
    },
];

export function WorkComponent() {
    return (
        <div>
            <TopicHeader title="Work" />
            <div className="grid grid-cols-1 gap-4 p-4 pt-12 mx-auto w-full max-w-3xl">
                {workExperiences.map((work, index) => (
                    <WorkCard
                        key={index}
                        logo={work.logo}
                        company={work.company}
                        title={work.title}
                        focus={work.focus}
                        timeline={work.timeline}
                        description={work.description}
                        blogLink={work.blogLink}
                    />
                ))}
            </div>
        </div>
    );
}
