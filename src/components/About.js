import React from "react";
import Links from "./Links";

function About() {
  return (
    <section id="about" style={{ textAlign: "center", padding: "20px", backgroundColor: "#f2f2f2" }}>
      <h2>About Me</h2>
      <p>Hi, I'm a developer passionate about creating great software.</p>
      <Links />
    </section>
  );
}

export default About;
