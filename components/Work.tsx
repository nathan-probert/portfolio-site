import React from 'react';
import { TopicHeader } from './TopicHeader';
import { WorkCard } from './WorkCard';
import { LogOut } from 'lucide-react';


const workExperiences = [
    {
        logo: '/images/evertz.png',
        company: 'Evertz.io',
        title: 'Cloud Developer Intern',
        focus: 'Cloud Infrastructure & Architecture',
        timeline: 'May 2025 - September 2025',
        description: 'Improved system reliability by automating failure recovery and reducing operational overhead across cloud services.',
        blogLink: '/S25-Evertz',
    },
    {
        logo: '/images/reservely.png',
        company: 'Reservely',
        title: 'Technical Founder',
        focus: 'Full-Stack Development & System Architecture',
        timeline: 'May 2025 - Present',
        description: 'Co-founded a startup to develop a comprehensive reservation management platform, overseeing the full software development lifecycle from concept to deployment.',
    },
    {
        logo: '/images/clearspring.png',
        company: 'Clearspring Capital Partners',
        title: 'Software Developer Contractor',
        focus: 'Fintech Automation & Financial Workflows',
        timeline: 'Mar 2025 - May 2026',
        description: 'Developed an automated capital allocation tool to handle complex waterfall distribution rules, streamlining financial workflows and reducing manual errors for the accounting team.',
    },
    {
        logo: '/images/evertz.png',
        company: 'Evertz.io',
        title: 'Software Developer Intern',
        focus: 'Cloud Infrastructure & Architecture',
        timeline: 'May 2024 - December 2024',
        description: 'Leveraged AWS services to build scalable and secure cloud infrastructure for new products and features.',
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
