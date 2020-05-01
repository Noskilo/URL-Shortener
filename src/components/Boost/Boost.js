import React from "react";
import styles from "./Boost.module.scss";
import Button from "../Button/Button";

function Boost() {
  return (
    <div className={styles.container}>
      <h1>Boost your links today</h1>
      <Button rounded={true} fontSize="1rem">Get Started</Button>
    </div>
  );
}

export default Boost;
