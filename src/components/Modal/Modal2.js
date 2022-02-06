import React from 'react';
import { Button, Modal ,Spinner} from 'react-bootstrap';
import {useState} from 'react';
import axios from 'axios';
import url from '../../constants';


function MyVerticallyCenteredModal(props) {


  const [pid1, setpid1] = useState(null)
  const [pid2, setpid2] = useState(null)
  const [pid3, setpid3] = useState(null)
  const [pid4, setpid4] = useState(null)
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
          Registration for CTF Event
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={()=>{

        }}>
          <div class="row-modal">
            <div class="col-xs-2">
            <label for="label1" required>Player1 Id:</label>
            <input onChange={(e)=>setpid1(e.target.value)} type="text" class="form-control" id="label1" placeholder="Enter 1st Player Id" required />
          </div>
          <div class="col-modal">
            <label for="phone">Enter a phone number:</label>
            <input onChange={(e)=>setPhone(e.target.value)} type="text" class="form-control" id="phone" name="phone" placeholder="9876XXXXXX" pattern="[0-9]{10}" required /><br></br>
          </div>
          </div>
          <div class="form-group">
            <label for="team-name">Team Name:</label>
            <input onChange={(e)=>setteamname(e.target.value)} type="text" class="form-control" id="team-name" placeholder="Enter your Team Name" required/>
          </div>
          <div class="form-group">
            <label for="disc">Discord Id:</label>
            <input onChange={(e)=>setdid(e.target.value)} type="text" class="form-control" id="disc" placeholder="Enter Discord Id" required />
          </div>
          <div class="form-group">
            <label for="label2">Player2 Id:</label>
            <input onChange={(e)=>setpid2(e.target.value)} type="text" class="form-control" id="label2" placeholder="Enter 2nd Player Id" />
          </div>
          <div class="form-group">
            <label for="label3">Player3 Id:</label>
            <input onChange={(e)=>setpid3(e.target.value)} type="text" class="form-control" id="label3" placeholder="Enter 3rd Player Id" />
          </div>
          <div class="form-group">
            <label for="label4">Player 4 Id:</label>
            <input onChange={(e)=>setpid4(e.target.value)} type="text" class="form-control" id="label4" placeholder="Enter 4th Player Id" />
          </div>
          <button onClick={(e)=>{
            e.preventDefault()
            if(pid1 === null || pid2 === null || pid3 === null || pid4 === null){
              setError(true)
            }else{
              setLoad(true)
              var data = JSON.stringify({
                "teamId": teamname,
                "participant1": pid1,
                "participant2": pid2,
                "participant3": pid3,
                "participant4": pid4,
                "contactNumber": phone,
                "discordId": did
              });
              
              var config = {
                method: 'post',
                url: `${url}/ctfevent/`,
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
        <Button onClick={props.onHide} className='modal-button'>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export const Modal2 = ({showModal, setShowModal}) => {
    return (
        <>
        <MyVerticallyCenteredModal
        show={showModal}
        onHide={() => setShowModal(false)}
      />
        </>
    )
}