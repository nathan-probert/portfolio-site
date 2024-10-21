import { HomeComponenent } from '@/components/Home';
import { ProjectComponents } from '@/components/Projects';

export const metadata = {
    title: 'Home',
}

export default function Home() {
    return (
        <div>
            <div id="home">
                <HomeComponenent />
            </div>
            
            <div id="projects">
                <ProjectComponents />
            </div>
        </div>
    )   
}