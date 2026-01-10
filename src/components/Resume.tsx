export default function Resume() {
    return (
        <div
            id="resume"
            className="mt-[30vh] relative w-full text-white flex flex-col items-center" style={{ height: "clamp(70rem, 10vh + 115vw, 150rem)" }}
        >
            <div className="mt-[10vh] flex flex-col items-center w-full">
                <div className="text-[clamp(3rem,6vw,6rem)] font-header mb-4">
                    Resume
                </div>
        
                <div className="w-[60%] h-[150vh] rounded-4xl overflow-hidden shadow-xl bg-black/40 backdrop-blur-sm">
                    <iframe
                        src="/Linda_Chen_Resume.pdf"
                        className="w-full h-full"
                        title="Resume"
                    />
                </div>
            </div>
        </div>
    );
  }
  