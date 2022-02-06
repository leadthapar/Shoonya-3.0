import React from "react";
import { Container, Row, Col,Spinner } from "react-bootstrap";
import Type from "./Type";
import Timer from "./Timer";
import GoogleLogin from 'react-google-login';
import axios from 'axios';
import url from '../../constants';
import {useState} from 'react';

function Home() {


  const [load, setLoad] = useState(false);
  const [error, setError] = useState(false);

  const handleFailure = (result)=>{
    alert(result);
  }

  const handleLogin = (data)=>{

    setLoad(true)
    let email = data.profileObj.email; 
    let userid = email.substring(0,email.lastIndexOf('@')) 
    let name = data.profileObj.name; 
    let imageurl = data.profileObj.imageUrl;
    let googleid = data.profileObj.googleId;

    localStorage.setItem('name',name)
    localStorage.setItem('url',imageurl);
    localStorage.setItem('email',email)
    localStorage.setItem('userid',userid)
    // localStorage.setItem('token',token)
  

 
    var data1 = JSON.stringify({
      "username": userid,
      "password": googleid + userid,
      "email": email
    });
    
    var config = {
      method: 'post',
      url: `${url}/api/v1/users/`,
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data1
    };
    
    axios(config)
    .then(function (response) {
  
      // Initiate Login Request 

      var data2 = JSON.stringify({
        "username": userid,
        "password": googleid + userid,
      });
      
      var config = {
        method: 'post',
        url: `${url}/api/v1/token/login/`,
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data2
      };
      
      axios(config)
      .then(function (response) {
        let token = response.data.auth_token 
        localStorage.setItem('token',token)
        setLoad(false);
        window.location.reload()
      })
      .catch(function (error) {
        console.log(error);
        setLoad(false);
        setError(true)
      });
      
    })
    .catch(function (error) {
      // Initiate Login Request 

      var data2 = JSON.stringify({
        "username": userid,
        "password": googleid + userid,
      });

      var config = {
        method: 'post',
        url: `${url}/api/v1/token/login/`,
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data2
      };
      
      axios(config)
      .then(function (response) {
        let token = response.data.auth_token 
        localStorage.setItem('token',token)
        setLoad(false);
        window.location.reload()
      })
      .catch(function (error) {

        setLoad(false);
        setError(true)
      });
    });



    
    
  }

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
      
    
      {localStorage.getItem('token') === null ? (
        <>
           <h4>Signin / Login with Google</h4>
        {load?(<>
          <Spinner animation="border" role="status">
          </Spinner>
        <br/><br/>
        </>): (
           <Row className="btn">
           <GoogleLogin
           buttonText="Sign in with Google"
           onSuccess={handleLogin}
           onFailure={handleFailure}
           cookiePolicy={'single_host_origin'}
           clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
           >
   
           </GoogleLogin>
           </Row>
   
        )}

{error?(<h4>Network Error Please Try Again!!</h4>):null}
        </>

      ):null}
   
          

       
  

      </Container>
      
    </section>
  );
}

export default Home;
