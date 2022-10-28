import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styles from "../styles/Modal.module.css";
import btnStyles from "../styles/Button.module.css";
import navStyles from "../styles/NavBar.module.css";
import { useCurrentUser } from "../contexts/CurrentUserContext";

// Bootstrap modal for the user to confirm they want to sign out.
const SignOutConfirmation = ({ handleSignOut }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const currentUser = useCurrentUser();

  return (
    <>
      {/* Reveals the modal when clicked. */}
      <NavLink className={navStyles.NavLink} to="/" onClick={handleShow}>
        Sign out
        <i className="fas fa-sign-out-alt"></i>
      </NavLink>

      <Modal show={show} onHide={handleClose}>
      <Modal.Header>
          <Modal.Title>
            Hi, {currentUser.username}.
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to sign out?</Modal.Body>
        <Modal.Footer className={styles.Modal}>
          <Button className={btnStyles.BtnCancel} onClick={handleClose}>
            Cancel
          </Button>
          <Button className={btnStyles.Btn} onClick={handleSignOut}>
            Sign out
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SignOutConfirmation;
