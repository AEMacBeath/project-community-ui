import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import styles from "../styles/MoreDropdown.module.css";
import { useHistory } from "react-router";
import DeleteConfirmation from "./DeleteConfirmation";

{
  /* EditPen displays the dropdown menu as a fa pen icon */
}
const EditPen = React.forwardRef(({ onClick }, ref) => (
  <i
    className={`${styles.Pen} fas fa-pen`}
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  />
));

{
  /* MoreDropdown is the dropdown menu used on Comments and Observations */
}
export const MoreDropdown = ({ handleEdit, handleDelete }) => {
  return (
    <Dropdown className="mr-auto" drop="right">
      <Dropdown.Toggle as={EditPen} />

      <Dropdown.Menu
        className={styles.Menu}
        popperConfig={{ strategy: "fixed" }}
      >
        <Dropdown.Item className={styles.DropdownItem} onClick={handleEdit}>
          Edit
        </Dropdown.Item>
        <DeleteConfirmation handleDelete={handleDelete} />
      </Dropdown.Menu>
    </Dropdown>
  );
};

{
  /* ProfileEditDropdown is the dropdown menu used on ProfilePage */
}
export const ProfileEditDropdown = ({ id }) => {
  const history = useHistory();
  return (
    <Dropdown className={`mr-auto px-3 ${styles.Absolute}`} drop="right">
      <Dropdown.Toggle as={EditPen} />
      <Dropdown.Menu className={styles.Menu}>
        <Dropdown.Item
          className={styles.DropdownItem}
          onClick={() => history.push(`/profiles/${id}/edit`)}
          aria-label="edit-profile"
        >
          Edit Profile
        </Dropdown.Item>
        <Dropdown.Item
          className={styles.DropdownItem}
          onClick={() => history.push(`/profiles/${id}/edit/username`)}
          aria-label="edit-username"
        >
          Change Username
        </Dropdown.Item>
        <Dropdown.Item
          className={styles.DropdownItem}
          onClick={() => history.push(`/profiles/${id}/edit/password`)}
          aria-label="edit-password"
        >
          Update Password
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
