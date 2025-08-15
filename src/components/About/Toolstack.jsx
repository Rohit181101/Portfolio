import React from "react";
import { Col, Row } from "react-bootstrap";
// import { SiVisualstudio, SiPostman, SiSlack, SiVercel, SiMacos } from "react-icons/si";

import { FaGithub } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { IoTerminal } from "react-icons/io5";
import { IoLogoVercel } from "react-icons/io5";
import { SiPostman } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { SiRender } from "react-icons/si";



function Toolstack() {
  return (
    
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <IoTerminal />
      </Col>
     
      <Col xs={4} md={2} className="tech-icons">
       <FaGithub />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
       <FaGitAlt />

      </Col>

       <Col xs={4} md={2} className="tech-icons">
        <IoLogoVercel />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
       <SiPostman />
      </Col>

       <Col xs={4} md={2} className="tech-icons">
         <VscVscode />
      </Col>

       <Col xs={4} md={2} className="tech-icons">
       <SiRender />
      </Col>

    </Row>
  );
}

export default Toolstack;
