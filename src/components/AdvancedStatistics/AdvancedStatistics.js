import React from "react";
import styles from "./AdvancedStatistics.module.scss";

function AdvancedStatistics() {
  return (
    <div className={styles.container}>
      <div className={styles.details}>
        <h1>Advanced Statistics</h1>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
    </div>
  );
}

export default AdvancedStatistics;
