import React from "react";
import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { RoutesCollection } from "./routes/RoutesCollection.tsx";
import Layout from "./components/layout/Layout.tsx";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {RoutesCollection.map((route, i) => (
            <Route
              key={i}
              path={route.path}
              element={<Layout>{route.element}</Layout>}
            />
          ))}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
