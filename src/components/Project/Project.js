import React from "react";
import "./Project.css";
import Container from "react-bootstrap/Container";
import ProjectCard from "./ProjectCard";
import Row from "react-bootstrap/Row";
import { projects } from "../../data.js";

function ProjectSection() {
  return (
    <section id="projects">
      <div class="projects-stuff">
        <h1>Projects</h1>
        <Container>
          <Row>
            {projects.map((proj, index) => (
              <ProjectCard proj={proj} side={index % 2} />
            ))}
          </Row>
        </Container>
      </div>
    </section>
  );
}

export default ProjectSection;