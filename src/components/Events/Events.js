import { React, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import EventCard from "./EventCards";
import chatify from "../../Assets/imageevent1.png";
import {Modal1} from '../Modal/Modal1';
import {Modal2} from '../Modal/Modal2';
import {Modal3} from '../Modal/Modal3';
import styled from 'styled-components';

const Button = styled.button`
  min-width: 100px;
  padding: 16px 32px;
  border-radius: 4px;
  margin-top: 15px;
  font-size: 24px;
  cursor: pointer;
  border-color: #BF953F;
  box-shadow: 2px 2px 2px 2px rgba(0.459, 0, 0, 0.459) !important;
  color: white !important;
  background-color: transparent !important;
  opacity: 0.9 !important;
  transition: all 0.5s ease 0s !important;
  &:hover{
      transform: scale(1.02) !important;
      overflow: hidden !important;
      box-shadow: 0 4px 4px 5px rgba(0, 0, 0, 0.561) !important;
  }
`;

function Event() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };
  return (
    <Container fluid className="event-section">
      <Container>
        <h1 className="event-heading">
          Our Events
        </h1>
        
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="event-card">
            <EventCard
              imgPath={chatify}
              isBlog={false}
              title="EVENT 1"
              description="Lörem ipsum fysans hackathon och dedade. Sars nynt att dissade as. Denylig belogi airbaghjälm osågt. Kapselbryggare exol de jitt, att grit. Neogam blinga kulturell appropriering apofas nesa. Kosläpp dialig med tädobel. 
              Antisocial voras miment, respektive hadat. Tebel konfili. Orys frisparkssprej, nyns. Käprefav idisade posttologi premusam. Muvor vav liksom sode. Pongar mansskatt."
              />
              <br></br>
              <Button onClick={openModal}>Register</Button>
              <Modal1 showModal={showModal} setShowModal={setShowModal} />
              <Button>Know Your Team</Button>
          </Col>

          <Col md={4} className="event-card">
            <EventCard
              imgPath={chatify}
              isBlog={false}
              title="EVENT 2"
              description="Lörem ipsum fysans hackathon och dedade. Sars nynt att dissade as. Denylig belogi airbaghjälm osågt. Kapselbryggare exol de jitt, att grit. Neogam blinga kulturell appropriering apofas nesa. Kosläpp dialig med tädobel. 
              Antisocial voras miment, respektive hadat. Tebel konfili. Orys frisparkssprej, nyns. Käprefav idisade posttologi premusam. Muvor vav liksom sode. Pongar mansskatt."
              
            />
            <br></br>
            <Button onClick={openModal}>Register</Button>
            <Modal2 showModal={showModal} setShowModal={setShowModal} />
            <Button>Know Your Team</Button>
          </Col>

          <Col md={4} className="event-card">
            <EventCard
              imgPath={chatify}
              isBlog={false}
              title="EVENT 3"
              description="Lörem ipsum fysans hackathon och dedade. Sars nynt att dissade as. Denylig belogi airbaghjälm osågt. Kapselbryggare exol de jitt, att grit. Neogam blinga kulturell appropriering apofas nesa. Kosläpp dialig med tädobel. 
              Antisocial voras miment, respektive hadat. Tebel konfili. Orys frisparkssprej, nyns. Käprefav idisade posttologi premusam. Muvor vav liksom sode. Pongar mansskatt."
              
            />
            <br></br>
            <Button onClick={openModal}>Register</Button>
            <Modal3 showModal={showModal} setShowModal={setShowModal} />
            <Button>Know Your Team</Button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Event;
