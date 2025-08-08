import {
  FaGithub,
  FaLinkedin,
  FaCode,
  FaTools,
  FaFileAlt,
} from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { Link } from "react-router-dom";

function Navbar() {
  const navLinkClass = "relative group hover:text-cyan-300 transition text-xl";
  const tooltipClass =
    "absolute left-1/2 -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition bg-black/80 border border-cyan-500/30 text-cyan-300 text-xs px-2 py-1 rounded whitespace-nowrap shadow-lg shadow-cyan-500/20";

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-sm border-b border-cyan-500/30 shadow-lg shadow-cyan-500/10 font-jetbrains">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3 text-white font-semibold">
        {/* Profile Picture → About Me */}
        <a href="#about-me" className="relative group transition">
          <img
            src="/pfp.jpg"
            className="w-11 h-11 border border-cyan-500/40 rounded object-cover hover:border-cyan-400 transition"
            alt="Profile"
          />
          <span className={tooltipClass}>About Me</span>
        </a>

        {/* Navigation Icons */}
        <div className="flex gap-6">
          {/* Projects */}
          <a href="#projects" className={navLinkClass}>
            <FaCode />
            <span className={tooltipClass}>Projects</span>
          </a>

          {/* Skills */}
          <a href="#skills" className={navLinkClass}>
            <FaTools />
            <span className={tooltipClass}>Skills</span>
          </a>

          {/* Resume (Internal Route) */}
          <Link to="/resume" className={navLinkClass}>
            <FaFileAlt />
            <span className={tooltipClass}>Resume</span>
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex gap-5">
          <a
            href="https://github.com/akash2003git/"
            className={navLinkClass}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
            <span className={tooltipClass}>GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/akash-tayade-/"
            className={navLinkClass}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
            <span className={tooltipClass}>LinkedIn</span>
          </a>

          <a
            href="https://x.com/akash2003_dev"
            className={navLinkClass}
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiTwitterXLine />
            <span className={tooltipClass}>X</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
