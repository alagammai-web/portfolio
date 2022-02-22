// import context from "react-bootstrap/esm/AccordionContext";
// import { Link } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Jobhistory from "./Jobhistory";
import Projects from "./Projects";
import Skills from "./Skills";

const Navbar = () => {
  return (
    <>
      <div className="bg-gray-800 px-3 py-3 text-gray-400 hover:text-white text-lg">
        {/* <Link to="#about" className="px-3 py-3 hover:text-white">
          About
        </Link>
        <Link to="/job-history" className="px-3 py-3 hover:text-white">
          Job History
        </Link>
        <Link to="/projects" className="px-3 py-3 hover:text-white">
          Projects
        </Link>
        <Link to="/skills" className="px-3 py-3 hover:text-white">
          Skills
        </Link>
        <Link to="#contact" className="px-3 py-3 hover:text-white">
          Contact
        </Link> */}
        <a href="#about" className="px-3 py-3 hover:text-white">
          About
        </a>
        <a href="#history" className="px-3 py-3 hover:text-white">
          Job History
        </a>
        <a href="#projects" className="px-3 py-3 hover:text-white">
          Projects
        </a>
        <a href="#skills" className="px-3 py-3 hover:text-white">
          Skills
        </a>
        <a href="#contact" className="px-3 py-3 hover:text-white">
          Contact
        </a>
      </div>
      <About />
      <Jobhistory />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
};

export default Navbar;
