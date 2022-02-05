import { React, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import data from './data';
import SingleQuestion from './Question';

function Faq() {
  const [questions] = useState(data);
  return (
    <section>
      <Container fluid className="faq-container" id="home">
        <Container className="home-content">
        <Col style={{ justifyContent: "left",paddingTop: "-100px",margin:"-10px",border:"-20px"}}>
              <h1 className="faq-name" >
                FAQ 
              </h1>
              </Col>
          <Row style={{ justifyContent: "center",padding: "10px" }}>
            <Col md={7} style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
              marginLeft: "-110px",
            }}>
              <section className='info'>
          {questions.map((question) => {
              return (
              <SingleQuestion key={question.id} {...question} />
              );
            })
          }
        </section>
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

