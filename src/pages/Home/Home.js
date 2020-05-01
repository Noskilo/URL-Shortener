import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Home.module.scss";
import MainBanner from "../../components/MainBanner/MainBanner";
import LinkShortener from "../../components/LinkShortener/LinkShortener";
import AdvancedStatistics from "../../components/AdvancedStatistics/AdvancedStatistics";
import Boost from "../../components/Boost/Boost";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <main>
        <MainBanner />
        <LinkShortener />
        <AdvancedStatistics />
        <Boost />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
