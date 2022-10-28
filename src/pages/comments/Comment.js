import React, { useState } from "react";
import Media from "react-bootstrap/Media";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { MoreDropdown } from "../../components/MoreDropdown";
import CommentEditForm from "./CommentEditForm";
import styles from "../../styles/Comment.module.css";
import { axiosRes } from "../../api/axiosDefaults";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

// To create, update and delete comments.
const Comment = (props) => {
  const {
    profile_id,
    profile_image,
    owner,
    updated_at,
    content,
    id,
    setObservation,
    setComments,
  } = props;

  // Shows edit form
  const [showEditForm, setShowEditForm] = useState(false);

  // Checks if current user is the owner
  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  // Deletes user's comment
  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/comments/${id}/`);
      setObservation((prevObservation) => ({
        results: [
          {
            ...prevObservation.results[0],
            comments_count: prevObservation.results[0].comments_count - 1,
          },
        ],
      }));

      setComments((prevComments) => ({
        ...prevComments,
        results: prevComments.results.filter((comment) => comment.id !== id),
      }));
    } catch (err) {}
  };

  return (
    <>
      <hr />
      <Media>
        {/* Link to owners profile displated as profile image */}
        <Link to={`/profiles/${profile_id}`}>
          <Avatar src={profile_image} />
        </Link>
        {/* Displays owner's name and Observation updated date */}
        <Media.Body className="align-self-center ml-2">
          <span className={styles.Owner}>{owner}</span>
          <span className={styles.Date}>{updated_at}</span>
          {/* Shows edit form when Edit is select from MoreDropDown */}
          {showEditForm ? (
            <CommentEditForm
              id={id}
              profile_id={profile_id}
              content={content}
              profileImage={profile_image}
              setComments={setComments}
              setShowEditForm={setShowEditForm}
            />
          ) : (
            <p>{content}</p>
          )}
        </Media.Body>
        {/* Shows edit dropdown menu */}
        {is_owner && !showEditForm && (
          <MoreDropdown
            handleEdit={() => setShowEditForm(true)}
            handleDelete={handleDelete}
          />
        )}
      </Media>
    </>
  );
};

export default Comment;
