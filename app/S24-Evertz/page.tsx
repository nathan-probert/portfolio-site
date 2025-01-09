
export const metadata = {
    title: 'S24 - Evertz',
}

export default function S24() {
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
            <h1 className="text-4xl font-bold">Evertz - Summer 2024</h1>
            <p className="text-sm">Published on: September 9, 2024</p>
          </header>
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4 text-grey2 pb-1 border-b border-grey2">Introduction</h2>
            <p className="">
              &emsp;From May through August of 2024, I worked as a Software Developer Intern at
              Evertz Microsystems Ltd. in Burlington, Ontario. This report provides an overview
              of the organization, outlines my personal learning goals, and details my responsibilities
              and achievements during this work term.
            </p>
          </section>
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4 text-grey2 pb-1 border-b border-grey2">Information About Evertz</h2>
            <p className="">
              &emsp;Evertz Microsystems Ltd. is a leading global manufacturer of broadcast and
              media production equipment, offering comprehensive end-to-end solutions for broadcast,
              satellite, cable TV, and telecommunications industries.
              <br />
              <br />
              &emsp;Evertz.io is a Software as a Service platform that allows cloud video services for
              content owners and creators. This service fully manages platform maintenance, backend
              engineering, and cloud scaling, allowing customers to focus their resources entirely on
              operations. They work with companies such as Disney, Warner Bros, NBC, HBO, Paramount,
              and more.
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
            <p className="">
              &emsp;In my role at Evertz.io, I worked as a backend and frontend developer, focusing on
              tasks involving AWS services, Git management, and API development. I collaborated closely
              with team members, participated in code reviews, and regularly attended meetings to align
              on project goals. My responsibilities included designing efficient solutions using AWS,
              managing source code with Git, and working with various APIs to support the development of
              innovative media production tools.
            </p>
          </section>
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4 text-grey2 pb-1 border-b border-grey2">Goals</h2>
            <div className="">
              <h3 className="font-semibold">&emsp;-&emsp;Gain an understanding of different AWS services</h3>
              <p className="ml-6 mb-4">
                &emsp;AWS is a huge part of many backend service offerings, and I wanted to deepen my knowledge of the various services available and how they can be used to build scalable and reliable applications. To achieve this, I took on tasks that involved working with multiple AWS services such as Step Functions, S3, DynamoDB, Lambda, API Gateway, and more, gaining hands-on experience in deploying and managing cloud-based applications.<br /><br />
                &emsp;I was able to reach my goal, and take it further, learning about CloudFormation and CDK templates to create these services and resources in a more automated and scalable way. This understanding of AWS will be beneficial both in my professional career and personal projects.<br /><br /> 
              </p>
              <h3 className="font-semibold">&emsp;-&emsp;Further my understanding of the services Git offers</h3>
              <p className="ml-6 mb-4">
                &emsp;Git is a well-known control system that is used by many companies. While I have used Git before for school and personal use, I&apos;ve never been able to use Git to its full potential. As I use GitHub at Evertz, I made it a goal of mine to develop a better understanding by attending Git seminars hosted by Evertz.<br /><br />
                &emsp;I feel much more comfortable now navigating branches, pull requests, and handling merge conflicts, none of which I was able to do before my time at Evertz. This is an extremely essential skill as it is something I would be expected to know going forward, and is also very important in managing my own projects.<br /><br /> 
              </p>
              <h3 className="font-semibold">&emsp;-&emsp;Learn about working with APIs and Postman effectively</h3>
              <p className="ml-6 mb-4">
                &emsp;API&apos;s (and Websockets) are arguably the backbone of backend services. I had very little experience with API&apos;s and none with Postman going in, so I felt it was important to learn about these technologies.<br /><br />
                &emsp;To achieve this, I strived towards understanding every request and response I made through Postman, and understanding exactly how the request is parsed in the code. I reached a point where I was able to add new endpoints to both the API and Websocket, and effectively accept requests, perform tasks, and send meaningful responses.<br /><br /> 
              </p>
              <h3 className="font-semibold">&emsp;-&emsp;Improve my problem-solving skills</h3>
              <p className="ml-6">
                &emsp;Although the title is general, one of my main goals is simply developing better problem solving skills. Evertz is my first professional programming job, and the first time I am working on a code base that is not my own. I wanted to reach a level where I can be assigned a task or discover a bug, then create and implement a solution without any assistance.<br /><br />
                &emsp;Throughout my work term, I gained more and more confidence working with the code base and understanding how all the different microservices worked together. I was able to effectively troubleshoot any bugs, and I could generally complete tasks without assistance.<br /><br /> 
              </p>
            </div>
          </section>
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4 text-grey2 pb-1 border-b border-grey2">Conclusion</h2>
            <p className="">
              &emsp;Overall, this work term helped me refine my technical skills and deepen my understanding of industry-standard tools including AWS, Git, and Postman. More importantly, as my first professional work experience, I was able to see a side of software engineering that I had not experienced before. I am grateful for the guidance and support of my colleagues at Evertz, who provided valuable mentorship and helped me grow as a developer. I look forward to applying the knowledge and skills I gained during this work term to future projects and opportunities.
            </p>
          </section>
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4 text-grey2 pb-1 border-b border-grey2">Acknowledgements</h2>
            <p className="">
              &emsp;I would like to express my gratitude to the team at Evertz Microsystems for providing me with the opportunity, and all members of my team, who were very helpful and forthcoming. I&apos;d like to specifically thank Stephen Hazra and Abu Saeed for their mentorship and guidance throughout my work term.<br /><br />
              &emsp;I could not have asked for a better team to work with, and I am grateful for the experience and knowledge I gained during my time at Evertz! 
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