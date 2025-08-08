import {
  FaGithub,
  FaExternalLinkAlt,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaJsSquare,
} from "react-icons/fa";
import {
  SiMongodb,
  SiTailwindcss,
  SiExpress,
  SiCplusplus,
  SiPython,
  SiEjs,
  SiStripe,
} from "react-icons/si";

export function BodyContent() {
  return (
    <div className="text-white mb-[50px] sm:py-10 space-y-20 font-jetbrains">
      {/* About Me */}
      <section
        id="about-me"
        className="flex flex-col-reverse sm:flex-row justify-between items-center sm:items-start gap-8"
      >
        <div className="max-w-xl">
          <h2 className="text-2xl font-bold text-cyan-400 tracking-widest relative after:content-[''] after:block after:h-[1px] after:w-12 after:bg-cyan-400 after:mt-1">
            // SYSTEM.BOOTSEQ
          </h2>
          <p className="mt-4 text-sm text-cyan-400 leading-relaxed bg-black/40 p-4 rounded border border-cyan-500/30 shadow-lg shadow-cyan-500/10">
            &gt; INIT.USER: <span className="text-white">Akash Tayade</span>
            <br />
            &gt; ROLE:{" "}
            <span className="text-white">
              Full-Stack Web Developer — Nagpur, India
            </span>
            <br />
            &gt; STATUS:{" "}
            <span className="text-white">4th Year B.Tech, YCCE</span> <br />
            &gt; PASSION:{" "}
            <span className="text-white">
              Building real-world systems &amp; tech solutions
            </span>
          </p>
        </div>

        <div className="relative">
          <img
            src="/debrief.jpg"
            className="w-[15rem] rounded border border-cyan-500/40 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300"
            alt="Profile"
          />
          <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-xs text-cyan-400 bg-black/70 px-2 py-1 border border-cyan-500/30 rounded">
            [ LOG::38 ]
          </span>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="space-y-6">
        <h2 className="text-2xl font-bold text-cyan-400 tracking-widest relative after:content-[''] after:block after:h-[1px] after:w-12 after:bg-cyan-400 after:mt-1">
          // ARCHIVE.DEPLOY
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Manabu */}
          <div className="bg-black/40 border border-cyan-500/30 rounded-lg shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/40 transition-all p-4 flex flex-col">
            {/* Tech Icons */}
            <div className="flex gap-2 mb-3 text-cyan-300 text-xl">
              <SiMongodb /> <SiExpress /> <FaReact /> <FaNodeJs />{" "}
              <SiTailwindcss /> <SiStripe />
            </div>
            <h3 className="text-lg font-semibold text-cyan-300 mb-2">Manabu</h3>
            <p className="text-sm text-gray-300 mb-4">
              A modern MERN stack application where users can browse, purchase,
              and access courses with secure Stripe payments. Features include
              user/admin dashboards, protected routes, and responsive design.
            </p>
            <div className="flex gap-3 mt-auto">
              <a
                href="https://github.com/akash2003git/manabu"
                className="flex items-center gap-1 px-3 py-1 bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-sm rounded hover:bg-cyan-500/30"
              >
                <FaGithub /> GitHub
              </a>
              <a
                href="https://manabu-frontend.vercel.app/"
                className="flex items-center gap-1 px-3 py-1 bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-sm rounded hover:bg-cyan-500/30"
              >
                <FaExternalLinkAlt /> Live
              </a>
            </div>
          </div>

          {/* YelpCamp */}
          <div className="bg-black/40 border border-cyan-500/30 rounded-lg shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/40 transition-all p-4 flex flex-col">
            <div className="flex gap-2 mb-3 text-cyan-300 text-xl">
              <SiMongodb /> <SiExpress /> <FaNodeJs /> <FaBootstrap /> <SiEjs />
            </div>
            <h3 className="text-lg font-semibold text-cyan-300 mb-2">
              YelpCamp
            </h3>
            <p className="text-sm text-gray-300 mb-4">
              Yelp-inspired full stack web app to view, review, and add new
              camping sites. Built with Node, Express, MongoDB, Bootstrap, and
              EJS templating.
            </p>
            <div className="flex gap-3 mt-auto">
              <a
                href="https://github.com/akash2003git/yelp-camp"
                className="flex items-center gap-1 px-3 py-1 bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-sm rounded hover:bg-cyan-500/30"
              >
                <FaGithub /> GitHub
              </a>
              <a
                href="https://yelp-camp-au8z.onrender.com/"
                className="flex items-center gap-1 px-3 py-1 bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-sm rounded hover:bg-cyan-500/30"
              >
                <FaExternalLinkAlt /> Live
              </a>
            </div>
          </div>

          {/* OverengineeredTodoApp */}
          <div className="bg-black/40 border border-cyan-500/30 rounded-lg shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/40 transition-all p-4 flex flex-col">
            <div className="flex gap-2 mb-3 text-cyan-300 text-xl">
              <SiMongodb /> <SiExpress /> <FaReact /> <FaNodeJs />{" "}
              <SiTailwindcss />
            </div>
            <h3 className="text-lg font-semibold text-cyan-300 mb-2">
              OverengineeredTodoApp
            </h3>
            <p className="text-sm text-gray-300 mb-4">
              Full stack todo app built in the MERN stack with Tailwind for
              styling and Jotai for state management.
            </p>
            <div className="flex gap-3 mt-auto">
              <a
                href="https://github.com/akash2003git/overengineered-todo-app"
                className="flex items-center gap-1 px-3 py-1 bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-sm rounded hover:bg-cyan-500/30"
              >
                <FaGithub /> GitHub
              </a>
              <a
                href="https://overengineered-todo-app-frontend.onrender.com/"
                className="flex items-center gap-1 px-3 py-1 bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-sm rounded hover:bg-cyan-500/30"
              >
                <FaExternalLinkAlt /> Live
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="space-y-6">
        <h2 className="text-2xl font-bold text-cyan-400 tracking-widest relative after:content-[''] after:block after:h-[1px] after:w-12 after:bg-cyan-400 after:mt-1">
          // PROTOCOLS.EXE
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {[
            {
              name: "MongoDB",
              icon: <SiMongodb className="text-green-500 text-3xl" />,
            },
            {
              name: "Express",
              icon: <SiExpress className="text-gray-300 text-3xl" />,
            },
            {
              name: "React",
              icon: <FaReact className="text-cyan-300 text-3xl" />,
            },
            {
              name: "Node.js",
              icon: <FaNodeJs className="text-green-400 text-3xl" />,
            },
            {
              name: "TailwindCSS",
              icon: <SiTailwindcss className="text-cyan-400 text-3xl" />,
            },
            {
              name: "Bootstrap",
              icon: <FaBootstrap className="text-purple-500 text-3xl" />,
            },
            {
              name: "JavaScript",
              icon: <FaJsSquare className="text-yellow-300 text-3xl" />,
            },
            {
              name: "C++",
              icon: <SiCplusplus className="text-blue-400 text-3xl" />,
            },
            {
              name: "Python",
              icon: <SiPython className="text-yellow-400 text-3xl" />,
            },
          ].map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center bg-black/40 border border-cyan-500/30 rounded-lg p-4 hover:shadow-cyan-500/40 transition-all"
            >
              {skill.icon}
              <span className="mt-2 text-sm text-cyan-300">{skill.name}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default BodyContent;
