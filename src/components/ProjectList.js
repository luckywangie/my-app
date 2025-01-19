import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  return (
    <section id="projects" style={{ padding: "20px" }}>
      <h2>Projects</h2>
      <div>
        {projects.map((project) => (
          <ProjectItem key={project.id} name={project.name} technologies={project.technologies} />
        ))}
      </div>
    </section>
  );
}

export default ProjectList;
