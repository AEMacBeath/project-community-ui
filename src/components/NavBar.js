import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import styles from "../styles/NavBar.module.css";


const NavBar = () => {
  return (
    <Navbar className={styles.NavBar} expand="md" fixed="top">
      <Container>
        <Navbar.Brand>Project Community</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-right">
            <Nav.Link>Home<i className="fas fa-home"></i></Nav.Link>
            <Nav.Link>Sign in<i className="fas fa-sign-in-alt"></i></Nav.Link>
            <Nav.Link>Sign up<i className="fas fa-user-plus"></i></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
