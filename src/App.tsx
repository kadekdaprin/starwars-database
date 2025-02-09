import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RoutesCollection } from "./routes/RoutesCollection.tsx";
import Layout from "./components/layout/Layout.tsx";

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
