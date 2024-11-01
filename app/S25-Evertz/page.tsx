import Image from 'next/image';

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
                &emsp;AWS is a huge part of many backend service offerings, and I wanted to deepen my knowledge of the various services available and how they can be used to build scalable and reliable applications...
              </p>
              <h3 className="font-semibold">&emsp;-&emsp;Further my understanding of the services Git offers</h3>
              <p className="ml-6 mb-4">
                &emsp;Git is a well-known control system that is used by many companies. While I have used Git before...
              </p>
              <h3 className="font-semibold">&emsp;-&emsp;Learn about working with APIs and Postman effectively</h3>
              <p className="ml-6 mb-4">
                &emsp;APIs (and Websockets) are arguably the backbone of backend services. I had very little experience with APIs...
              </p>
              <h3 className="font-semibold">&emsp;-&emsp;Improve my problem-solving skills</h3>
              <p className="ml-6">
                &emsp;Although the title is general, one of my main goals is simply developing better problem-solving skills. Evertz is my first professional programming job...
              </p>
            </div>
          </section>
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4 text-grey2 pb-1 border-b border-grey2">Conclusion</h2>
            <p className="">
              &emsp;Overall, this work term helped me refine my technical skills and deepen my understanding of industry-standard tools including AWS, Git, and Postman...
            </p>
          </section>
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4 text-grey2 pb-1 border-b border-grey2">Acknowledgements</h2>
            <p className="">
              &emsp;I would like to express my gratitude to the team at Evertz Microsystems for providing me with the opportunity...
            </p>
          </section>
          <Image
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