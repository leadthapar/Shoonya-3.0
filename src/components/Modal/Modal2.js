import React from 'react';
import { Button, Modal } from 'react-bootstrap';

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
          Register Now!!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div class="row-modal">
            <div class="col-xs-2">
            <label for="label1" required>Player1 Id:</label>
            <input type="text" class="form-control" id="label1" placeholder="Enter 1st Player Id" required />
          </div>
          <div class="col-modal">
            <label for="phone">Enter a phone number:</label>
            <input type="text" class="form-control" id="phone" name="phone" placeholder="9876XXXXXX" pattern="[0-9]{10}" required /><br></br>
          </div>
          </div>
          <div class="form-group">
            <label for="team-name">Team Name:</label>
            <input type="text" class="form-control" id="team-name" placeholder="Enter your Team Name" required/>
          </div>
          <div class="form-group">
            <label for="disc">Discord Id:</label>
            <input type="text" class="form-control" id="disc" placeholder="Enter Discord Id" required />
          </div>
          <div class="form-group">
            <label for="label2">Player2 Id:</label>
            <input type="text" class="form-control" id="label2" placeholder="Enter 2nd Player Id" />
          </div>
          <div class="form-group">
            <label for="label3">Player3 Id:</label>
            <input type="text" class="form-control" id="label3" placeholder="Enter 3rd Player Id" />
          </div>
          <div class="form-group">
            <label for="label4">Player 4 Id:</label>
            <input type="text" class="form-control" id="label4" placeholder="Enter 4th Player Id" />
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
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