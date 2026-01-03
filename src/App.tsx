import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";

import About from "./pages/About";
import Skill from "./pages/Skill";
import Qualification from "./pages/Qualification";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<About />} />
        <Route path="/skill" element={<Skill />} />   {/* ✅ FIX */}
        <Route path="/qualification" element={<Qualification />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}
