import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

// Import pages
import Home from "./pages/Home/Home";
import GameInfo from "./pages/GameInfo/GameInfo";
import Tokenomics from "./pages/Tokenomics/Tokenomics";
import Roadmap from "./pages/Roadmap/Roadmap";
import Team from "./pages/Team/Team";
import FAQ from "./pages/FAQ/FAQ";
import PlayGame from "./pages/PlayGame/PlayGame";

// Import components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game-info" element={<GameInfo />} />
            <Route path="/tokenomics" element={<Tokenomics />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/team" element={<Team />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/play" element={<PlayGame />} />
            <Route
              path="*"
              element={<div className="not-found">Page Not Found</div>}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
