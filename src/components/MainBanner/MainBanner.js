import React from "react";
import styles from "./MainBanner.module.scss";
import Button from "../Button/Button";
import WorkingImage from "../../assets/images/illustration-working.svg";

function MainBanner() {
  return (
    <div className={styles.bannerContainer}>
      <div className={styles.bannerGrid}>
        <div className={styles.callToAction}>
          <h1>More than just shorter links</h1>
          <p>
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>
          <Button rounded={true} fontSize={1 + "rem"}>
            Get Started
          </Button>
        </div>
        <div className={styles.imageContainer}>
          <img src={WorkingImage} alt="" />
        </div>
      </div>
    </div>
  );
}

export default MainBanner;
