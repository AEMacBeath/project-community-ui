import React, { useState } from "react";
import { Button, Dropdown, Modal } from "react-bootstrap";
import btnStyles from "../styles/Button.module.css";

{
  /*
Delete confirmation is a Bootstrap modal for the 
user to confirm deletion of a comment or observations.
*/
}
const DeleteConfirmation = ({ handleDelete }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* Reveals the modal when clicked. */}
      <Dropdown.Item onClick={handleShow}>Delete</Dropdown.Item>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete, xx ?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button class={btnStyles.Btn} onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteConfirmation;
