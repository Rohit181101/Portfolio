import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rohit Pawar</span> from{" "}
            <span className="purple">Baramati, India.</span>
            <br />
            I have completed my <b>B.Tech in Computer Science and Engineering</b> 
            at <b>TKIET College, Warananagar</b>.
            <br />
            <br />
            I’m passionate about{" "}
            <span className="purple">Web Development, Modern JavaScript Frameworks,</span> 
            and building innovative tech solutions that create real impact.
            <br />
            <br />
            Apart from coding, some other activities I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)", marginTop: "15px" }}>
            "Strive to build things that make a difference!"
          </p>
          <footer className="blockquote-footer">Rohit Pawar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
