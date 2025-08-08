import { Link } from "react-router-dom";

export default function Resume() {
  return (
    <div className="flex flex-col gap-4">
      {/* Back Button */}
      <Link
        to="/"
        className="inline-block w-fit bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 px-4 py-2 rounded border border-cyan-500/40 transition"
      >
        ← Back to Portfolio
      </Link>

      {/* PDF Viewer */}
      <div className="w-full h-[80vh] border border-cyan-500/30 rounded overflow-hidden shadow-lg shadow-cyan-500/20">
        <iframe
          src="/resume.pdf"
          className="w-full h-full border-none"
          title="Resume"
        />
      </div>

      {/* Download Button */}
      <a
        href="/resume.pdf"
        download
        className="inline-block w-fit bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 px-4 py-2 rounded border border-cyan-500/40 transition"
      >
        ⬇ Download Resume
      </a>
    </div>
  );
}
