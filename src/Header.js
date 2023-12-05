import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'

function Header() {
  return (
    <div>
        <Navbar className="bg-body-secondary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/grow yourself.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            <strong className='p-2 m-5 fs-1'>Grow Yourself</strong>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header