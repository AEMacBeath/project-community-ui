import React, { useState } from "react";
import { Button, Dropdown, Modal } from "react-bootstrap";
import styles from "../styles/Modal.module.css";
import btnStyles from "../styles/Button.module.css";
import menuStyles from "../styles/MoreDropdown.module.css";
import { useCurrentUser } from "../contexts/CurrentUserContext";

// Delete confirmation is a Bootstrap modal for the 
// user to confirm deletion of a comment or observations.
const DeleteConfirmation = ({ handleDelete }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const currentUser = useCurrentUser();

  return (
    <>
      {/* Reveals the modal when clicked. */}
      <Dropdown.Item className={menuStyles.DropdownItem} onClick={handleShow}>Delete</Dropdown.Item>

      <Modal show={show} onHide={handleClose} className={styles.Modal}>
        <Modal.Header>
          <Modal.Title>
            Hi, {currentUser.username}.
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this?</Modal.Body>
        <Modal.Footer>
          <Button className={btnStyles.BtnCancel} onClick={handleClose}>
            Cancel
          </Button>
          <Button className={btnStyles.Btn} onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteConfirmation;
