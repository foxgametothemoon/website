import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./index.css";

// Import pages
import Home from "./pages/Home/Home";
import GameInfo from "./pages/GameInfo/GameInfo";
import Tokenomics from "./pages/Tokenomics/Tokenomics";
import Roadmap from "./pages/Roadmap/Roadmap";
import Team from "./pages/Team/Team";
import FAQ from "./pages/FAQ/FAQ";
import Privacy from "./pages/Privacy/Privacy";
import Terms from "./pages/Terms/Terms";

// Import components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
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
            <Route path="/privacy" element={<Privacy />} />
            <Route path="terms-of-service" element={<Terms />} />
            <Route
              path="*"
              element={<div className="not-found">Page Not Found</div>}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  </React.StrictMode>
);
