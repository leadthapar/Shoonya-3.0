import React from 'react';
import { Button, Modal ,Spinner} from 'react-bootstrap';
import {useState} from 'react';
import url from '../../constants';
import axios from 'axios';

function MyVerticallyCenteredModal(props) {

  const [pid1, setpid1] = useState(localStorage.getItem('playerid'))
  const [pid2, setpid2] = useState(null)
  const [did, setdid] = useState(null)
  const [teamname, setteamname] = useState(null)
  const [phone, setPhone] = useState(null)
  const [error, setError] = useState(false);
  const [errormessage, setErrorMessage] = useState(null);
  const [load, setLoad] = useState(false);



  return (
    <Modal
      {...props}
      size="550px"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title className="modal-heading" id="contained-modal-title-vcenter">
          Register Now!!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div class="row-modal">
            <div class="col-xs-2">
            <label for="label1" required>Player1 Id:</label>
            <input defaultValue={pid1} disabled onChange={(e)=>setpid1(e.target.value)} type="text" class="form-control" id="label1" placeholder="Enter 1st Player Id" required />
          </div>
          <div class="col-modal">
            <label for="phone">Enter a phone number:</label>
            <input onChange={(e)=>setPhone(e.target.value)} type="text" class="form-control" id="phone" name="phone" placeholder="9876XXXXXX" pattern="[0-9]{10}" required /><br></br>
          </div>
          </div>
          <div class="form-group">
            <label for="team-name">Team Name:</label>
            <input onChange={(e)=>setteamname(e.target.value)} type="text" class="form-control" id="team-name" placeholder="Enter your Team Name" required />
          </div>
          <div class="form-group">
            <label for="disc">Discord Id:</label>
            <input onChange={(e)=>setdid(e.target.value)} type="text" class="form-control" id="disc" placeholder="Enter Discord Id" required />
          </div>
          <div class="form-group">
            <label for="label2">Player2 Id:</label>
            <input onChange={(e)=>setpid2(e.target.value)} type="text" class="form-control" id="label2" placeholder="Enter 2nd Player Id" />
          </div>
          <button onClick={(e)=>{
            e.preventDefault()
            if(pid1 === null && pid2 === null ){
              setError(true)
            }else{
              setLoad(true)
              let data1 = {
                "teamId" : teamname,
                "discordId" : did,
                "contactNumber" : phone
              }
              if(pid1 !== null)
              data1["participant1"] = pid1;

              if(pid2 !== null)
              data1["participant2"] = pid2;
              var data = JSON.stringify(data1);
              
              var config = {
                method: 'post',
                url: `${url}/journalingevent/`,
                headers: { 
                  'Authorization': `Token ${localStorage.getItem('token')}`, 
                  'Content-Type': 'application/json'
                },
                data : data
              };
              
              axios(config)
              .then(function (response) {
                setLoad(false)
                window.location.reload()
                // Refresh Page if Everything goes right
                
              })
              .catch(function (error) {
                setLoad(false)
                setErrorMessage(error.response.data)
              });
              

            }
          

          }} class="btn btn-primary">Submit</button>
        </form>
        {load?(<Spinner className="my-3 mx-3" animation="border" role="status">
      </Spinner>):null}
      {errormessage !== null?<p className="my-3" style={{color:"red"}}>{errormessage}</p>:null}

        {error?<p className="my-3" style={{color:"red"}}>Please fill Missing Fields</p>:null}
      </Modal.Body>
      
      
      <Modal.Footer>
      
      </Modal.Footer>
    </Modal>
  );
}

export const Modal3 = ({showModal, setShowModal}) => {
    return (
        <>
        <MyVerticallyCenteredModal
        show={showModal}
        onHide={() => setShowModal(false)}
      />
        </>
    )
}