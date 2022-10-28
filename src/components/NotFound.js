import React from "react";
import NoResults from "../assets/no-results.png";
import styles from "../styles/NotFound.module.css";
import Asset from "./Asset";

// NotFound is displayed when an incorrect URL is entered.
const NotFound = () => {
  return (
    <div className={styles.NotFound}>
      <Asset
        src={NoResults}
        message="The page you're looking for does not exist"
      />
    </div>
  );
};

export default NotFound;
