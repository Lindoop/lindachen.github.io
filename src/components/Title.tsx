import Astronaut from "../assets/Astronaut.png";

const SUBTITLES = [
    "Drifting above the clouds",
    "Gravity can’t hold creativity down",
    "Charting constellations of possibility",
    "Layers of sky, layers of thought",
    "Launching thoughts beyond the stratosphere",
    "Clouds above, ideas afloat",
    "Navigating unseen paths",
    "Between towers and streets",
    "From street level to skyline",
    "Rooted, yet reaching higher",
    "Layers of soil, layers of design",
    "From the ground up",
    "Foundations first, then flight",
]

export default function Title() {
    const randomSubtitle = SUBTITLES[Math.floor(Math.random() * SUBTITLES.length)];

    return (
        <div id="title" className="relative w-full h-[120vh] text-white">
            <img src={Astronaut} className="astronaut-float astronaut-float absolute top-[50vh] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[clamp(13rem,35vw,200rem)] pointer-events-none"/>
            <div className="mt-[30vh] flex flex-col">
                <div className="ml-[clamp(1rem,20vw,100rem)] text-[clamp(3rem,6vw,6rem)] font-serif">Linda</div>
                <div className="mr-[clamp(1rem,20vw,100rem)] mt-40 md:mt-20 lg:mt-0 text-end text-[clamp(5rem,10vw,14rem)] font-fancy font-bold">Chen</div>
                <div className="mt-[10vh] flex justify-center">
                    <p className="bg-black/50 px-6 py-2 rounded-2xl text-xl text-center font-serif">
                        {randomSubtitle}
                    </p>
                </div>
            </div>
        </div>
    );
}