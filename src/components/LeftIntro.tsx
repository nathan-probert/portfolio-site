"use client";

import { useState, useEffect } from 'react';

export function LeftIntro() {
    const quotes: { text: string; keyword: string }[] = [
        { text: "I work with ", keyword: "Artificial Intelligence 🤖" },
        { text: "I work with ", keyword: "Machine Learning 🧠" },
        { text: "I am a ", keyword: "Computer Scientist 💻" },
        { text: "I am a ", keyword: "Software Developer 🎨" },
        { text: "I am a ", keyword: "Cloud Practitioner ☁️" },
        { text: "I work with ", keyword: "Data Analysis 🔍" },
        { text: "I work with ", keyword: "Web Design 🌐" },
    ];

    const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
    const [fade, setFade] = useState(false);

    const changeText = () => {
        setFade(true);

        setTimeout(() => {
            setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
            setFade(false);
        }, 500);
    };

    useEffect(() => {
        const intervalId = setInterval(changeText, 5000);
        return () => clearInterval(intervalId);
    }, []);

    const currentQuote = quotes[currentQuoteIndex];


    return (
        <div className="grid pt-16">
            <div className="flex flex-col justify-center relative">
                
                <p className={`block pb-0 text-4xl text-center transition-opacity duration-500 ${fade ? 'opacity-0' : 'opacity-100'}`}>
                    {currentQuote.text}
                    <span className="text-primary">
                        {currentQuote.keyword}
                    </span>

                </p>

                <p className="border-sd pt-8 text-center text-xxl leading-7 font-custom-mono tracking-wider">
                    I'm pursuing a Bachelor's in
                    Computer Science Honours with a minor in
                    Business Economics at the University of Guelph. 
                    I enjoy working with AI 🤖, data analytics 🔍, and serverless design ☁️, leveraging AWS to develop innovative projects!
                </p>


                <p className="pt-10 text-center text-2xl leading-7">
                    Check out some of my projects{" "}
                    <a className="text-blue-500 underline hover:text-blue-700" href="#projects">
                        below
                    </a> ⬇️!
                </p>

            </div>
        </div>
    );
}
