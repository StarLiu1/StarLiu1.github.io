import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/StarSDLiu3.jpg";
import SocialMedia from "../SocialMedia";
import TypeWriter from "./TypeWriter";
import { SKILLS, TOOLS} from "../../SkillsTools";
import Techstack from "../About/Techstack";

function Home() {
  const [width, setWidth] = useState(1500);
  const [height, setHeight] = useState(900);
  const [customPadding, setCustomPadding] = useState(0);

  useEffect(() => {
    if(window.innerWidth > 900){
      setWidth(500);
      setHeight(520);
    }else{
      setWidth(400);
      setHeight(320);
      setCustomPadding(20);
    }
  }, []);

  return (
    
    <section>
      <Container fluid className="home-section" id="home">
      <Container className="home-content">
        <Row >
          <Col md={12} className="home-header" style={{paddingTop: "0pt"}}>
            <img src={myImg} className="profile-pic float-start" alt="avatar" style={{ marginRight: '20px', marginBottom: '20px' }} />
            <strong style={{fontSize: "24pt"}}>
              About me
            </strong>
            <p style={{fontSize: "14pt"}}>
              With 5 years of experience and counting in biomedical informatics, data science, and public health research, I am more 
              excited than ever about the tremendous challenges and opportunities in healthcare. My goal is to leverage novel informatics solutions 
              to make impacts in clinical research and practice, chronic diseases, geriatrics, and true "health"care. 
              <br/><br/>
              One word I'd use to describe myself is "evaluation"
              (open to suggestions). I love to think and design solutions with others that solve real and hard problems in healthcare and others. 
              I go beyond the realm of my work just to keep my brain active and creative.
              <br/><br/>
              I am a 2nd year PhD student at Johns Hopkins University School of Medicine. My focus is estimating the uncertainty of machine learning for clinical decision-making 
              using decision analysis and utility theory. Concurrently, I am also conducting research on neonatal severity of illness, pediatric sepsis, and antibiotics stewardship. 
              Over the years, I have accumulated experience as a healthcare technology company intern as well as multiple researcher/analyst positions 
              across multiple academic institutions. Notably, I have conducted and published research in postpartum depression, diabetes, HIE, data quality, phenotyping, 
              information retrieval, decision-making and machine learning, readmissions, and others using various research designs, data sources, 
              and statistical methods. 
              <br/><br/>
              Huge shoutout to all the students, faculties, and mentors from all walks of life without whom I wouldn't be who I am today.
              I'd love to connect with others who share similar interests.
            </p>
          </Col>
        </Row>
        <Row className="skill-tools-wrapper" style={{paddingTop: "30pt"}}>
          <Col className="skill-wrapper">
            <h1 className="project-heading">
              <strong className="purple">Programming Skills </strong>
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
              <strong className="purple">Knowledge and Methods</strong>
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
      <Container fluid className="home-about-section" id="about" style={{paddingTop: customPadding}}>
        <Container>
          <Row>
            <Col md={12} className="home-about-social" style={{paddingTop: "10pt"}}>
              <h1>Get in Touch</h1>
              <p>
                <strong>Feel free to connect with me or schedule an one-on-one</strong>
              </p>
              <SocialMedia />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
