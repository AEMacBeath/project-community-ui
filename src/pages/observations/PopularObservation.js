import React from "react";
import styles from "../../styles/PopularObservation.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";

const PopularObservation = (props) => {
  const { observation, mobile, imageSize = 55 } = props;
  const { id, title, image, owner } = observation;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  return <div className={`my-3 d-flex align-items-center ${mobile && 'flex-column'}`}>
    <div>
        <Link className="align-self-center" to={`/observations/${id}`}>
            <Avatar src={image} height={imageSize}/>
        </Link>
    </div>
    <div className={`mx-2 ${styles.WordBreak}`}>
        <strong>{title}</strong>
    </div>
  </div>;
};

export default PopularObservation;
