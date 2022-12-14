import React from "react";
import styles from "../../styles/PopularObservation.module.css";
import { Link } from "react-router-dom";
import { Image, OverlayTrigger, Tooltip } from "react-bootstrap";

const PopularObservation = (props) => {
  const { observation, mobile } = props;
  const { id, image, title } = observation;

  // Displays Observation Title when tumbnail is hovered over
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {title}
    </Tooltip>
  );

  return (
    <OverlayTrigger
      placement="top"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >
      <Link to={`/observations/${id}`}>
        {mobile ? (
          <Image className={styles.ThumbnailMobile} src={image} thumbnail />
        ) : (
          <Image className={styles.Thumbnail} src={image} thumbnail />
        )}
      </Link>
    </OverlayTrigger>
  );
};

export default PopularObservation;
