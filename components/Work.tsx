import React from 'react';
import { TopicHeader } from './TopicHeader';
import { WorkCard } from './WorkCard';


const workExperiences = [
    {
        logo: '/images/evertz.png',
        company: 'Evertz.io',
        title: 'Software Developer Intern',
        focus: 'Cloud Infrastructure & Architecture',
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
                        description={work.description}
                        blogLink={work.blogLink}
                    />
                ))}
            </div>
        </div>
    );
}
