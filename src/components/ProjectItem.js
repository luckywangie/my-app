import React from "react";

function ProjectItem({ name, technologies }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <h3>{name}</h3>
      <div>
        {technologies.map((tech, index) => (
          <span key={index} style={{ marginRight: "10px", padding: "5px", backgroundColor: "#ddd" }}>
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ProjectItem;
