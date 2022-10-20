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
    observationPage,
    setObservations,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const history = useHistory();

  const handleEdit = () => {
    history.push(`/observations/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/observations/${id}/`);
      history.goBack();
    } catch (err) {
      console.log(err);
    }
  };

  const handleLike = async () => {
    try {
      const { data } = await axiosRes.post("/likes/", { observation: id });
      setObservations((prevObservations) => ({
        ...prevObservations,
        results: prevObservations.results.map((observation) => {
          return observation.id === id
            ? { ...observation, likes_count: observation.likes_count + 1, like_id: data.id }
            : observation;
        }),
      }));
    } catch (err) {
      // console.log(err);
    }
  };

  const handleUnlike = async () => {
    try {
      await axiosRes.delete(`/likes/${like_id}/`);
      setObservations((prevObservations) => ({
        ...prevObservations,
        results: prevObservations.results.map((observation) => {
          return observation.id === id
            ? { ...observation, likes_count: observation.likes_count - 1, like_id: null }
            : observation;
        }),
      }));
    } catch (err) {
      // console.log(err);
    }
  };

  return (
    <Card className="text-center">
      <Card.Header>
        <Media className="align-items-center justify-content-between">
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profile_image} height={55} />
            {owner}
          </Link>
          <div className="d-flex align-items-center">
            {is_owner && (
              <MoreDropdown
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            )}
          </div>
        </Media>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{content}</Card.Text>
        <Link to={`/observations/${id}`}>
          <Card.Img src={image} alt={title} className={styles.Image} />
        </Link>
      </Card.Body>
      <Card.Footer className="text-muted">
        <Row>
          <Col>
            {likes_count} Likes
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
                <i className={`fas fa-thumbs-up ${styles.thumb}`} />
              </span>
            ) : currentUser ? (
              <span onClick={handleLike}>
                <i className={`far fa-thumbs-up ${styles.thumbOutline}`} />
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
            {comments_count} Comments
            <Link to={`/observations/${id}`}>
              <i className="far fa-comment" />
            </Link>
          </Col>
          <Col className={styles.Updated}>{updated_at}</Col>
        </Row>
      </Card.Footer>
    </Card>
  );
};

export default Observation;
