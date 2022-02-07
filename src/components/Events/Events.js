import { React, useState } from "react";
import { Container, Row, Col ,Spinner} from "react-bootstrap";
import EventCard from "./EventCards";
import monopoly from "../../Assets/monopoly.jpeg";
import ctf from "../../Assets/ctf.jpeg";
import journaling from "../../Assets/journaling.jpeg";
import {Modal1} from '../Modal/Modal1';
import {Modal2} from '../Modal/Modal2';
import {Modal3} from '../Modal/Modal3';
import {Modal2a} from '../Modal/Modal2a';
import {Modal1a} from '../Modal/Modal1a';
import {Modal3a} from '../Modal/Modal3a';
import styled from 'styled-components';
import {useEffect } from "react";
import axios from 'axios';
import url from '../../constants';


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

  const [show1, setshow1] = useState(null);
  const [reg1,setreg1] = useState(false); 
  const [load1, setLoad1] = useState(false)
  const [data1, setData1] = useState(null);


  const [show2, setshow2] = useState(null);
  const [reg2,setreg2] = useState(false); 
  const [load2, setLoad2] = useState(false)
  const [data2, setData2] = useState(null);



  
  const [show3, setshow3] = useState(null);
  const [reg3,setreg3] = useState(false); 
  const [load3, setLoad3] = useState(false)
  const [data3, setData3] = useState(null);

  useEffect(()=>{
    if(localStorage.getItem('token') !== null){
      setLoad1(true)
      setLoad2(true)
      setLoad3(true)
      var config = {
        method: 'get',
        url: `${url}/ctfevent/`,
        headers: { 
          'Authorization': `Token ${localStorage.getItem('token')}`
        }
      };
      
      axios(config)
      .then(function (response) {
        setData2(response.data)
        setLoad2(false)
        setshow2(true)
      })
      .catch(function (error) {
        setLoad2(false);
        setreg2(true)
      });

      var config1 = {
        method: 'get',
        url: url + '/monopolyevent/',
        headers: { 
          'Authorization': `Token ${localStorage.getItem('token')}`
        }
      };
    
      axios(config1)
      .then(function (response) {
        setData1(response.data)
        setLoad1(false)
        setshow1(true)
      })
      .catch(function (error) {
        setLoad1(false);
        setreg1(true)
      });
    
    
         
      var config2 = {
        method: 'get',
        url: url + '/journalingevent/',
        headers: { 
          'Authorization': `Token ${localStorage.getItem('token')}`
        }
      };
    
      axios(config2)
      .then(function (response) {
        setData3(response.data)
        setLoad3(false)
        setshow3(true)
      })
      .catch(function (error) {
        setLoad3(false);
        setreg3(true)
      });
    
    
      
    }


    
  


  },[])


  const [showModal1, setShowModal1] = useState(false);

  const openModal1 = () => {
    setShowModal1(true);
  };

  const [showModal1a, setShowModal1a] = useState(false);

  const openModal1a = () => {
    setShowModal1a(true);
  };

  const [showModal2, setShowModal2] = useState(false);

  const openModal2 = () => {
    setShowModal2(true);
  };

  const [showModal2a, setShowModal2a] = useState(false);

  const openModal2a = () => {
    setShowModal2a(true);
  };


  const [showModal3, setShowModal3] = useState(false);

  const openModal3 = () => {
    setShowModal3(true);
  };


  const [showModal3a, setShowModal3a] = useState(false);

  const openModal3a = () => {
    setShowModal3a(true);
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
              description="This will be a day-long coding competition held in teams of either 1 or 2 members. Every round will be a knockout round introducing the participants to a new aspect of coding. Round 1 will be a mystery language round where participants will be assigned a mystery language and will have to solve three questions based on that. Round 2 will be a debugging round which will act as a hint for the last round. Date : 28th Feb 2022"
              />
              <br></br>
              {reg1?<Button onClick={openModal1}>Register</Button>:null}
            <Modal1 showModal={showModal1} setShowModal={setShowModal1} />
            <Modal1a data={data1} showModal={showModal1a} setShowModal={setShowModal1a} />

            {show1?<Button onClick={openModal1a}>Know Your Team</Button>:null}
            {load1?<Spinner variant="light" animation="border" />: null}
            {!show1 && !load1 && !reg1 ? <p style={{color:"white"}} className="h4">Please Login to Register</p>:null} 

          </Col>

          <Col md={4} className="event-card">
            <EventCard
              imgPath={ctf}
              isBlog={false}
              title="Chamber of Secrets"
              description="This will be a time-based team CTF where teams of 3-4 members will be provided with a particular problem. Individual registrations are allowed, in which case the organizing committee will form teams. After solving, a clue will be generated which will direct the teams to a specific piece of the story. In the end, after clubbing all the clues, an account of a synchronous story will be formed. The teams with the most appropriate stories would be declared the winners. Date : 1st March 2022"
              
            />
            <br></br>
            {reg2?<Button onClick={openModal2}>Register</Button>:null}
            <Modal2 showModal={showModal2} setShowModal={setShowModal2} />
            <Modal2a data={data2} showModal={showModal2a} setShowModal={setShowModal2a} />

            {show2?<Button onClick={openModal2a}>Know Your Team</Button>:null}
            {load2?<Spinner variant="light" animation="border" />: null}
            {!show2 && !load2 && !reg2 ? <p style={{color:"white"}} className="h4">Please Login to Register</p>:null} 
          </Col>

          <Col md={4} className="event-card">
            <EventCard
              imgPath={journaling}
              isBlog={false}
              title="Weasly’s Pitchers"
              description="This event will be a pitching event held in teams of either 1 or 2 members. Every team will be given a product to sell and their pitch will revolve around the same.Teams are supposed to use a ppt or a poster in their pitch which would eventually exhibit their creativity and presentation skills. Date : 3rd March 2022"
              
            />
            <br></br>
            {reg3?<Button onClick={openModal3}>Register</Button>:null}
            <Modal3 showModal={showModal3} setShowModal={setShowModal3} />
            <Modal3a data={data3} showModal={showModal3a} setShowModal={setShowModal3a} />

            {show3?<Button onClick={openModal3a}>Know Your Team</Button>:null}
            {load3?<Spinner variant="light" animation="border" />: null}
            {!show3 && !load3 && !reg3 ? <p style={{color:"white"}} className="h4">Please Login to Register</p>:null} 
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Event;
