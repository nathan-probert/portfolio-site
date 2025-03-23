"use client";

import {
    HomeIcon,
    Blocks,
    BriefcaseBusinessIcon,
} from 'lucide-react'; // Import your desired icons

import { NavButton } from './NavButton';
import { ModeToggle } from './ModeToggle';

export function Header() {
    return (
        <header className="h-20 pt-6 sticky top-0 z-20 bg-background pb-3 border-b border-primary">
            <div className="flex h-full items-center justify-between w-full">
                <div className="flex items-center gap-36">
                    <NavButton href="https://nathanprobert.ca/home#top" label="Home" icon={HomeIcon} />
                </div>

                <div className="flex items-center gap-8">
                    <NavButton href="https://nathanprobert.ca/home#projects" label="Projects" icon={Blocks} />
                    <NavButton href="/home#work" label="Work" icon={BriefcaseBusinessIcon} />
                    {/* <NavButton href="/about" label="About Me" icon={CircleUserRound} /> */}
                    <div className="relative nav-icon">
                        <a href="https://smartscore.nathanprobert.ca">
                            <img
                                src="/images/logo.jpg"
                                alt="SmartScore App"
                                className="object-cover h-full w-full rounded-full"
                            />
                        </a>
                    </div>
                    <ModeToggle />
                </div>
            </div>
        </header>
    );
}
