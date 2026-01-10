import { useEffect, useState } from "react";
import Navigate from './components/Navigation';
import Title from './components/Title';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';

function WarningOverlay({ message }: { message: string }) {
  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-center items-center text-white bg-black px-4 text-center">
      <h1 className="text-8xl font-fancy font-bold mb-10">Sorry!</h1>
      <p className="text-lg md:text-2xl mb-5">{message}</p>
      <p className="text-lg md:text-md">This website is still in the early stages of development</p>
    </div>
  );
}

function Layout() {
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    const checkWidth = () => {
      const width = window.innerWidth;
      setShowWarning(width < 900);
    };

    checkWidth();
    window.addEventListener("resize", checkWidth);

    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  if (showWarning) {
    return (
      <WarningOverlay message="Please view this website on a larger screen for the best experience!" />
    );
  }

  return (
    <div>
      <div className="bg min-w-screen min-h-screen w-screen">
          <Navigate />
          <Title />
          <About />
          <Experience />
          <Projects />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
