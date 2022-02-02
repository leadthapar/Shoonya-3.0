import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import timeline from "./timeline"
import Image from "./images";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

function schedule() {
  return (
    <section>
      <Container fluid className="schedule-section" id="schedule">
        
        <Container className="schedule-content">
          <Row style={{ justifyContent: "left",paddingTop: "-100px",margin:"-10px",border:"-20px"}}>
            <Col md={7} className="schedule-header">
                <h1 className="faq-name">
                Timeline
                </h1>
            </Col>
          </Row>
          <VerticalTimeline>
      {timeline.map(element => {
          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName="date"
              // iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<Image src='https://www.comprensivobosisio.it/vedem/wp-content/uploads/2015/03/comune21.jpg' class="time-icon"/>}
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>
              <p id="description">{element.description}</p>
            </VerticalTimelineElement>
          )
        })}
      </VerticalTimeline>
        </Container>
      </Container>
      
    </section>
  );
}

export default schedule;
