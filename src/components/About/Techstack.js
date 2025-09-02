import React from "react";
import { Row, Col } from "react-bootstrap";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiBootstrap,
  SiTailwindcss,
  SiReact,
  SiVite,
  SiVuedotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";

function Techstack() {
  const icons = [
    { Comp: SiHtml5, key: "html5", color: "#E34F26" },
    { Comp: SiCss3, key: "css3", color: "#1572B6" },
    { Comp: SiJavascript, key: "javascript", color: "#F7DF1E" },
    { Comp: SiBootstrap, key: "bootstrap", color: "#7952B3" },
    { Comp: SiTailwindcss, key: "tailwind", color: "#06B6D4" },
    { Comp: SiReact, key: "react", color: "#61DAFB" },
    { Comp: SiVite, key: "vite", color: "#646CFF" },
    { Comp: SiVuedotjs, key: "vue", color: "#42B883" },
    { Comp: SiNodedotjs, key: "nodejs", color: "#339933" },
    { Comp: SiExpress, key: "express" }, // Express doesn’t have a brand color
    { Comp: SiMongodb, key: "mongodb", color: "#47A248" },
    { Comp: SiPostgresql, key: "postgresql", color: "#4169E1" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {icons.map(({ Comp, key, color }) => (
        <Col key={key} xs={4} md={2} className="tech-icons">
          <Comp color={color} />
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
