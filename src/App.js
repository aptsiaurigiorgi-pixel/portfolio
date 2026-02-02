import React from "react";
import Navigation from "./components/Navigation/Navigation";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";
import CustomCursor from "./components/CustomCursor/CustomCursor";
import "./App.css";

function App() {
  return (
    <div className="app">
      {/* Custom Cursor */}
      <CustomCursor />

      {/* Film Grain Noise Overlay */}
      <div className="noise-overlay" aria-hidden="true" />

      <Navigation />
      <main>
        <Hero />
        <Projects />
        <About />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}

export default App;
