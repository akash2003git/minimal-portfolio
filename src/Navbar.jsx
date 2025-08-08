import {
  FaGithub,
  FaLinkedin,
  FaCode,
  FaTools,
  FaFileAlt,
} from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-sm border-b border-cyan-500/30 shadow-lg shadow-cyan-500/10 font-jetbrains">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3 text-white font-semibold">
        {/* Profile Picture */}
        <a href="#about-me" className="relative group transition">
          <img
            src="/pfp.jpg"
            className="w-11 h-11 border border-cyan-500/40 rounded object-cover hover:border-cyan-400 transition"
            alt="Profile"
          />
          <span className="absolute left-1/2 -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition bg-black/80 border border-cyan-500/30 text-cyan-300 text-xs px-2 py-1 rounded whitespace-nowrap shadow-lg shadow-cyan-500/20">
            About Me
          </span>
        </a>

        {/* Navigation Icons */}
        <div className="flex gap-6 text-xl">
          {/* Projects */}
          <a
            href="#projects"
            className="relative group hover:text-cyan-300 transition"
          >
            <FaCode />
            <span className="absolute left-1/2 -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition bg-black/80 border border-cyan-500/30 text-cyan-300 text-xs px-2 py-1 rounded whitespace-nowrap shadow-lg shadow-cyan-500/20">
              Projects
            </span>
          </a>

          {/* Skills */}
          <a
            href="#skills"
            className="relative group hover:text-cyan-300 transition"
          >
            <FaTools />
            <span className="absolute left-1/2 -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition bg-black/80 border border-cyan-500/30 text-cyan-300 text-xs px-2 py-1 rounded whitespace-nowrap shadow-lg shadow-cyan-500/20">
              Skills
            </span>
          </a>

          {/* Resume */}

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group hover:text-cyan-300 transition"
          >
            <FaFileAlt />
            <span className="absolute left-1/2 -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition bg-black/80 border border-cyan-500/30 text-cyan-300 text-xs px-2 py-1 rounded whitespace-nowrap shadow-lg shadow-cyan-500/20">
              Resume
            </span>
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-5 text-xl">
          <a
            href="https://github.com/akash2003git/"
            className="relative group hover:text-cyan-300 transition"
          >
            <FaGithub />
            <span className="absolute left-1/2 -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition bg-black/80 border border-cyan-500/30 text-cyan-300 text-xs px-2 py-1 rounded whitespace-nowrap shadow-lg shadow-cyan-500/20">
              GitHub
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/akash-tayade-/"
            className="relative group hover:text-cyan-300 transition"
          >
            <FaLinkedin />
            <span className="absolute left-1/2 -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition bg-black/80 border border-cyan-500/30 text-cyan-300 text-xs px-2 py-1 rounded whitespace-nowrap shadow-lg shadow-cyan-500/20">
              LinkedIn
            </span>
          </a>
          <a
            href="https://x.com/akash2003_dev"
            className="relative group hover:text-cyan-300 transition"
          >
            <RiTwitterXLine />
            <span className="absolute left-1/2 -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition bg-black/80 border border-cyan-500/30 text-cyan-300 text-xs px-2 py-1 rounded whitespace-nowrap shadow-lg shadow-cyan-500/20">
              X
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
