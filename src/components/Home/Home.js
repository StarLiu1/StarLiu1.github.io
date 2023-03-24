import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/StarSDLiu3.jpg";
import SocialMedia from "../SocialMedia";
import TypeWriter from "./TypeWriter";

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
        <Container className="home-content" style={{height:"500px"}}>
          <Row>
            <Col md={6} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I am 
                <strong className="main-name"> Star Liu</strong>
              </h1>

              <p className="heading-description blockquote">
                Stardust on a bluedot
              </p>

              <div className="heading-type">
                <TypeWriter />
              </div>
            </Col>

            <Col md={5} style={{paddingTop: 30, paddingBottom: 60, width: width, height: height}}>
              <img src={myImg} className="profile-pic" alt="avatar" />
            </Col>
            <div style={{height: 10}}></div>
          </Row>
        </Container>
      </Container>
      <Container fluid className="home-about-section" id="about" style={{paddingTop: customPadding}}>
        <Container>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>Get in Touch</h1>
              <p>
                {" "}
                Whether you want to get in touch, or talk about a project.
                <br />
                <strong>Feel free to connect with me</strong>
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
