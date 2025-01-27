import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Navigation() {
  return (
    <header>
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary nav-container" bg="dark" data-bs-theme="dark">
      <Container>
      <Navbar.Brand>Merari's Profile</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link to="/">About Me</Link>
              <Link to="/Contact">Contact</Link>
              <Link to="/Profile">Profile</Link>
              <Link to="/Resume">Resume</Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  )
}

export default Navigation;