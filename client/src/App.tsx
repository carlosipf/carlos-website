import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Story from "./pages/Story";
import Contact from "./pages/Contact";
import Mood from "./pages/Mood";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story" element={<Story />} /> \
        <Route path="/mood" element={<Mood />} />\
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
