import React from "react";
import styles from "./AdvancedStatistics.module.scss";
import { ShortLinksConsumer } from "../../providers/ShortLinksProvider";
import ShortLinkItem from "../ShortLinkItem/ShortLinkItem";
import IconCard from "../IconCard/IconCard";
import {
  faChartLine,
  faTachometerAlt,
  faPaintBrush,
} from "@fortawesome/free-solid-svg-icons";

function AdvancedStatistics() {
  return (
    <div className={styles.container}>
      <ShortLinksConsumer>
        {(context) => {
          if (context.shortLinks.length > 0 || true) {
            return (
              <div className={styles.shortLinks}>
                {[
                  ...context.shortLinks,
                  {
                    destination: "https://google.com",
                    shortUrl: "rebrand.ly/owodf",
                  },
                ].map((shortLink, index) => (
                  <ShortLinkItem key={index} {...shortLink}></ShortLinkItem>
                ))}
              </div>
            );
          }
        }}
      </ShortLinksConsumer>
      <div className={styles.details}>
        <h1>Advanced Statistics</h1>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>

      <div className={styles.cardGrid}>
        <div className={styles.cardCell}>
          <IconCard header="Brand Recognition" icon={faChartLine}>
            Boost your brand recognition with each click. Generic links don't
            mean a thing. Branded links help instil confidence in your content.
          </IconCard>
        </div>

        <div className={styles.line}></div>
        <div className={styles.cardCell}>
          <IconCard header="Detailed Records" icon={faTachometerAlt}>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions
          </IconCard>
        </div>

        <div className={styles.line}></div>
        <div className={styles.cardCell}>
          <IconCard header="Fully Customizable" icon={faPaintBrush}>
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </IconCard>
        </div>
      </div>
    </div>
  );
}

export default AdvancedStatistics;
