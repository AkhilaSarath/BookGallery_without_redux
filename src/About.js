import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



function About({desc}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
{console.log(desc)}
         <Button variant="info" onClick={handleShow}>
        About
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{desc.name}</Modal.Title> 
        </Modal.Header>
        <Modal.Body>
           <h5> {desc.description}</h5>
            
            </Modal.Body>
        
      </Modal>

    </div>
  )
}

export default About