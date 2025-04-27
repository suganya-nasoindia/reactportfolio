import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import "./App.css";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Experience />
      <Projects/>
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
