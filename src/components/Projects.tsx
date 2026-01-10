import { useState } from "react";
import Fossil1 from "../assets/Fossil_1.png";
import Fossil2 from "../assets/Fossil_2.png";
import Fossil3 from "../assets/Fossil_3.png";
import Fossil4 from "../assets/Fossil_4.png";

const PROJECTS = [
    {
        id: 1,
        img: Fossil1,
        top: "4vh",
        left: "80vw",
        width: "w-[20vw]",
        title: "Personal Website",
        date: "January 2026",
        description: "A continuation of my old portfolio website, created more than three years later to showcase my improvement and build a fully custom design. I designed and developed the site from the ground up in one week, independently handling UI/UX design, implementation, and asset creation. Built with React, TypeScript, JavaScript, HTML, CSS, and TailwindCSS, I hand-drew every visual asset used throughout the website. I plan to use this as my main portfolio site, but since it is still in development, I am treating it as a university project. I hope to have it finalized by the time I graduate, reflecting on what I’ve built over the past four years starting from second year. I also plan to incorporate my old portfolio website into this one, giving that project a proper retirement."
    },
    {
        id: 2,
        img: Fossil2,
        top: "25vh",
        left: "3vw",
        width: "w-[8vw]",
        title: "Waterloo Schedule Exporter",
        date: "January 2026",
        description: "My friends and I developed a JavaScript-based schedule exporter to address the removal of existing tools for exporting university timetables. The project enables users to copy and paste schedule data directly from the University of Waterloo’s Quest system, parse course information such as class times and locations, and generate a standardized .ics calendar file for seamless integration with external calendar applications. We designed the exporter as a modular and extensible baseline, with plans to expand support to additional universities and introduce customizable export options."
    },
    {
        id: 3,
        img: Fossil3,
        top: "80vh",
        left: "9vw",
        width: "w-[12vw]",
        title: "MiniMind Discord Bot",
        date: "April 2025",
        description: "I noticed that when I switched between multiple tabs to draft messages or look up information, I often lost focus or forgot what I was working on. To stay in one place and streamline my workflow, I created a multifunctional Discord bot using Python that can help with a variety of tasks, including finding synonyms, translating text, checking grammar, and summarizing long messages. I integrated APIs from DeepL, Google Translate, and Gemini to deliver accurate, context-aware responses, and optimized performance with asynchronous API calls to reduce response times. The bot was deployed using Replit and UptimeRobot, ensuring 24/7 availability and automatic recovery from downtime."
    },
    {
        id: 4,
        img: Fossil4,
        top: "100vh",
        left: "75vw",
        width: "w-[20vw]",
        title: "Old Portfolio Website",
        date: "June 2022",
        description: "When I was in high school, I developed a personal portfolio website using HTML, CSS, and JavaScript to showcase my artwork and technical skills. I wanted to put my early web development knowledge to the test by creating a beginner-friendly site. I implemented responsive design to ensure usability across devices, from mobile phones to large desktop screens, and built dynamic, accessible UI elements for seamless navigation and reduced average page load time by 35%. Additionally, I integrated interactive visual components using Bootstrap 5 to enhance functionality and user experience."
    },
];

export default function Projects() {
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    return (
        <div id="projects" className="mt-[15vh] relative w-full h-[190vh] text-white">
            <h2 className="text-6xl font-header text-center mb-10 mt-[10vh]">Projects</h2>

            <div className="relative w-full h-full">
                {PROJECTS.map((project) => {
                    const isHovered = hoveredId === project.id;

                    return (
                        <div key={project.id}>
                            <div className="absolute cursor-pointer" style={{ top: project.top, left: project.left }}
                                onMouseEnter={() => project && setHoveredId(project.id)}
                                onMouseLeave={() => project && setHoveredId(null)}
                            >
                                <img src={project.img} className={`${project.width} h-auto transition-opacity duration-150 ${
                                        isHovered ? "opacity-70" : "opacity-100"
                                    }`}
                                />
                            </div>

                            {isHovered && project && (
                                <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
                                    <div className="relative max-w-3xl w-[80%] p-6 bg-black bg-opacity-70 rounded-lg backdrop-blur-sm pointer-events-auto">
                                        <h3 className="text-3xl font-fancy font-bold mb-1">{project.title}</h3>
                                        <p className="text-xl font-body italic mb-2">{project.date}</p>
                                        <p className="text-lg leading-relaxed">{project.description}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
