import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import ProjectList from "./components/ProjectList";

const projectData = [
  { id: 1, name: "Portfolio Site", technologies: ["React", "CSS"] },
  { id: 2, name: "E-Commerce Platform", technologies: ["JavaScript", "HTML", "CSS"] },
  { id: 3, name: "Chat App", technologies: ["Node.js", "Socket.IO"] },
];

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <ProjectList projects={projectData} />
    </div>
  );
}

export default App;
