"use client";

import {
    HomeIcon,
    Blocks,
    BriefcaseBusinessIcon,
    CircleUserRound
} from 'lucide-react'; // Import your desired icons

import { NavButton } from '@/components/NavButton';
import { ModeToggle } from '@/components/ModeToggle';

export function Header() {
    return (
        <header className="animate-slide h-20 pt-6 sticky top-0 z-20 bg-background border-b border-primary">
            <div className="flex h-full items-center justify-between w-full">
                <div className="flex items-center gap-36">
                    <NavButton href="#top" label="Home" icon={HomeIcon} />
                </div>

                <div className="flex items-center gap-8">
                    <NavButton href="#projects" label="Projects" icon={Blocks} />
                    <NavButton href="/work" label="Work" icon={BriefcaseBusinessIcon} />
                    <NavButton href="/about" label="About Me" icon={CircleUserRound} />
                    <div className="relative nav-icon">
                        <img
                            src="/images/logo.jpg"
                            alt="SmartScore App"
                            className="object-cover h-full w-full rounded-full"
                        />
                    </div>
                    <ModeToggle />
                </div>
            </div>
        </header>
    );
}
