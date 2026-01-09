import { useState } from "react";
import Home from "../assets/Home.png";

export default function Navigate() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToWithOffset = (id: string) => {
    const headerHeight = document.querySelector("nav")?.getBoundingClientRect().height || 0;
    const el = document.getElementById(id);
    if (!el) return;
    const extra = 20;
    const y = el.getBoundingClientRect().top + window.scrollY - headerHeight - extra;
    history.pushState(null, "", `#${id}`);
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const navLinks = [
    { name: "About", id: "about" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" },
    { name: "Contact Me", id: "footer" },
  ];

  return (
    <>
      <nav className="bg-white w-[80%] mx-auto py-1 px-8 mt-20 rounded-full flex items-center justify-between fixed top-0 left-1/2 -translate-x-1/2 z-1000 backdrop-blur shadow-md">
        <div className="flex items-center gap-8">
          <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="absolute -left-6 focus:outline-none">
            <img src={Home} alt="Home" className="h-40 w-auto cursor-pointer hover:scale-105 transition-transform"/>
          </button>

          {/* Desktop Links */}
          <ul className="hidden md:flex gap-[clamp(1rem,3vw,4rem)] items-center font-body font-bold ml-[15vh]">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button type="button" onClick={() => scrollToWithOffset(link.id)} className="text-black transition-colors cursor-pointer font-body">
                  {link.name.toUpperCase()}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button type="button" className="text-2xl z-50" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? "×" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-1000 bg-foreground text-white md:hidden flex flex-col items-center justify-center space-y-6">
          {navLinks.map((link) => (
            <button key={link.id} type="button" className="text-primary hover:text-secondary text-2xl font-fancy"
              onClick={() => {
                setMenuOpen(false);
                setTimeout(() => scrollToWithOffset(link.id), 250);
              }}
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
