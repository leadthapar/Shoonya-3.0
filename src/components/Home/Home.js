import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Type from "./Type";
import Timer from "./Timer";
import Button from "./Button";

function Home() {
  return (  
    <section>
      <Container fluid className="home-section" id="home">
        
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 className="heading-name">
                Welcome to LEAD Society
              </h1>
              <div style={{ padding:"50px", textAlign: "left" }}>
                <Type />
              </div>
              
            </Col>
            
          </Row>
          <div>
          <Timer />
          </div>
          
        </Container>
        <Row>
          
        
        
        </Row>
        <Row className="btn">
        <Button />
        </Row>
      </Container>
      
    </section>
  );
}

export default Home;
