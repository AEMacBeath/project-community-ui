import React from "react";
import styles from "../../styles/PopularObservation.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Link } from "react-router-dom";


const PopularObservation = (props) => {
  const { observation, mobile, imageSize = 50 } = props;
  const { id, title, image, owner } = observation;

  const currentUser = useCurrentUser();

  return (
    <div
      className={`my-3 d-flex align-items-center ${mobile && "flex-column"}`}
    >
      <Link
        className={`"align-self-center" ${styles.Image}`}
        to={`/observations/${id}`}
      >
        <div>
          <img src={image} height={imageSize} />
        </div>
      </Link>
      <div className={`mx-2 ${styles.WordBreak}`}>
        <strong>{title}</strong>
      </div>
    </div>
  );
};

export default PopularObservation;
