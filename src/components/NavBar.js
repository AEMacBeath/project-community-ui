import axios from "axios";
import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../contexts/CurrentUserContext";
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";
import { removeTokenTimestamp } from "../utils/utils";
import styles from "../styles/NavBar.module.css";
import SignOutConfirmation from "./SignOutConfirmation";

{
  /* NavBar contians a Logo and varying NavLinks, depending on users logged in status. */
}
const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();
  const { expanded, setExpanded, ref } = useClickOutsideToggle();

  const handleSignOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null);
      removeTokenTimestamp();
    } catch (err) {
      console.log(err);
    }
  };
  {
    /* NavLinks to be displayed when a user is logged in. */
  }
  const loggedInNav = (
    <>
      <NavLink
        to="/observations/create"
        className={styles.NavLink}
        activeClassName={styles.Active}
      >
        Add Observation
        <i className="fas fa-plus"></i>
      </NavLink>
      <NavLink
        to="/liked"
        className={styles.NavLink}
        activeClassName={styles.Active}
      >
        Liked Observations
        <i className="fas fa-thumbs-up"></i>
      </NavLink>
      <NavLink
        to={`/profiles/${currentUser?.profile_id}`}
        className={styles.NavLink}
        activeClassName={styles.Active}
      >
        {currentUser?.username}'s Profile
        <i className="fas fa-user"></i>
      </NavLink>
      <SignOutConfirmation handleSignOut={handleSignOut} />
    </>
  );
  {
    /* NavLinks to be displayed when a user is not logged in. */
  }
  const loggedOutNav = (
    <>
      <NavLink
        to="/signin"
        className={styles.NavLink}
        activeClassName={styles.Active}
      >
        Sign in<i className="fas fa-sign-in-alt"></i>
      </NavLink>
      <NavLink
        to="/signup"
        className={styles.NavLink}
        activeClassName={styles.Active}
      >
        Sign up<i className="fas fa-user-plus"></i>
      </NavLink>
    </>
  );

  return (
    <Navbar
      className={styles.NavBar}
      expanded={expanded}
      expand="lg"
      fixed="top"
    >
      <Container>
        <NavLink to="/">
          <Navbar.Brand>
            <h4>Project Community</h4>
          </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle
          ref={ref}
          onClick={() => setExpanded(!expanded)}
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-right">
            <NavLink
              exact
              to="/"
              className={styles.NavLink}
              activeClassName={styles.Active}
            >
              Home<i className="fas fa-home"></i>
            </NavLink>
            {currentUser ? loggedInNav : loggedOutNav}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
