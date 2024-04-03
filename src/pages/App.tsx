import React from "react";
import { Routes, Route } from "react-router-dom";
import ExampleCommonComponent from "../components/ExampleCommonComponent";

const App: React.FC = () => {
  return (
    <main className="app">
      <Routes>
        <Route
          path="/home"
          element={
            <div>
              <ExampleCommonComponent exampleProp="Hello React Typescript Webpack World" />
            </div>
          }
        />
        <Route path="/another-route" element={<h1>I'm on another route</h1>} />
      </Routes>
    </main>
  );
};

export default App;
