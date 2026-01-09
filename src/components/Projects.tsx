import { useState } from "react";
import Fossil1 from "../assets/Fossil_1.png";
import Fossil2 from "../assets/Fossil_2.png";

const FOSSILS = [
    { id: 1, img: Fossil1, top: "10%", left: "80%", width: "w-[20vw]" },
    { id: 2, img: Fossil2, top: "50%", left: "10%", width: "w-[8vw]" },
];

const PROJECTS = [
    {
        id: 1,
        title: "Personal Website",
        date: "January 2026",
        description: "Designed and developed a personal portfolio website from the ground up in one week, independently handling UI/UX design, implementation, and asset creation. Built the site using React, TypeScript, JavaScript, HTML, CSS, and TailwindCSS, and hand-drew every visual asset used throughout the website within the same timeframe. Implemented responsive design to ensure optimal usability across screen sizes from mobile to desktop, and built dynamic, accessible UI elements for seamless navigation, reducing average page load time by 35%. Leveraged Bootstrap 5 for social icons and interactive components to enhance visual polish and usability.",
    },
    {
        id: 2,
        title: "MiniMind Discord Bot",
        date: "April 2025",
        description: "I engineered a multifunctional Discord bot using Python that provides AI-powered grammar checking, translation, and paraphrasing. I integrated APIs from DeepL, Google Translate, and Gemini to deliver accurate, context-aware multilingual responses, and optimized performance through asynchronous API calls to reduce response times and improve the real-time user experience. The bot was deployed using Replit and UptimeRobot, ensuring 24/7 availability and automatic recovery from downtime.",
    },
];

export default function Projects() {
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    return (
        <div id="projects" className="mt-[140vh] relative w-full h-[120vh] text-white">
            <h2 className="text-6xl font-header text-center mb-10">Projects</h2>

            <div className="relative w-full h-full">
                {FOSSILS.map((fossil) => {
                    const project = PROJECTS.find(p => p.id === fossil.id);
                    const isHovered = hoveredId === fossil.id && !!project;

                    return (
                        <div key={fossil.id}>
                            {/* Fossil image */}
                            <div
                                className="absolute cursor-pointer"
                                style={{ top: fossil.top, left: fossil.left }}
                                onMouseEnter={() => project && setHoveredId(fossil.id)}
                                onMouseLeave={() => project && setHoveredId(null)}
                            >
                                <img
                                    src={fossil.img}
                                    alt="fossil"
                                    className={`${fossil.width} h-auto transition-opacity duration-150 ${
                                        isHovered ? "opacity-70" : "opacity-100"
                                    }`}
                                />
                            </div>

                            {/* Popup */}
                            {isHovered && project && (
                                <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
                                    <div className="relative max-w-3xl w-[80%] p-6 bg-black bg-opacity-70 rounded-lg backdrop-blur-sm pointer-events-auto">
                                        <h3 className="text-3xl font-fancy font-bold mb-1">
                                            {project.title}
                                        </h3>
                                        <p className="text-xl font-body italic mb-2">
                                            {project.date}
                                        </p>
                                        <p className="text-lg leading-relaxed">
                                            {project.description}
                                        </p>
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
