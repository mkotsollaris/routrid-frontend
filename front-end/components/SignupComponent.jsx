import {Modal, Button} from 'react-bootstrap';
import StyledNavLink from './StyledNavLink';
import React, { useState } from 'react';
//import EmbedID from 'trulioo-react/EmbedID'
import dynamic from 'next/dynamic';

const EmbedID = dynamic(
  import('trulioo-react/EmbedID'),
  { ssr: false }
);

const SignupComponent = (props) => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    console.log('Open Modal')
    setShow(true);
  }
  const handleClose = (e) => {
    console.log('Closing Modal')
    setShow(false);
    e && e.stopPropagation();
  }

  const handleResponse = () => {
    alert('Hooray');
  }

    return (

      <>
      <StyledNavLink variant="primary" onClick={handleShow}>
      Sign up
      </StyledNavLink>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <EmbedID url='http://localhost:3111' handleSubmit={() => alert('Verified')} handleResponse={() => alert('Verified')}/>
        </Modal.Body>
      </Modal>
    </>)
}

export default SignupComponent