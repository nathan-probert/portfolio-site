
export const metadata = {
    title: 'S25 - Evertz',
}

export default function S25() {
    return (
        <div className="max-w-4xl mx-auto my-3 p-8 relative">
            <img
                src="/images/evertz.png"
                alt="Evertz Logo"
                width={100}
                height={100}
                className="absolute top-0 right-0 mr-6"
            />
            <header className="mb-6">
                <h1 className="text-4xl font-bold">Evertz - Summer 2025</h1>
                <p className="text-sm">Published on: September 9, 2025</p>
            </header>
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-4 text-grey2 pb-1 border-b border-grey2">Introduction</h2>
                <p className="">
                    &emsp;During my work term at Evertz.io as a Cloud Developer Intern, I gained valuable experience in cloud computing, microservice design, and technical communication. The role gave me the opportunity to contribute to real-world broadcasting infrastructure while building skills in system design, documentation, and collaboration.
                </p>
            </section>
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-4 text-grey2 pb-1 border-b border-grey2">Information About Evertz</h2>
                <p className="">
                    &emsp;Evertz.io is the R&D division of Evertz Microsystems, a global leader in broadcast solutions headquartered in Burlington, Ontario. The company focuses on developing scalable and reliable cloud-based infrastructure for media and broadcasting workflows. Evertz products are widely used by broadcasters, streaming services, and content providers across the globe.
                    <br />
                    <br />
                    &emsp;I was part of the Research & Development (R&D) team, working primarily on cloud infrastructure. This role gave me exposure to technologies like AWS, Rust, Python, and modern observability tools such as Mabl and Honeycomb. Evertz.io’s focus on innovation in the broadcasting industry provided an exciting environment to apply computing science concepts in distributed systems, fault tolerance, and microservice architecture.
                </p>
                <br />
                <img
                    src="/images/coop-image.jpeg"
                    alt="Co-op experience"
                    width={800}
                    height={500}
                    className="w-full h-auto"
                />
            </section>
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-4 text-grey2 pb-1 border-b border-grey2">Job Description</h2>
                <p>As a Cloud Developer Intern, I contributed to the design and development of key features in the Evertz.io platform. Some of my major projects included:</p>
                <ul className="list-disc list-inside ml-6 space-y-2">
                    <li>
                        <strong>End-to-end delivery of a core platform feature</strong>, where I made architectural decisions, broke down tasks, and mentored teammates through code reviews and asynchronous collaboration. This experience built my leadership and technical decision-making skills.
                    </li>
                    <li>
                        <strong>Development of an adaptive retry system</strong> for channel launch failures, which reduced manual intervention by 93% and significantly improved service reliability.
                    </li>
                    <li>
                        <strong>Error handling improvements in AWS Step Functions</strong> by surfacing nested errors and parsing them into human-readable formats, reducing developer triage time.
                    </li>
                </ul>
            </section>
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-4 text-grey2 pb-1 border-b border-grey2">Goals</h2>
                <ul className="list-disc list-inside ml-6 space-y-4">
                    <li>
                        <strong>Goal 1: Expand my understanding of Microservices Architecture. </strong>
                        I analyzed the trade-offs between microservices and monolithic architectures, particularly in scalability, maintainability, and complexity. Although I did not create new services directly, I engaged in discussions around a newly developed service and gained a strong grasp of when to create a new microservice versus extend an existing one. I feel I successfully achieved this goal.
                    </li>
                    <li>
                        <strong>Goal 2: Improve my ability to clearly document technical processes. </strong>
                        I wrote multiple pages of technical documentation, some intended for non-developer audiences. These documents were clear enough to be followed without additional clarification, and I received positive feedback. Additionally, I presented technical details in calls with less technical employees, strengthening my ability to simplify complex concepts. I believe I exceeded this goal.
                    </li>
                    <li>
                        <strong>Goal 3: Develop stronger collaboration skills by co-developing solutions with team members. </strong>
                        My first major task was a joint effort with a senior engineer. While he handled the initial scoping, I led system design and implementation. Our collaboration was effective, and the feature was delivered successfully. The positive feedback I received demonstrated that I met this goal.
                    </li>
                </ul>
            </section>
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-4 text-grey2 pb-1 border-b border-grey2">Conclusion</h2>
                <p className="">
                    &emsp;During this work term, I had the opportunity to make meaningful contributions to a cloud-based broadcasting platform while also developing my technical and professional skills. Through projects such as building adaptive systems to improve reliability, surfacing errors to reduce developer triage time, and supporting teammates through code reviews and collaboration, I strengthened my ability to solve complex technical problems in a production environment. Beyond technical growth, I gained confidence in architectural decision-making, documentation, and cross-team communication, which will continue to serve me in both academic and professional contexts. Overall, this experience not only deepened my expertise in cloud computing and large-scale systems but also reinforced my passion for applying computer science to build impactful, real-world solutions.
                </p>
            </section>
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-4 text-grey2 pb-1 border-b border-grey2">Acknowledgements</h2>
                <p className="">
                    &emsp;I would like to thank my team at Evertz.io for their guidance, support, and collaboration throughout the term. Their feedback, mentorship, and willingness to share knowledge played a major role in my growth and success during this internship.
                </p>
            </section>
            <img
                src="/images/evertz-building.jpg"
                alt="Evertz Building"
                width={800}
                height={500}
                className="w-full h-auto"
            />
            <footer className="mt-6 text-right text-sm text-grey2 pb-1">
                <p>Written by: Nathan Probert</p>
            </footer>
        </div>
    );
}