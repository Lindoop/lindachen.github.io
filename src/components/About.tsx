import { useEffect, useRef } from "react";
import AboutMe from "../assets/AboutMe.png";
import Cloud1 from "../assets/Cloud_1.png";
import Cloud2 from "../assets/Cloud_2.png";
import Cloud3 from "../assets/Cloud_3.png";
import Cloud4 from "../assets/Cloud_4.png";
import Cloud5 from "../assets/Cloud_5.png";
import Cloud6 from "../assets/Cloud_6.png";
import Cloud7 from "../assets/Cloud_7.png";
import Cloud8 from "../assets/Cloud_8.png";
import Cloud9 from "../assets/Cloud_9.png";
import Cloud10 from "../assets/Cloud_10.png";

import Headshot from "../assets/TempHeadshot.jpg";

const CLOUD_IMAGES = [Cloud1, Cloud2, Cloud3, Cloud4, Cloud5, Cloud6, Cloud7, Cloud8, Cloud9, Cloud10];

type CloudState = {
  x: number;
  y: number;
  speed: number;
  size: number;
};

export default function About() {
    const containerRef = useRef<HTMLDivElement>(null);
    const cloudRefs = useRef<HTMLDivElement[]>([]);
    const cloudStates = useRef<CloudState[]>([]);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const containerHeight = container.clientHeight;
        const containerWidth = container.clientWidth;

        const EDGE_PADDING = 200;
        const CLOUD_HEIGHT_ESTIMATE = 150;
        const CLOUD_WIDTH_ESTIMATE = 300;

        cloudStates.current = CLOUD_IMAGES.map(() => ({
            x: Math.random() * (containerWidth + EDGE_PADDING) - EDGE_PADDING,
            y: EDGE_PADDING + Math.random() * (containerHeight - CLOUD_HEIGHT_ESTIMATE - EDGE_PADDING * 2),
            speed: 15 + Math.random() * 25,
            size: 1.2 + Math.random() * 1.5,
        }));

        let animationFrame: number;

        const animate = () => {
            cloudStates.current.forEach((cloud, i) => {
                const el = cloudRefs.current[i];
                if (!el) return;

                cloud.x += cloud.speed * (1 / 60);

                const scaledWidth = CLOUD_WIDTH_ESTIMATE * cloud.size;
                const SPAWN_BUFFER = scaledWidth * 0.5;

                if (cloud.x > containerWidth + scaledWidth + EDGE_PADDING) {
                    cloud.x = -(SPAWN_BUFFER + 40);
                    cloud.y = EDGE_PADDING + Math.random() * (containerHeight - CLOUD_HEIGHT_ESTIMATE - EDGE_PADDING * 2);
                    cloud.speed = 15 + Math.random() * 25;
                    cloud.size = 1.2 + Math.random() * 1.5;
                }

                el.style.transform = `translate(${cloud.x}px, ${cloud.y}px) scale(${cloud.size})`;
                el.style.opacity = "1";
            });

            animationFrame = requestAnimationFrame(animate);
        };

        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, []);

    const planeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const planeRefEl = planeRef.current;
        const container = containerRef.current;
        if (!planeRefEl || !container) return;
      
        const startX = window.innerWidth;
        const endX = -planeRefEl.offsetWidth;
      
        const startScroll = container.offsetTop - window.innerHeight * 1.5;
        const endScroll = container.offsetTop + container.clientHeight;
      
        const handleScroll = () => {
          const scrollY = window.scrollY;
      
          let progress = (scrollY - startScroll) / (endScroll - startScroll);
          progress = Math.min(Math.max(progress, 0), 1);
      
          const x = startX + (endX - startX) * progress;
          planeRefEl.style.transform = `translateX(${x}px)`;
          planeRefEl.style.opacity = "1";          
        };
      
        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);
      

    return (
        <div id="about" ref={containerRef} className="mt-[80vh] w-full relative overflow-hidden text-white">
            <div className="absolute pointer-events-none z-10 plane-float top-[12vh] md:top-[15vh] lg:top-0 left-0">
                <div ref={planeRef}>
                    <img src={AboutMe} className="w-200 h-auto" />
                </div>
            </div>

            {CLOUD_IMAGES.map((src, i) => (
                <div key={i}
                    ref={(el) => {
                        if (el) cloudRefs.current[i] = el;
                    }}
                    className="absolute pointer-events-none opacity-0" style={{ top: 0, left: 0 }}
                >
                    <img src={src} alt="cloud" className="w-55 h-auto" />
                </div>
            ))}

            <div className="mt-[28vh] relative z-10 flex flex-col md:flex-row items-center gap-[5vw] px-[clamp(1rem,5vw,4rem)] lg:px-0 lg:ml-[10vw]">
                <div className="max-w-2xl bg-black/40 backdrop-blur-sm rounded-4xl px-10 py-8 shadow-lg order-2 md:order-1">
                    <p className="text-[clamp(1rem,5vw,3rem)] font-fancy leading-relaxed mb-[clamp(0rem,0.5vw,1rem)]"> Hi! I’m Linda.</p>
                    <p className="text-[clamp(0.5rem,2.5vw,1.25rem)] font-body leading-relaxed mb-[clamp(0.25rem,1vw,2rem)]">
                        I’m a second-year Systems Design Engineering student at the University
                        of Waterloo. I enjoy blending my design roots with where I’m headed as
                        a developer, and over time that interest grew into a curiosity for how
                        things are built. I like building practical solutions that actually
                        solve problems, especially when they challenge me to learn along the
                        way.
                    </p>
                    <p className="text-[clamp(0.5rem,2.5vw,1.25rem)] font-body leading-relaxed">
                        Outside of class and projects, I spend a lot of time exploring new
                        tech, coding, and experimenting with side projects just to see what I
                        can make. I care about creating things that are useful, thoughtful,
                        and genuinely make people’s lives easier.
                    </p>
                </div>

                <div className="shrink-0 order-1 md:order-2">
                    <img
                        src={Headshot}
                        className="w-[clamp(10rem,31vw,60rem)] h-auto rounded-4xl bg-black/30 p-3 shadow-lg backdrop-blur-sm"
                    />
                </div>
            </div>
        </div>
    );
}
