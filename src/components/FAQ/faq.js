import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Faq() {
  return (
    <section>
      <Container fluid className="faq-container" id="home">
        <Container className="home-content">
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col md={7} style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}>
              <h1 className="faq-name">
                FAQ 
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
              </div>
            </Col>

            
          </Row>
        </Container>
      </Container>
      
    </section>
  );
}

export default Faq;

