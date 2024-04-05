import React from "react";
import { Routes, Route } from "react-router-dom";
import SocialDashboard from "./SocialDashboard";

import "../styles/App.css";

const App: React.FC = () => {
  return (
    <main className="app">
      <Routes>
        <Route path="/" element={<SocialDashboard />} />
      </Routes>
    </main>
  );
};

export default App;
