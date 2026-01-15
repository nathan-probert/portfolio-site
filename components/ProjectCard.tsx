import { Button } from "./ui/button"; // Ensure this path is correct based on your project structure
import Link from "next/link";

type Technology = {
    name: string;
    logo: string; // Path to the technology logo
};

type Props = {
    logo?: string; // Make logo optional
    title: string;
    description: string;
    technologies: Technology[];
    githubLink?: string;
    projectLink?: string;
};

export function ProjectCard({ 
    logo, 
    title, 
    description, 
    technologies, 
    githubLink, 
    projectLink 
}: Props) {
    return (
        <div className="border border-foreground rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full bg-zinc-800">
            <div className="flex items-center">
                {logo && ( // Only render logo if it's provided
                    <img
                        src={logo}
                        className="w-[60px] h-auto mr-5 rounded-xl"
                        alt={`${title} logo`}
                    />
                )}
                <h3 className="text-xl font-semibold">{title}</h3>
            </div>
            <p className="mt-2 text-grey">{description}</p>
            <div className="flex flex-wrap gap-1">
                {technologies.map((tech) => (
                    <div key={tech.name} className="m-1 mt-6 whitespace-nowrap">
                        <div className="group logo relative text-center transition duration-300 ease-in-out hover:scale-110">
                            <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-full font-bold text-sm text-center p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                {tech.name}
                            </div>
                            <img
                                src={tech.logo}
                                className={[
                                    'w-[50px] h-auto',
                                    tech.name === 'pandas' && 'filter dark:brightness-200',
                                    tech.name === 'Gradle' && 'filter brightness-200',
                                ].filter(Boolean).join(' ')}
                                alt={`${tech.name} logo`}
                            />
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-auto flex justify-between items-center pt-1">
                {githubLink && (
                    <Button 
                        variant="outline" 
                        asChild 
                        className="transition-transform transform hover:scale-105"
                    >
                        <Link href={githubLink} target="_blank">
                            View on GitHub
                        </Link>
                    </Button>
                )}
                {projectLink && (
                    <Button 
                        variant="default"
                        asChild 
                        className="ml-auto transition-transform transform hover:scale-105"
                    >
                        <Link href={projectLink} target="_blank">
                            View Project
                        </Link>
                    </Button>
                )}
            </div>
        </div>
        );
}
