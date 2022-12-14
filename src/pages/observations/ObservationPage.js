import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import appStyles from "../../App.module.css";
import { useParams } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import Observation from "./Observation";
import Comment from "../comments/Comment";

import CommentCreateForm from "../comments/CommentCreateForm";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

import InfiniteScroll from "react-infinite-scroll-component";
import Asset from "../../components/Asset";
import { fetchMoreData } from "../../utils/utils";
import PopularObservations from "./PopularObservations";

// Displays a single observation and it's comments
function ObservationPage() {
  const { id } = useParams();
  const [observation, setObservation] = useState({ results: [] });

  const currentUser = useCurrentUser();
  const profile_image = currentUser?.profile_image;
  const [comments, setComments] = useState({ results: [] });

  // Gets observation from API
  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: observation }, { data: comments }] = await Promise.all([
          axiosReq.get(`/observations/${id}`),
          axiosReq.get(`/comments/?observation=${id}`),
        ]);
        setObservation({ results: [observation] });
        setComments(comments);
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [id]);

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <PopularObservations mobile />
        {/* Displays oberservation detail */}
        <Observation
          {...observation.results[0]}
          setObservation={setObservation}
          observationPage
        />
        {/* Shows the CommentCreateForm if user is logged in */}
        <Container className={appStyles.Content}>
          {currentUser ? (
            <CommentCreateForm
              profile_id={currentUser.profile_id}
              profileImage={profile_image}
              observation={id}
              setObservation={setObservation}
              setComments={setComments}
            />
          ) : comments.results.length ? (
            "Comments"
          ) : null}
          {/* Displays comments */}
          {comments.results.length ? (
            <InfiniteScroll
              children={comments.results.map((comment) => (
                <Comment
                  key={comment.id}
                  {...comment}
                  setObservation={setObservation}
                  setComments={setComments}
                />
              ))}
              dataLength={comments.results.length}
              loader={<Asset spinner />}
              hasMore={!!comments.next}
              next={() => fetchMoreData(comments, setComments)}
            />
          ) : currentUser ? (
            <span>No comments, be the first to comment!</span>
          ) : (
            <span>No comments</span>
          )}
        </Container>
      </Col>
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
        <PopularObservations />
      </Col>
    </Row>
  );
}

export default ObservationPage;
