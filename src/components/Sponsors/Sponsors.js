import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Sponsors() {

  return (
    <Container fluid className="resume-section" >
      <Container>
        <Row className="resume">
          <Col md={6} className="resume-left">
          <h1 className="project-heading">
          Title Sponsors
        </h1>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Sponsors;
