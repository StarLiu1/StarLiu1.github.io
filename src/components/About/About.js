import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import myPhoto from "../../Assets/GradPhoto.jpg";
import { SKILLS, TOOLS} from "../../SkillsTools";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={8}
            style={{
              justifyContent: "center",
              paddingTop: "10px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2em", paddingBottom: "0px" }}>
              <strong className="purple">About Me</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col md={4} style={{ paddingTop: "80px" }} className="about-img">
            <img src={myPhoto} alt="about" className="image-style" />
          </Col>
        </Row>
        <Row className="skill-tools-wrapper">
          <Col className="skill-wrapper">
            <h1 className="project-heading">
              Professional <strong className="purple">Skillset </strong>
            </h1>
            {SKILLS.map((skill, index) => (
              <Techstack
                name={skill.name}
                initialRating={skill.initialRating}
                key={index}
              />
            ))}
          </Col>
          <Col className="skill-wrapper">
            <h1 className="project-heading">
              <strong className="purple">Tools</strong> I use
            </h1>
            {TOOLS.map((tool, index) => (
              <ul key={index} className="tool-name">
                <li>{tool}</li>
              </ul>
            ))}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
