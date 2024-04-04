import React from "react";
import { Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <main className="app">
      <Routes>
        <Route path="/" element={<h1>Wolf Social Links Profile</h1>} />
      </Routes>
    </main>
  );
};

export default App;
