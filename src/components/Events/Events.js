import { React, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import EventCard from "./EventCards";
import monopoly from "../../Assets/monopoly.jpeg";
import ctf from "../../Assets/ctf.jpeg";
import journaling from "../../Assets/journaling.jpeg";
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
  const [showModal1, setShowModal1] = useState(false);

  const openModal1 = () => {
    setShowModal1(true);
  };
  const [showModal2, setShowModal2] = useState(false);

  const openModal2 = () => {
    setShowModal2(true);
  };
  const [showModal3, setShowModal3] = useState(false);

  const openModal3 = () => {
    setShowModal3(true);
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
              imgPath={monopoly}
              isBlog={false}
              title="Triwizard Tournament"
              description="This will be a day-long coding competition held in teams of either 1 or 2 members. Every round will be a knockout round introducing the participants to a new aspect of coding. Round 1 will be a mystery language round where participants will be assigned a mystery language and will have to solve three questions based on that. Round 2 will be a debugging round which will act as a hint for the last round. "
              />
              <br></br>
              <Button onClick={openModal1}>Register</Button>
              <Modal1 showModal={showModal1} setShowModal={setShowModal1} />
              <Button>Know Your Team</Button>
          </Col>

          <Col md={4} className="event-card">
            <EventCard
              imgPath={ctf}
              isBlog={false}
              title="Chamber of Secrets"
              description="This will be a time-based team CTF where teams of 3-4 members will be provided with a particular problem. Individual registrations are allowed, in which case the organizing committee will form teams. After solving, a clue will be generated which will direct the teams to a specific piece of the story. In the end, after clubbing all the clues, an account of a synchronous story will be formed. The teams with the most appropriate stories would be declared the winners."
              
            />
            <br></br>
            <Button onClick={openModal2}>Register</Button>
            <Modal2 showModal={showModal2} setShowModal={setShowModal2} />
            <Button>Know Your Team</Button>
          </Col>

          <Col md={4} className="event-card">
            <EventCard
              imgPath={journaling}
              isBlog={false}
              title="Weasly’s Pitchers"
              description="This event will be a pitching event held in teams of either 1 or 2 members. Every team will be given a product to sell and their pitch will revolve around the same.Teams are supposed to use a ppt or a poster in their pitch which would eventually exhibit their creativity and presentation skills"
              
            />
            <br></br>
            <Button onClick={openModal3}>Register</Button>
            <Modal3 showModal={showModal3} setShowModal={setShowModal3} />
            <Button>Know Your Team</Button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Event;
