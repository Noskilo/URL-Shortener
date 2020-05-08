import React from "react";
import styles from "./IconCard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function IconCard(props) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.icon}>
        <FontAwesomeIcon icon={props.icon} />
      </div>

      <article>
        <h2>{props.header}</h2>
        <p>{props.children}</p>
      </article>
    </div>
  );
}

export default IconCard;
