
export const metadata = {
    title: 'W26 - SAP',
}

export default function W26() {
    return (
        <div className="max-w-4xl mx-auto my-3 p-8 relative">
            <img
                src="/images/sap.png"
                alt="SAP Logo"
                width={100}
                height={100}
                className="absolute top-0 right-0 mr-6"
            />
            <header className="mb-6">
                <h1 className="text-4xl font-bold">SAP - Winter 2026</h1>
                <p className="text-sm">Published on: May 10, 2026</p>
            </header>
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-4 text-grey2 pb-1 border-b border-grey2">Introduction</h2>
                <p className="">
                    &emsp;During my work term at SAP as a Software Developer Intern, I gained experience in cloud-based software development, distributed systems, AI, and technical communication. The role provided the opportunity to contribute to enterprise-scale infrastructure while building skills in technologies such as Go, Kubernetes, and modern observability tools, as well as collaborating across teams to solve complex problems.
                </p>
            </section>
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-4 text-grey2 pb-1 border-b border-grey2">Information About SAP</h2>
                <p className="">
                    &emsp;SAP is a global enterprise software company headquartered in Walldorf, Germany, known for developing solutions that help organizations manage business operations and customer relationships. Its products are widely used across industries to support areas such as data management, analytics, and cloud-based enterprise resource planning (ERP), serving customers around the world.
                    <br />
                    <br />
                    &emsp;I was part of a software development team focused on cloud-based infrastructure and internal tooling. In this role, I worked with technologies such as Go, Kubernetes, Python, and observability platforms like Grafana, contributing to systems that support large-scale, distributed applications. SAP’s emphasis on scalability, reliability, and innovation provided a strong environment to apply concepts from distributed systems, system design, and modern software engineering practices.
                </p>
                <br />
                <img
                    src="/images/sap-building.jpg"
                    alt="SAP Building"
                    width={800}
                    height={500}
                    className="w-full h-auto"
                />
            </section>
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-4 text-grey2 pb-1 border-b border-grey2">Job Description</h2>
                <p>As a Software Developer Intern, I contributed to the development and improvement of cloud-based systems and internal tooling at SAP. Some of my major projects included:</p>
                <ul className="list-disc list-inside ml-6 space-y-2">
                    <li>
                        <strong>Ownership and resolution of a customer-facing issue</strong>, where I worked across teams to diagnose a complex database access conflict, participated in architectural discussions, and delivered a targeted fix before a critical deadline.
                    </li>
                    <li>
                        <strong>Engineering of AI-integrated developer tooling</strong>, where I built secure MCP servers for Jenkins and Grafana and integrated them with Claude Code to enable real-time access to logs and pipelines, significantly reducing debugging time.
                    </li>
                    <li>
                        <strong>Development and optimization of large-scale stress tests</strong>, where I simulated 400-pod Kubernetes scenarios and reduced execution time from 10 minutes to under 3, improving testing efficiency and system validation.
                    </li>
                </ul>
                <img
                    src="/images/guelph-sap.jpeg"
                    alt="Co-op experience"
                    width={800}
                    height={500}
                    className="w-full h-auto"
                />
            </section>
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-4 text-grey2 pb-1 border-b border-grey2">Goals</h2>
                <ul className="list-disc list-inside ml-6 space-y-4">
                    <li>
                        <strong>Goal 1: Expand my understanding and use of AI tools in software development. </strong>
                        Throughout the term, I explored and integrated AI tools such as Claude Code into my workflow to improve productivity. I developed custom MCP servers to enable secure access to internal systems, allowing AI tools to retrieve logs and interact with pipelines. I also presented a team-wide demo on best practices, contributing to broader adoption. I believe I successfully achieved this goal.
                    </li>
                    <li>
                        <strong>Goal 2: Develop proficiency in new technologies such as Go, Kubernetes, and Grafana. </strong>
                        I gained hands-on experience working with Go in a production codebase and developed a strong understanding of Kubernetes through building and testing distributed systems. I also used Grafana to investigate system behavior and debug issues. Over time, I became more confident working independently with these technologies, and I believe I achieved this goal.
                    </li>
                    <li>
                        <strong>Goal 3: Strengthen my technical communication skills. </strong>
                        I improved my ability to communicate complex technical concepts through documentation, presentations, and team discussions. I created clear internal documentation and delivered a technical demo comparing AI tools, which received positive feedback. Through ongoing collaboration, I became more confident in articulating ideas effectively, and I believe I successfully achieved this goal.
                    </li>
                </ul>
            </section>
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-4 text-grey2 pb-1 border-b border-grey2">Conclusion</h2>
                <p className="">
                    &emsp;During this work term, I had the opportunity to make meaningful contributions to enterprise-scale cloud systems while further developing my technical and professional skills. Through projects such as optimizing large-scale testing workflows, resolving complex system-level issues, and building AI-integrated developer tooling, I strengthened my ability to solve challenging problems in distributed environments. Beyond technical growth, I gained confidence in working with modern technologies, applying AI tools effectively, and communicating complex ideas through documentation and presentations. Overall, this experience deepened my understanding of cloud-based systems and reinforced my interest in building efficient, scalable, and impactful software solutions.
                </p>
            </section>
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-4 text-grey2 pb-1 border-b border-grey2">Acknowledgements</h2>
                <p className="">
                    &emsp;I would like to thank my team at SAP for their guidance, support, and collaboration throughout the term. Their feedback, mentorship, and willingness to share knowledge played a significant role in my growth and success during this internship.
                </p>
            </section>
            <div className="flex flex-row justify-center gap-6 mt-4 mb-6">
                <img
                    src="/images/sap-lego.jpg"
                    alt="SAP Lego Set"
                    width={260}
                    height={146}
                    className="rounded shadow-lg"
                />
                <img
                    src="/images/sap-welcome-kit.jpg"
                    alt="SAP Welcome Kit"
                    width={260}
                    height={146}
                    className="rounded shadow-lg"
                />
                <img
                    src="/images/sap-mario.jpg"
                    alt="SAP Mario"
                    width={260}
                    height={146}
                    className="rounded shadow-lg"
                />
            </div>
            <footer className="mt-6 text-right text-sm text-grey2 pb-1">
                <p>Written by: Nathan Probert</p>
            </footer>
        </div>
    );
}