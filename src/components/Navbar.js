import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/LEAD_white.png";
import { Link } from "react-router-dom";
import {Button,Dropdown} from 'react-bootstrap';
import {useEffect} from 'react';
import axios from 'axios';
import url from '../constants';

import {
  AiOutlineSchedule,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { FaQuestion } from "react-icons/fa";

import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [playerId,setPlayerId] = useState(null); 

  useEffect(()=>{
    
    if(localStorage.getItem('token') !== null){
      var config = {
        method: 'get',
        url: `${url}/loggedindetails/`,
        headers: { 
          'Authorization': `Token ${localStorage.getItem('token')}`
        }
      };
      
      axios(config)
      .then(function (response) {
        setPlayerId(response.data.palyerId)
        console.log(playerId)
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  
    
    
  })


  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
     
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand className="collapse navbar-collapse justify-content-end" href="/">
          <img src={logo}  style={{height:'30px'}} alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto" defaultActiveKey="#home" >
            <Nav.Item >
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "1px"  }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}

              >
                <AiOutlineUser style={{ marginBottom: "1px" }} /> About us
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/event"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "1px" }}
                />{" "}
                Events
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/schedule" onClick={() => updateExpanded(false)}>
                <AiOutlineSchedule style={{ marginBottom: "1px"  }} /> Schedule
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/sponsors"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "1px" }} /> Sponsors
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/faq" onClick={() => updateExpanded(false)}>
                <FaQuestion style={{ marginBottom: "1px"  }} /> FAQ
              </Nav.Link>
            </Nav.Item>



            {localStorage.getItem('token') !== null && playerId !== null? (
                     <Nav.Item >
                     <Dropdown className="my-3 mx-3">
             <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
               Profile
             </Dropdown.Toggle>
         
             <Dropdown.Menu variant="dark">
               <Dropdown.Item disabled>
                <h5 style={{color:"black"}}> Name : {localStorage.getItem('name')} </h5>
               </Dropdown.Item>
               <Dropdown.Item disabled><h5 style={{color:"black"}}> Player ID : {playerId}  </h5></Dropdown.Item>
               <Dropdown.Divider />
               <Dropdown.Item><Button onClick={()=>{
                 localStorage.clear()
                 window.location.reload()
               }} variant="danger" size="sm">Logout</Button></Dropdown.Item>
             </Dropdown.Menu>
           </Dropdown>
                   
                     </Nav.Item>
            ) : null}
     
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
