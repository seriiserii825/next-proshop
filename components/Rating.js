import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import { faStar as farFaStar } from "@fortawesome/free-regular-svg-icons";
import styles from "./Rating.module.scss";

function Rating({ rating, text }) {
  return (
    <div className={styles.rating}>
      {rating >= 1 ? (
        <FontAwesomeIcon icon={faStar} />
      ) : rating >= 0.5 ? (
        <FontAwesomeIcon icon={faStarHalf} />
      ) : (
        <FontAwesomeIcon icon={farFaStar} />
      )}
      {rating >= 2 ? (
        <FontAwesomeIcon icon={faStar} />
      ) : rating >= 1.5 ? (
        <FontAwesomeIcon icon={faStarHalf} />
      ) : (
        <FontAwesomeIcon icon={farFaStar} />
      )}
      {rating >= 3 ? (
        <FontAwesomeIcon icon={faStar} />
      ) : rating >= 2.5 ? (
        <FontAwesomeIcon icon={faStarHalf} />
      ) : (
        <FontAwesomeIcon icon={farFaStar} />
      )}
      {rating >= 4 ? (
        <FontAwesomeIcon icon={faStar} />
      ) : rating >= 3.5 ? (
        <FontAwesomeIcon icon={faStarHalf} />
      ) : (
        <FontAwesomeIcon icon={farFaStar} />
      )}
      {rating >= 5 ? (
        <FontAwesomeIcon icon={faStar} />
      ) : rating >= 4.5 ? (
        <FontAwesomeIcon icon={faStarHalf} />
      ) : (
        <FontAwesomeIcon icon={farFaStar} />
      )}
      <span className={styles.text}>
        <strong>{text}</strong> reviews
      </span>
    </div>
  );
}

export default Rating;
