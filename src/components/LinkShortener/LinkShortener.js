import React from "react";
import styles from "./LinkShortener.module.scss";
import Button from "../Button/Button";

function LinkShortener() {
  return (
    <div style={{ position: "relative" }}>
      <div className={styles.container}>
        <form>
          <input
            aria-label="Link to shorten"
            type="text"
            placeholder="Shorten a link here..."
          />
          <Button type="submit">Shorten It!</Button>
        </form>
      </div>
    </div>
  );
}

export default LinkShortener;
