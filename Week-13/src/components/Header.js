import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Navbar.Brand href="/">URL Shortener</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={NavLink} exact to="/" activeClassName="active">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/pricing" activeClassName="active">
            Pricing
          </Nav.Link>
          <Nav.Link as={NavLink} to="/contact" activeClassName="active">
            Contact Us
          </Nav.Link>
          <Nav.Link as={NavLink} to="/login" activeClassName="active">
            Login
          </Nav.Link>
          <Nav.Link as={NavLink} to="/signup" activeClassName="active">
            Sign Up
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
