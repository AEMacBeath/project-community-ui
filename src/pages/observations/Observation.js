import React from "react";
import styles from "../../styles/Observation.module.css";
import Card from "react-bootstrap/Card";
import Media from "react-bootstrap/Media";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { Link, useHistory } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosRes } from "../../api/axiosDefaults";
import { MoreDropdown } from "../../components/MoreDropdown";
import { Col, Row } from "react-bootstrap";

// To create, updated and delete observations
const Observation = (props) => {
  const {
    id,
    owner,
    profile_id,
    profile_image,
    comments_count,
    likes_count,
    like_id,
    title,
    content,
    image,
    updated_at,
    setObservations,
  } = props;

  // Gets current user and checks if they are the observation owner
  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  // To direct users to the required page when action is complete.
  const history = useHistory();

  // Directs user to ObservationEditForm.
  const handleEdit = () => {
    history.push(`/observations/${id}/edit`);
  };

  // Deletes the Observation
  const handleDelete = async (handleClose) => {
    try {
      await axiosRes.delete(`/observations/${id}/`);
      history.push("/");
      handleClose();
    } catch (err) {
      console.log(err);
    }
  };

  // Increases Observation's like_count.
  const handleLike = async () => {
    try {
      const { data } = await axiosRes.post("/likes/", { observation: id });
      setObservations((prevObservations) => ({
        ...prevObservations,
        results: prevObservations.results.map((observation) => {
          return observation.id === id
            ? {
                ...observation,
                likes_count: observation.likes_count + 1,
                like_id: data.id,
              }
            : observation;
        }),
      }));
    } catch (err) {}
  };

  // Decreases Observation's like_count.
  const handleUnlike = async () => {
    try {
      await axiosRes.delete(`/likes/${like_id}/`);
      setObservations((prevObservations) => ({
        ...prevObservations,
        results: prevObservations.results.map((observation) => {
          return observation.id === id
            ? {
                ...observation,
                likes_count: observation.likes_count - 1,
                like_id: null,
              }
            : observation;
        }),
      }));
    } catch (err) {}
  };

  return (
    <Card className={styles.Observation}>
      <Card.Body>
        <Row>
          {/* Displays observation title, content and image */}
          <Col md={10}>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{content}</Card.Text>
            <Link to={`/observations/${id}`}>
              <Card.Img src={image} alt={title} className={styles.Image} />
            </Link>
          </Col>
          <Col md={2}>
            <Media>
              {/* Link to owner's profile */}
              <Link className={styles.UserName} to={`/profiles/${profile_id}`}>
                <div>
                  {/* Displays MoreDropDown menu icon if curernt user is the owner */}
                  {is_owner && (
                    <MoreDropdown
                      handleEdit={handleEdit}
                      handleDelete={handleDelete}
                    />
                  )}
                </div>
                {/* Displays the owners profile image */}
                <div>
                  <Avatar src={profile_image} height={55} />
                </div>
                {/* Displays owner's username */}
                <div>{owner}</div>
              </Link>
            </Media>
          </Col>
        </Row>
      </Card.Body>
      <Card.Footer className={styles.Footer}>
        <Row>
          <Col>
            {/* Displays number of likes */}
            {likes_count} {likes_count === 1 ? "Like" : "Likes"}
            {/* If not already like by user increases likes_count else decreses likes_count. 
            Displayes messages if not logged in or user is owner */}
            {is_owner ? (
              <OverlayTrigger
                placement="top"
                overlay={
                  <Tooltip>You can't like your own observation!</Tooltip>
                }
              >
                <i className="far fa-thumbs-up" />
              </OverlayTrigger>
            ) : like_id ? (
              <span onClick={handleUnlike}>
                <i className="fas fa-thumbs-up" />
              </span>
            ) : currentUser ? (
              <span onClick={handleLike}>
                <i className="far fa-thumbs-up" />
              </span>
            ) : (
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>Log in to like observations!</Tooltip>}
              >
                <i className="far fa-thumbs-up" />
              </OverlayTrigger>
            )}
          </Col>
          <Col>
              {/* Link to ObservationPage to view comments displayed comments_count */}
            <Link to={`/observations/${id}`}>
              {comments_count} {comments_count === 1 ? "Comment" : "Comments"}
              <i className="far fa-comment" />
            </Link>
          </Col>

          <Col>{updated_at}</Col>
        </Row>
      </Card.Footer>
    </Card>
  );
};

export default Observation;
