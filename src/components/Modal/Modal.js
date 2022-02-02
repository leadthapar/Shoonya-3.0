import React from 'react';
import { Button, Modal } from 'react-bootstrap';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Event
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4 className='modal-heading'>Event 1</h4>
        <p className='modal-para'>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} className='modal-button'>Close</Button>
        <Button className='modal-button'>
            Register
          </Button>
      </Modal.Footer>
    </Modal>
  );
}

export const Modals = ({showModal, setShowModal}) => {
    return (
        <>
        <MyVerticallyCenteredModal
        show={showModal}
        onHide={() => setShowModal(false)}
      />
        </>
    )
}