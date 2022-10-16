import Container from "react-bootstrap/Container";
import { useObservationData } from "../../contexts/PopularObservationContext";
import appStyles from "../../App.module.css";
import PopularObservation from "./PopularObservation";
import Asset from "../../components/Asset";

const PopularObservations = ({ mobile }) => {
  const { popularObservations } = useObservationData();

  return (
    <Container
      className={`${appStyles.Content} ${
        mobile && "d-lg-none text-center mb-3"
      }`}
    >
      {popularObservations.results.length ? (
        <>
          <p>Popular observations</p>
          {mobile ? (
            <div className="d-flex justify-content-around">
              {popularObservations.results.slice(0, 2).map((observation) => (
                <PopularObservation
                  key={observation.id}
                  observation={observation}
                  mobile
                />
              ))}
            </div>
          ) : (
            popularObservations.results.map((observation) => (
              <PopularObservation
                key={observation.id}
                observation={observation}
              />
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
