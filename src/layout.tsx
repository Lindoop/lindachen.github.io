import './global.css';
import { useEffect } from "react";
import Navigate from './components/Navigation';
import Title from './components/Title';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';

function Layout() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
        <div className="bg">
            <Navigate />
            <Title />
            <About />
            <Experience />
            <Projects />
            <Footer />
        </div>
  );
}

export default Layout;
