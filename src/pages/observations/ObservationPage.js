import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import appStyles from "../../App.module.css";
import { useParams } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import Observation from "./Observation";

function ObservationPage() {
  const { id } = useParams();
  const [observation, setObservation] = useState({ results: [] });

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: observation }] = await Promise.all([
          axiosReq.get(`/observations/${id}`),
        ]);
        setObservation({results: [observation]})
        console.log(observation)
      } catch (err) {
        console.log(err);
      }
    };

    handleMount()
  }, [id]);

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <p>Popular profiles for mobile</p>
        <Observation {...observation.results[0]} setObservation={setObservation} observationPage />
        <Container className={appStyles.Content}>Comments</Container>
      </Col>
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
        Popular profiles for desktop
      </Col>
    </Row>
  );
}

export default ObservationPage;
