import { LeftIntro } from '@/components/LeftIntro';
import { RightIntro } from '@/components/RightIntro';

export const metadata = {
    title: 'Projects',
}

export function Projects() {
    return (
        <div className="grid grid-cols-2 pt-24">
            {/* Left half */}
            <div className="flex justify-center items-center ml-auto pl-2">
                <LeftIntro />
            </div>

            {/* Right half */}
            <div className="flex flex-col justify-center items-center ml-auto pr-2">
                <RightIntro />
            </div>
        </div>
    )
}