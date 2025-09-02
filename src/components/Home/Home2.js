import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/pic.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          {/* About Me Section */}
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am passionate about{" "}
              <b className="purple">Web Development and Programming</b>.  
              Over time, I have built strong skills in{" "}
              <i>
                <b className="purple">HTML, CSS, JavaScript, C, C++, Core Java, and Python.</b>
              </i>
              <br />
              <br />
              My main focus is on creating{" "}
              <b className="purple">modern web applications</b> using the{" "}
              <b className="purple">MERN Stack</b> and tools like{" "}
              <i>
                <b className="purple">React.js, Vite, and Tailwind CSS.</b>
              </i>
              <br />
              <br />
              I enjoy developing{" "}
              <i>
                <b className="purple">scalable, responsive, and user-friendly products</b>
              </i>{" "}
              with technologies such as{" "}
              <b className="purple">Node.js and Express.js</b>, and I’m
              constantly exploring{" "}
              <b className="purple">new technologies</b> to improve my craft.
            </p>
          </Col>

          {/* Profile Image */}
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                alt="Rohit Pawar"
                style={{
                  width: "300px",
                  height: "300px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "3px solid white",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
                }}
              />
            </Tilt>
          </Col>
        </Row>

        {/* Social Links */}
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Rohit181101"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/Rohit4276"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/rohit-pawar-613a66287/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/rohit_18.11/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
