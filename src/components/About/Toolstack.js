import React from "react";
import { Row, Col } from "react-bootstrap";
import { FaGithub, FaGitAlt } from "react-icons/fa";
import { IoTerminal } from "react-icons/io5";
import { SiPostman, SiRender, SiVercel, SiVisualstudiocode } from "react-icons/si";

function Toolstack() {
  const tools = [
    { Comp: IoTerminal, key: "terminal" },
    { Comp: FaGithub, key: "github" },
    { Comp: FaGitAlt, key: "git" },
    { Comp: SiVisualstudiocode, key: "vscode" }, // ✅ fixed
    { Comp: SiPostman, key: "postman" },
    { Comp: SiVercel, key: "vercel" },
    { Comp: SiRender, key: "render" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map(({ Comp, key }) => (
        <Col key={key} xs={4} md={2} className="tech-icons">
          <Comp />
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
