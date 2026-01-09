import Astronaut from "../assets/Astronaut.png";

export default function Title() {
    return (
        <div id="title" className="relative w-full mt-[40vh] flex flex-col items-center text-white">
            <div className="mr-[35vw] text-7xl font-serif">
                Linda
            </div>

            <img
                src={Astronaut}
                className="astronaut-float absolute w-[25vw] bottom-15 pointer-events-none"
            />
    
            <div className="mt-4 ml-[35vw] text-9xl font-fancy font-bold">
                Chen
            </div>
    
            <p className="mt-18 text-xl font-serif">
                SYDE Student @ University of Waterloo
            </p>
        </div>
    );
  }
  