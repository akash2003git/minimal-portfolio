export default function Resume() {
  return (
    <div className="w-full h-[80vh] flex justify-center items-center">
      <iframe
        src="/resume.pdf"
        className="w-full h-full border-none"
        title="Resume"
      />
    </div>
  );
}
