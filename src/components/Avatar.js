import React from "react";
import styles from "../styles/Avatar.module.css";

const Avatar = ({ src, height = 45, text }) => {
  return (
    <span>
      {text}
      <img
        className={styles.Avatar}
        src={src}
        hegith={height}
        width={height}
        alt="avatar"
      />
    </span>
  );
};

export default Avatar;