import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";
import Contacts from "./components/Contacts";
import Analytics from "./components/Analytics";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Contacts />} />
        <Route path="/analytics" element={<Analytics />} />
      </Routes>
    </div>
  );
}

export default App;
