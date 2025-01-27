import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Navigation = () => (
  <header>
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary nav-container" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>Andrea Portafolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Item>
              <Link to="/" className="nav-link">About Me</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="Contact" className="nav-link">Contact</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="Profile" className="nav-link">Profile</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="Resume" className="nav-link">Resume</Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>
);

export default Navigation;