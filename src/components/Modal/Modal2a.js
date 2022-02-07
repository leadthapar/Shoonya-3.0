import React from 'react';
import { Button, Modal} from 'react-bootstrap';

function MyVerticallyCenteredModal(props) {
 
  return (
    <Modal
      {...props}
      size="550px"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title className="modal-heading" id="contained-modal-title-vcenter">
          Team Details CTF Event
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
            {props.data !== null? (
                <>
                     <div class="form-group">
          <p className="font-weight-bold h5">Team Name : {props.data.team.teamId}</p>
          </div>

          <div class="form-group">
          <p className="font-weight-bold h5">Phone Number : {props.data.team.contactNumber}</p>
          </div>

          <div class="form-group">
          <p className="font-weight-bold h5">Discord ID : {props.data.team.discordId}</p>
          </div>
                   {props.data.participants.map((elem, index)=>{
              return (
                <div class="form-group">
                <p className="font-weight-bold h5">Player {index + 1} ID : {elem.palyerId}</p>
                </div>
              )
            })}

           
        
                </>
            ):null}
        
     


       

        
      
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} className='modal-button'>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export const Modal2a = ({showModal, setShowModal,data}) => {
    return (
        <>
        <MyVerticallyCenteredModal
        show={showModal}
        data = {data}
        onHide={() => setShowModal(false)}
      />
        </>
    )
}