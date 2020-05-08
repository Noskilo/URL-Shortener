import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import MainBanner from "../../components/MainBanner/MainBanner";
import LinkShortener from "../../components/LinkShortener/LinkShortener";
import AdvancedStatistics from "../../components/AdvancedStatistics/AdvancedStatistics";
import Boost from "../../components/Boost/Boost";
import Footer from "../../components/Footer/Footer";
import { ShortLinksProvider } from "../../providers/ShortLinksProvider";

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <MainBanner />

        <ShortLinksProvider>
          <LinkShortener />
          <AdvancedStatistics />
        </ShortLinksProvider>

        <Boost />
      </main>
      <Footer />
    </>
  );
}

export default Home;
