"use client";

import { LeftIntro } from './LeftIntro';
import { RightIntro } from './RightIntro';
import { FileText } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
    title: 'Home',
}

export function HomeComponenent() {
    const textArray = ["Hey,", "I'm", "Nathan", "Probert", "👋"];
    const iconSize = "48";

    return (
        <div>
            <h1 className="hidden sm:flex text-6xl font-bold justify-center mt-10">
                {textArray.map((word, i) => (
                    <div key={i}>
                        {Array.from(word).map((letter, j) => (
                            <span 
                                key={j} 
                                onMouseOver={({ target }) => (target as HTMLElement).classList.add('jump')} 
                                onAnimationEnd={({ target }) => (target as HTMLElement).classList.remove('jump')}
                                className="inline-block"
                            >
                                {letter}
                            </span>
                        ))}
                        &nbsp;
                    </div>
                ))}
            </h1>

            {/* Icon Buttons */}
            <div className="flex justify-center gap-6 mt-6">
                <Link href="https://github.com/nathan-probert" target="_blank" className="flex flex-col items-center p-2 hover:scale-125 ease-in-out duration-100">
                    <img height={iconSize} width={iconSize} src="https://cdn.simpleicons.org/github" className="dark:filter dark:invert fill-primary text-primary"/>
                </Link>
                <Link href="https://www.linkedin.com/in/nathan-probert-197463275/" target="_blank" className="flex flex-col items-center p-2 hover:scale-125 ease-in-out duration-100">
                    <img height={iconSize} width={iconSize} src="https://cdn.simpleicons.org/linkedin/black" className="dark:filter dark:invert"/>
                </Link>
                <Link href="/Nathan_Probert_Resume.pdf" target="_blank" className="flex flex-col items-center p-2 hover:scale-125 ease-in-out duration-100">
                    <FileText size={iconSize} />
                </Link>
            </div>

            {/* Layout for Left and Right Intro */}
            <div className="pt-12 sm: pt-0 grid grid-cols-1 md:grid-cols-2 gap-8 align-center">
                {/* Left half */}
                <div className="flex justify-center items-center md:ml-auto pl-4 pr-4">
                    <LeftIntro />
                </div>

                {/* Right half */}
                <div className="flex justify-center items-center pl-4 pr-4 md:pr-20">
                    <RightIntro />
                </div>
            </div>
        </div>
    );
}
