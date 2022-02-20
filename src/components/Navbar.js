import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-gray-800 px-3 py-3 text-gray-400 hover:text-white text-lg">
      {/* <h1>Portfolio</h1> */}
      <Link to="/about" className="px-3 py-3 hover:text-white">
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
      <Link to="/contact" className="px-3 py-3 hover:text-white">
        Contact
      </Link>
    </div>
  );
};

export default Navbar;
