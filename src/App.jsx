import Navbar from "./Navbar";
import BodyContent from "./BodyContent";
import Footer from "./Footer";

function App() {
  // navbar height ~ 64px (py-3), so we offset body content
  return (
    <div className="min-h-screen flex flex-col bg-black text-white font-jetbrains selection:bg-cyan-500/30 selection:text-cyan-300">
      <Navbar />

      {/* Main Content Container */}
      <div className="flex-grow pt-20 px-4 sm:pt-24 sm:px-8 lg:pt-28 lg:px-40 2xl:px-80">
        <BodyContent />
      </div>

      {/* Footer always at bottom */}
      <Footer />
    </div>
  );
}

export default App;
