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

import WindowLight1 from "../assets/WindowLight_1.png";
import WindowLight2 from "../assets/WindowLight_2.png";
import WindowLight3 from "../assets/WindowLight_3.png";
import WindowLight4 from "../assets/WindowLight_4.png";
{/*
import WindowLight5 from "../assets/WindowLight_5.png";
import WindowLight6 from "../assets/WindowLight_6.png";
*/}

const WINDOWS = [
    {
        id: 1,
        img: Window1,
        top: "11%",
        left: "12%",
    },
    {
        id: 2,
        img: Window2,
        top: "5%",
        left: "0%",
    },
    {
        id: 3,
        img: Window3,
        top: "52%",
        left: "12%",
    },
    {
        id: 4,
        img: Window4,
        top: "52%",
        left: "0%",
    },
    {
        id: 5,
        img: Window5,
        top: "95%",
        left: "12%",
    },
    {
        id: 6,
        img: Window6,
        top: "100%",
        left: "0%",
    }
];
const OPEN_WINDOWS = [
    {
        id: 1,
        img: OpenWindow1,
        top: "-8%",
        left: "10%",
        width: "w-30",
    },
    {
        id: 2,
        img: OpenWindow2,
        top: "-5%",
        left: "0%",
        width: "w-33",
    },
    {
        id: 3,
        img: OpenWindow3,
        top: "-3%",
        left: "5%",
        width: "w-33",
    },
    {
        id: 4,
        img: OpenWindow4,
        top: "-5%",
        left: "0%",
        width: "w-33",
    },
    {/*
    {
        id: 5,
        img: OpenWindow5,
        top: "-2%",
        left: "2%",
        width: "w-35",
    },
    {
        id: 6,
        img: OpenWindow6,
        top: "-3%",
        left: "0%",
        width: "w-34",
    }
    */}
];
const WINDOW_LIGHTS = [
    { 
        id: 1,
        img: WindowLight1,
        top: "-65%",
        left: "17%",
        width: "w-[85vw]"
    },
    { 
        id: 2,
        img: WindowLight2,
        top: "-77%",
        left: "5%",
        width: "w-[95vw]"
    },
    { 
        id: 3,
        img: WindowLight3,
        top: "-67%",
        left: "15%",
        width: "w-[85vw]"
    },
    { 
        id: 4,
        img: WindowLight4,
        top: "-74%",
        left: "5%",
        width: "w-[95vw]"
    },
    {/*
    { 
        id: 5,
        img: WindowLight5,
        top: "-73%",
        left: "15%",
        width: "w-[85vw]"
    },
    { 
        id: 6,
        img: WindowLight6,
        top: "-65%",
        left: "3%",
        width: "w-[100vw]"
    },
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
        id: 3,
        title: "Full-Stack Developer",
        company: "Counting Opinions",
        date: "January 2025 - April 2025",
        description: "At Counting Opinions, I contributed to accelerating product release by leveraging Google Gemini AI to generate test data and produce realistic form responses. I optimized API calls to Gemini using asynchronous programming, reducing latency and improving response times by eight seconds. On the front-end, I designed the website layout using Figma wireframes, providing a clear visual blueprint that streamlined development. I also authored a technical specification outlining app features, APIs, and task assignments, serving as a roadmap for the team. Additionally, I engineered a system to format and export HTML table data into Excel using the Sheets API, enabling seamless data integration."
    },
    {
        id: 4,
        title: "Junior Web Developer",
        company: "Counting Opinions",
        date: "June 2023 - August 2024",
        description: "At Counting Opinions, I modernized charting for the system by migrating from AmCharts4 to Plotly.js and Google Charts, which enabled SVG exports and faster rendering. I integrated URL-based overlays to compare data from over 500 library locations, allowing cross-location trends to be visualized on a single chart. I also mapped all library branches using the Google Maps API, creating an interactive geographic view of system-wide data. Additionally, I upgraded to Advanced Markers after deprecation and implemented an algorithm using circular coordinate offsetting to resolve marker overlaps, ensuring clear and accurate visualization."
    },
];

export default function Experience() {
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    const getTopOffset = (windowId: number) => {
        if (windowId <= 2) return "-5%";
        return "-15%";
    };
    
    return (
        <div id="experience" className="mt-[100vh] relative w-full h-[130vh] text-white">
            <h2 className="text-7xl font-header text-center mb-20">My Experiences</h2>

            {/* Building container */}
            <div className="relative w-full h-full">
                {WINDOWS.map((win) => {
                    const openWin = OPEN_WINDOWS.find(o => o.id === win.id);
                    const lightWin = WINDOW_LIGHTS.find(l => l.id === win.id);

                    const canHover = !!openWin || !!lightWin;
                    const isHovered = hoveredId === win.id && canHover;

                    const baseZ = win.id % 2 === 0 ? 100 + win.id : 50 + win.id;
                    const lightZ = baseZ - 1;

                    return (
                        <div key={win.id}>
                            <div
                                className={`absolute ${isHovered ? "cursor-pointer" : ""}`}
                                style={{ top: win.top, left: win.left }}
                                onMouseEnter={() => canHover && setHoveredId(win.id)}
                                onMouseLeave={() => canHover && setHoveredId(null)}
                            >
                                {/* Closed window */}
                                <img
                                    src={win.img}
                                    alt="window closed"
                                    className={`w-36 h-auto relative transition-opacity duration-150 ${isHovered ? "opacity-0" : "opacity-100"}`}
                                    style={{ zIndex: baseZ }}
                                />

                                {/* Open window */}
                                {openWin && (
                                    <img
                                        src={openWin.img}
                                        alt="window open"
                                        className={`${openWin.width} absolute transition-opacity duration-150 pointer-events-none`}
                                        style={{
                                            top: openWin.top,
                                            left: openWin.left,
                                            opacity: isHovered ? 1 : 0,
                                            zIndex: baseZ
                                        }}
                                    />
                                )}
                            </div>

                            {/* Window light (outside container, still part of map so we have win/lightWin) */}
                            {isHovered && lightWin && (
                                <img
                                    src={lightWin.img}
                                    alt="window light"
                                    className={`${lightWin.width} absolute transition-opacity duration-150 pointer-events-none`}
                                    style={{
                                        top: lightWin.top,
                                        left: lightWin.left,
                                        zIndex: lightZ
                                    }}
                                />
                            )}

                            {/* Spotlighted experience text */}
                            {isHovered && EXPERIENCES.find(exp => exp.id === win.id) && (
                                <div
                                    className="absolute w-[80%] max-w-4xl p-6 text-white transition-opacity duration-300 z-500"
                                    style={{
                                        top: `calc(${win.top} + ${getTopOffset(win.id)})`,
                                        left: "35%",
                                    }}
                                >
                                    <h2 className="text-5xl font-fancy font-bold mb-2">
                                        {EXPERIENCES.find(exp => exp.id === win.id)?.title}
                                    </h2>
                                    <p className="text-2xl font-body italic mb-4">
                                        {EXPERIENCES.find(exp => exp.id === win.id)?.date}
                                    </p>
                                    <p className="text-2xl leading-relaxed">
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