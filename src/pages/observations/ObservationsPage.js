import React, { useEffect, useState } from "react";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import Observation from "./Observation";
import Asset from "../../components/Asset";

import appStyles from "../../App.module.css";
import styles from "../../styles/ObservationsPage.module.css";
import { useLocation } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";

import NoResults from "../../assets/no-results.png";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
import PopularObservations from "./PopularObservations";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

// Displays all Ovservations sorted by date, newest first.
function ObservationsPage({ message, filter = "" }) {
  const [observations, setObservations] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();
  const [query, setQuery] = useState("");
  const currentUser = useCurrentUser();

  // Gets observations
  useEffect(() => {
    const fetchObservations = async () => {
      try {
        const { data } = await axiosReq.get(
          `/observations/?${filter}search=${query}`
        );
        setObservations(data);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };

    setHasLoaded(false);
    const timer = setTimeout(() => {
      fetchObservations();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [filter, query, pathname, currentUser]);

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <PopularObservations mobile />
        {/* Search bar */}
        <i className={`fas fa-search ${styles.SearchIcon}`} />
        <Form
          className={styles.SearchBar}
          onSubmit={(event) => event.preventDefault()}
        >
          <Form.Control
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            type="text"
            className="mr-sm-2"
            placeholder="Search observations"
          />
        </Form>
        { /* ObservationsList with InfiniteScroll */}
        {hasLoaded ? (
          <>
            {observations.results.length ? (
              <InfiniteScroll
                children={observations.results.map((observation) => (
                  <Observation
                    key={observation.id}
                    {...observation}
                    setObservations={setObservations}
                  />
                ))}
                dataLength={observations.results.length}
                loader={<Asset spinner />}
                hasMore={!!observations.next}
                next={() => fetchMoreData(observations, setObservations)}
              />
            ) : (
              <Container className={appStyles.Content}>
                <Asset src={NoResults} message={message} />
              </Container>
            )}
          </>
        ) : (
          // Diaplayes spinner while Observations load
          <Container className={appStyles.Content}>
            <Asset spinner />
          </Container>
        )}
      </Col>
      <Col md={4} className="d-none d-lg-block p-0 p-lg-2">
        <PopularObservations />
      </Col>
    </Row>
  );
}

export default ObservationsPage;
