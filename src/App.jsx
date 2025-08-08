import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import BodyContent from "./BodyContent";
import Footer from "./Footer";
import Resume from "./Resume";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-black text-white font-jetbrains selection:bg-cyan-500/30 selection:text-cyan-300">
        <Navbar />

        {/* Main Content */}
        <div className="flex-grow pt-20 px-4 sm:pt-24 sm:px-8 lg:pt-28 lg:px-40 2xl:px-80">
          <Routes>
            <Route path="/" element={<BodyContent />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
