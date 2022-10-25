import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styles from "../styles/Modal.module.css";
import btnStyles from "../styles/Button.module.css";
import navStyles from "../styles/NavBar.module.css";

{
  /*
SignOutConfirmation is a Bootstrap modal for the 
user to confirm they want to sign out.
*/
}
const SignOutConfirmation = ({ handleSignOut }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* Reveals the modal when clicked. */}
      <NavLink className={navStyles.NavLink} to="/" onClick={handleShow}>
        Sign out
        <i className="fas fa-sign-out-alt"></i>
      </NavLink>

      <Modal show={show} onHide={handleClose} className={styles.Modal}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure you want to sign out?</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            No, close
          </Button>
          <Button className={`${btnStyles.Btn} btn`} onClick={handleSignOut}>
            Yes, Sign out
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SignOutConfirmation;
