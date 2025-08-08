function Footer() {
  return (
    <footer className="w-full mt-16 bg-black/40 backdrop-blur-sm border-t border-cyan-500/30 shadow-inner shadow-cyan-500/10 font-jetbrains">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3 text-sm">
        {/* Left - "Terminal style" host address */}
        <p className="text-cyan-300 tracking-wider">://L0CALH0ST:5173</p>

        {/* Center - Optional Status */}
        <span className="hidden sm:block text-gray-400 text-xs">
          [ SYSTEM STATUS: ONLINE ]
        </span>

        {/* Right - Credits */}
        <p className="text-white hover:text-cyan-300 transition">
          ©2025 Akash Tayade
        </p>
      </div>
    </footer>
  );
}

export default Footer;
