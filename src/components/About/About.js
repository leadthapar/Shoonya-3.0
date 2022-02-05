import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Aboutcard from "./AboutCard";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 className="abt-head" style={{ fontSize: "80px", paddingBottom: "20px", marginLeft: "-650px", marginTop: "-30px" }}>
              About Us
            </h1>
            <Aboutcard />
          </Col>
        </Row>
        <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
        </Col>
      </Container>
    </Container>
  );
}

export default About;
