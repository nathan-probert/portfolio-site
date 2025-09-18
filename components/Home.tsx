"use client";

import { LeftIntro } from './LeftIntro';
import { RightIntro } from './RightIntro';
import Link from 'next/link';

export const metadata = {
    title: 'Home',
}

export function HomeComponenent() {
    const textArray = ["Hey,", "I'm", "Nathan", "Probert", "👋"];
    const iconSize = "55";

    return (
        <div>
            <h1 className="hidden sm:flex text-6xl font-bold justify-center mt-10">
                {textArray.map((word, i) => (
                    <div key={i}>
                        {Array.from(word).map((letter, j) => (
                            <span
                                key={j}
                                onMouseOver={({ target }) => (target as HTMLElement).classList.add('jump')}
                                onAnimationEnd={({ target }) => (target as HTMLElement).classList.remove('jump')}
                                className="inline-block"
                            >
                                {letter}
                            </span>
                        ))}
                        &nbsp;
                    </div>
                ))}
            </h1>

            {/* Icon Buttons */}
            <div className="flex justify-center gap-6 mt-6">
                <Link href="https://github.com/nathan-probert" target="_blank" className="flex flex-col items-center p-2 hover:scale-125 ease-in-out duration-100">
                    <svg xmlns="http://www.w3.org/2000/svg" width={iconSize} height={iconSize} viewBox="0 0 75 75" fill="white"><path d="M37.5 6.25C33.3962 6.25 29.3326 7.05831 25.5411 8.62876C21.7497 10.1992 18.3047 12.5011 15.4029 15.4029C9.5424 21.2634 6.25 29.212 6.25 37.5C6.25 51.3125 15.2188 63.0313 27.625 67.1875C29.1875 67.4375 29.6875 66.4688 29.6875 65.625C29.6875 64.9063 29.6875 62.9375 29.6875 60.3438C21.0312 62.2188 19.1875 56.1562 19.1875 56.1562C17.75 52.5312 15.7188 51.5625 15.7188 51.5625C12.875 49.625 15.9375 49.6875 15.9375 49.6875C19.0625 49.9063 20.7187 52.9063 20.7187 52.9063C23.4375 57.6563 28.0312 56.25 29.8125 55.5C30.0937 53.4688 30.9062 52.0938 31.7812 51.3125C24.8437 50.5313 17.5625 47.8438 17.5625 35.9375C17.5625 32.4688 18.75 29.6875 20.7812 27.4688C20.4687 26.6875 19.375 23.4375 21.0937 19.2188C21.0937 19.2188 23.7187 18.375 29.6875 22.4063C32.1562 21.7188 34.8437 21.375 37.5 21.375C40.1562 21.375 42.8437 21.7188 45.3125 22.4063C51.2812 18.375 53.9062 19.2188 53.9062 19.2188C55.625 23.4375 54.5312 26.6875 54.2187 27.4688C56.25 29.6875 57.4375 32.4688 57.4375 35.9375C57.4375 47.875 50.125 50.5 43.1562 51.2813C44.2812 52.25 45.3125 54.1563 45.3125 57.0625C45.3125 61.25 45.3125 64.625 45.3125 65.625C45.3125 66.4688 45.8125 67.4688 47.4062 67.1875C59.8125 63 68.75 51.3125 68.75 37.5C68.75 33.3962 67.9417 29.3326 66.3712 25.5411C64.8008 21.7497 62.4989 18.3047 59.5971 15.4029C56.6953 12.5011 53.2503 10.1992 49.4589 8.62876C45.6674 7.05831 41.6038 6.25 37.5 6.25Z" /></svg>
                </Link>
                <Link href="https://www.linkedin.com/in/nathanprobert/" target="_blank" className="flex flex-col items-center p-2 hover:scale-125 ease-in-out duration-100">
                    <svg xmlns="http://www.w3.org/2000/svg" width={iconSize} height={iconSize} viewBox="0 0 75 75" fill="white"><path d="M59.375 9.375C61.0326 9.375 62.6223 10.0335 63.7944 11.2056C64.9665 12.3777 65.625 13.9674 65.625 15.625V59.375C65.625 61.0326 64.9665 62.6223 63.7944 63.7944C62.6223 64.9665 61.0326 65.625 59.375 65.625H15.625C13.9674 65.625 12.3777 64.9665 11.2056 63.7944C10.0335 62.6223 9.375 61.0326 9.375 59.375V15.625C9.375 13.9674 10.0335 12.3777 11.2056 11.2056C12.3777 10.0335 13.9674 9.375 15.625 9.375H59.375ZM57.8125 57.8125V41.25C57.8125 38.5481 56.7392 35.9569 54.8287 34.0463C52.9181 32.1358 50.3269 31.0625 47.625 31.0625C44.9688 31.0625 41.875 32.6875 40.375 35.125V31.6562H31.6562V57.8125H40.375V42.4062C40.375 40 42.3125 38.0312 44.7188 38.0312C45.8791 38.0312 46.9919 38.4922 47.8123 39.3127C48.6328 40.1331 49.0938 41.2459 49.0938 42.4062V57.8125H57.8125ZM21.5 26.75C22.8924 26.75 24.2277 26.1969 25.2123 25.2123C26.1969 24.2277 26.75 22.8924 26.75 21.5C26.75 18.5938 24.4062 16.2188 21.5 16.2188C20.0993 16.2188 18.756 16.7752 17.7656 17.7656C16.7752 18.756 16.2188 20.0993 16.2188 21.5C16.2188 24.4062 18.5938 26.75 21.5 26.75ZM25.8438 57.8125V31.6562H17.1875V57.8125H25.8438Z" /></svg>
                </Link>
                <Link href="/Nathan_Probert_Resume.pdf" target="_blank" className="flex flex-col items-center p-2 hover:scale-125 ease-in-out duration-100">
                    <svg xmlns="http://www.w3.org/2000/svg" width={iconSize} height={iconSize} viewBox="0 0 75 75" fill="white"><path d="M62.5 25L37.5 40.625L12.5 25V18.75L37.5 34.375L62.5 18.75M62.5 12.5H12.5C9.03125 12.5 6.25 15.2813 6.25 18.75V56.25C6.25 57.9076 6.90848 59.4973 8.08058 60.6694C9.25268 61.8415 10.8424 62.5 12.5 62.5H62.5C64.1576 62.5 65.7473 61.8415 66.9194 60.6694C68.0915 59.4973 68.75 57.9076 68.75 56.25V18.75C68.75 15.2813 65.9375 12.5 62.5 12.5Z" /></svg>
                </Link>
            </div>

            {/* Layout for Left and Right Intro */}
            <div className="pt-0 sm: pt-0 grid grid-cols-1 md:grid-cols-2 gap-8 align-center">
                {/* Left half */}
                <div className="flex justify-center items-center md:ml-auto pl-4 pr-4">
                    <LeftIntro />
                </div>

                {/* Right half */}
                <div className="flex justify-center items-center pl-4 pr-4 md:pr-20">
                    <RightIntro />
                </div>
            </div>
        </div>
    );
}
