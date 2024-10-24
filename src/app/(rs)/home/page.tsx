import { HomeComponenent } from '@/components/Home';
import { ProjectComponent } from '@/components/Projects';
import { WorkComponent } from '@/components/Work';

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
                <ProjectComponent />
            </div>

            <div id="work">
                <WorkComponent />
            </div>
        </div>
    )   
}