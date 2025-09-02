import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Import your project images
import bookAudioImg from "../../Assets/Projects/Ebook.png";
import firSystemImg from "../../Assets/Projects/FRI.png";
import kisanMitraImg from "../../Assets/Projects/kisan.png";
import profileAppImg from "../../Assets/Projects/profile.png";
import portfolioImg from "../../Assets/Projects/port.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of the projects I have worked on recently.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* Book to Audio Conversion */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bookAudioImg}
              isBlog={false}
              title="Book to Audio Conversion"
              description="Developed a software solution to convert written books into audiobooks using text-to-speech synthesis. Enabled accessibility for visually impaired users and multitaskers."
              techStack="#Python #Flask #NLP"
              ghLink="https://github.com/Rohit181101" // 🔗 update to actual repo
            />
          </Col>

          {/* Digital FIR Crime Management System */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={firSystemImg}
              isBlog={false}
              title="Digital FIR Crime Management System"
              description="Created a web-based FIR filing system for online crime reporting. Improved simplicity of reporting and centralized complaint management."
              techStack="#HTML #CSS #MySQL"
              ghLink="https://github.com/Rohit181101" // 🔗 update to actual repo
            />
          </Col>

          {/* Kisan-Mitra */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kisanMitraImg}
              isBlog={false}
              title="Kisan-Mitra"
              description="Provided crop recommendations based on soil data and weather conditions. Aimed to support Indian farmers in making informed crop decisions."
              techStack="#C"
              ghLink="https://github.com/Rohit181101" // 🔗 update to actual repo
            />
          </Col>

          {/* Profile-Based Web Application */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={profileAppImg}
              isBlog={false}
              title="Profile-Based Web Application"
              description="Developed a responsive profile listing system with CRUD functionality. Integrated interactive maps for location display with features such as Search/Filter, detailed views, and admin panel."
              techStack="#HTML #CSS #JavaScript #ReactJS #MapAPI"
              ghLink="https://github.com/Rohit181101" // 🔗 update to actual repo
            />
          </Col>

          {/* Portfolio Website with React */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolioImg}
              isBlog={false}
              title="Portfolio Website with React"
              description="Designed a responsive portfolio website using React.js, improving user interaction. Leveraged Tailwind CSS for consistent, modern UI styling."
              techStack="#ReactJS #HTML5 #CSS3 #JavaScript #TailwindCSS"
              ghLink="https://github.com/Rohit181101" // 🔗 update to actual repo
              demoLink="https://your-portfolio-link.com" // 🔗 replace with live demo link
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
