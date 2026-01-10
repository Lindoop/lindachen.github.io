import { useState } from "react";

import Window1 from "../assets/Window_1.png";
import Window2 from "../assets/Window_2.png";
import Window3 from "../assets/Window_3.png";
import Window4 from "../assets/Window_4.png";
import Window5 from "../assets/Window_5.png";
import Window6 from "../assets/Window_6.png";

import OpenWindow1 from "../assets/OpenWindow_1.png";
import OpenWindow2 from "../assets/OpenWindow_2.png";
import OpenWindow3 from "../assets/OpenWindow_3.png";
import OpenWindow4 from "../assets/OpenWindow_4.png";
{/*
import OpenWindow5 from "../assets/OpenWindow_5.png";
import OpenWindow6 from "../assets/OpenWindow_6.png";
*/}

const WINDOWS = [
    {
        id: 1,
        img: Window1,
        top: "11vh",
        left: "12vw",
        width: "w-[9vw]",
    },
    {
        id: 2,
        img: Window2,
        top: "4vh",
        left: "0vw",
        width: "w-[9vw]",
    },
    {
        id: 3,
        img: Window3,
        top: "67vh",
        left: "12vw",
        width: "w-[9vw]",
    },
    {
        id: 4,
        img: Window4,
        top: "66vh",
        left: "0vw",
        width: "w-[9.25vw]",
    },
    {
        id: 5,
        img: Window5,
        top: "122vh",
        left: "12vw",
        width: "w-[8.5vw]",
    },
    {
        id: 6,
        img: Window6,
        top: "128vh",
        left: "0vw",
        width: "w-[8.75vw]",
    }
];
const OPEN_WINDOWS = [
    {
        id: 1,
        img: OpenWindow1,
        bottom: "149vh",
        left: "0vw",
        width: "w-full"
    },
    {
        id: 2,
        img: OpenWindow2,
        bottom: "135vh",
        left: "0vw",
        width: "w-full"
    },
    {
        id: 3,
        img: OpenWindow3,
        bottom: "94vh",
        left: "0vw",
        width: "w-full"
    },
    {
        id: 4,
        img: OpenWindow4,
        bottom: "82vh",
        left: "0vw",
        width: "w-full"
    },
    {/*
    {
        id: 5,
        img: OpenWindow5,
        bottom: "49vh",
        left: "0vw",
        width: "w-full"
    },
    {
        id: 6,
        img: OpenWindow6,
        bottom: "46vh",
        left: "0vw",
        width: "w-full"
    }
    */}
];

const EXPERIENCES = [
    {
        id: 1,
        title: "Front-End Developer",
        company: "FormulaTech Hacks",
        date: "April 2025 - Present",
        description: "At FormulaTech Hacks, I engineered responsive web interfaces using React, TailwindCSS, TypeScript, and Astro, creating seamless user experiences for over 200 hackathon attendees. I also developed responsive and dynamic dashboard components, working closely with the design team to ensure the site was visually engaging and functioned smoothly across all screen sizes."
    },
    { 
        id: 2,
        title: "Software Engineering Intern",
        company: "BitGo",
        date: "September 2025 - December 2025",
        description: "At BitGo, I was on the mobile development team. During my work term, I built a comprehensive test suite from scratch for a React Native mobile application, raising unit test coverage from 0% to 80%. I implemented a GitHub Action to enforce minimum code coverage thresholds, ensuring that over 100 pull requests did not reduce overall coverage. I also designed an integration testing framework using Bash to spin up test environments, enabling automated testing on every pull request.",
    },
    {
        id: 4,
        title: "Full-Stack Developer",
        company: "Counting Opinions",
        date: "January 2025 - April 2025",
        description: "At Counting Opinions, I contributed to accelerating product release by leveraging Google Gemini AI to generate test data and produce realistic form responses. I optimized API calls to Gemini using asynchronous programming, reducing latency and improving response times by eight seconds. On the front-end, I designed the website layout using Figma wireframes, providing a clear visual blueprint that streamlined development. I also authored a technical specification outlining app features, APIs, and task assignments, serving as a roadmap for the team. Additionally, I engineered a system to format and export HTML table data into Excel using the Sheets API, enabling seamless data integration."
    },
    {
        id: 3,
        title: "Junior Web Developer",
        company: "Counting Opinions",
        date: "June 2023 - August 2024",
        description: "At Counting Opinions, I modernized charting for the system by migrating from AmCharts4 to Plotly.js and Google Charts, which enabled SVG exports and faster rendering. I integrated URL-based overlays to compare data from over 500 library locations, allowing cross-location trends to be visualized on a single chart. I also mapped all library branches using the Google Maps API, creating an interactive geographic view of system-wide data. Additionally, I upgraded to Advanced Markers after deprecation and implemented an algorithm using circular coordinate offsetting to resolve marker overlaps, ensuring clear and accurate visualization."
    },
];

export default function Experience() {
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    const getTopOffset = (windowId: number) => {
        if (windowId <= 2) return -8;
        return -25;
    };      

    return (
        <div id="experience" className="mt-[40vh] relative w-full h-[235vh] text-white">
            <h2 className="text-7xl font-header text-center mt-[10vh]">My Experiences</h2>

            <div className="relative w-full h-full">
                {WINDOWS.map((win) => {
                    const openWin = OPEN_WINDOWS.find(o => o.id === win.id);
                    const canHover = !!openWin;
                    const isHovered = hoveredId === win.id && canHover;

                    const baseZ = win.id % 2 === 0 ? 100 + win.id : 50 + win.id;

                    return (
                        <div key={win.id}>
                            <div
                                className={`absolute ${isHovered ? "cursor-pointer" : ""}`}
                                style={{ top: win.top, left: win.left }}
                                onMouseEnter={() => canHover && setHoveredId(win.id)}
                                onMouseLeave={() => canHover && setHoveredId(null)}
                            >
                                <img
                                    src={win.img}
                                    alt="window closed"
                                    className={`${win.width} h-auto relative transition-opacity duration-150 ${isHovered ? "opacity-0" : "opacity-100"}`}
                                    style={{ zIndex: baseZ }}
                                />
                            </div>

                            {isHovered && openWin && (
                                <img
                                    src={openWin.img}
                                    alt="window open"
                                    className={`${openWin.width} absolute transition-opacity duration-150 pointer-events-none`}
                                    style={{
                                        bottom: openWin.bottom,
                                        left: openWin.left,
                                        opacity: 1,
                                        zIndex: baseZ + 300,
                                    }}
                                />
                            )}

                            {/* Spotlighted experience text */}
                            {isHovered && EXPERIENCES.find(exp => exp.id === win.id) && (
                                <div
                                    className="absolute w-[80%] max-w-4xl p-6 pr-10 text-white transition-opacity duration-300 z-500"
                                    style={{
                                        top: `calc(${win.top} + ${getTopOffset(win.id)}vh)`,
                                        left: "40%",
                                    }}
                                >
                                    <h2 className="text-5xl font-fancy font-bold mb-2">
                                        {EXPERIENCES.find(exp => exp.id === win.id)?.title}
                                    </h2>
                                    <p className="text-2xl font-body italic mb-4">
                                        {EXPERIENCES.find(exp => exp.id === win.id)?.date}
                                    </p>
                                    <p className="text-2xl leading-relaxed mr-20">
                                        {EXPERIENCES.find(exp => exp.id === win.id)?.description}
                                    </p>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}