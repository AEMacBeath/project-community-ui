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
          <h5>Popular observations</h5>
          {mobile ? (
            <div>
              {popularObservations.results.slice(0, 2).map((observation) => (
                <PopularObservation
                  key={observation.id}
                  observation={observation}
                  mobile
                />
              ))}
            </div>
          ) : (
            popularObservations.results.slice(0, 4).map((observation) => (
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
