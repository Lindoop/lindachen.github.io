import { useState } from "react";

const socialLinks = [
    {
        name: 'GitHub',
        href: 'https://github.com/Lindoop',
        icon: <i className="bi bi-github text-3xl" />
    },
    {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/linda-chen0617/',
        icon: <i className="bi bi-linkedin text-3xl" />
    },
    {
        name: 'Resume',
        href:  '/Linda_Chen_Resume.pdf',
        icon: <i className="bi bi-file-earmark-person-fill text-3xl" />
    },
];

export default function Footer() {
    const [showResume, setShowResume] = useState(false);

    return (
        <footer className="relative mt-[147.7vh] w-full text-white">
            <div className="bg-black w-full py-10 flex flex-col items-center gap-4">
                <p className="text-3xl font-fancy italic">Thanks for exploring my corner of the web!</p>
                
                <div className="px-10 py-6 flex gap-8 mt-4">
                    {socialLinks.map((link) =>
                        link.name === "Resume" ? (
                            <button
                                key={link.name}
                                onClick={() => setShowResume(true)}
                                className="hover:scale-110 transition-transform duration-200 hover:text-pink-300"
                                aria-label="Resume"
                            >
                                {link.icon}
                            </button>
                        ) : (
                            <a
                                key={link.name}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:scale-110 transition-transform duration-200 hover:text-pink-300"
                                aria-label={link.name}
                            >
                                {link.icon}
                            </a>
                        )
                    )}
                </div>
                <p className="text-sm mt-4">© 2026 Linda Chen. All rights reserved.</p>
            </div>

            {showResume && (
                <div
                    className="fixed inset-0 bg-black/80 flex justify-center items-center z-9999"
                    onClick={() => setShowResume(false)}
                >
                    <div
                        className="relative w-[90vw] max-w-4xl h-[90vh] bg-black/90 rounded-xl shadow-lg overflow-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close button */}
                        <button
                            className="absolute top-4 right-4 text-white text-2xl hover:text-pink-300"
                            onClick={() => setShowResume(false)}
                        >
                            ×
                        </button>

                        {/* PDF embed */}
                        <iframe
                            src="/Linda_Chen_Resume.pdf"
                            className="w-full h-full rounded-xl"
                            title="Resume"
                        ></iframe>
                    </div>
                </div>
            )}
        </footer>
    );
}
