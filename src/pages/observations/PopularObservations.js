import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { axiosReq } from "../../api/axiosDefaults";
import appStyles from "../../App.module.css";
import Asset from "../../components/Asset";
import { useCurrentUser } from "../../contexts/currentUserContext";
import PopularObservation from "./PopularObservation";

const PopularObservations = ({ mobile }) => {
  const [observationData, setObservationData] = useState({
    // we will use the pageObservation later!
    pageObservation: { results: [] },
    popularObservations: { results: [] },
  });
  const { popularObservations } = observationData;
  const currentUser = useCurrentUser();

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(
          "/observations/?ordering=-followers_count"
        );
        setObservationData((prevState) => ({
          ...prevState,
          popularObservations: data,
        }));
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [currentUser]);

  return (
    <Container
      className={`${appStyles.Content} ${
        mobile && "d-lg-none text-center mb-3"
      }`}
    >
      {popularObservations.results.length ? (
        <>
          <p>Popular Observations</p>
          {mobile ? (
            <div className="d-flex justify-content-around">
              {popularObservations.results.slice(0, 2).map((observation) => (
                <PopularObservation key={observation.id} observation={observation} mobile />
              ))}
            </div>
          ) : (
            popularObservations.results.map((observation) => (
              <PopularObservation key={observation.id} observation={observation} />
            ))
          )}
        </>
      ) : (
        <Asset spinner />
      )}
    </Container>
  );
};

export default PopularObservations;
