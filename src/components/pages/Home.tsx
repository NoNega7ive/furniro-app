import React from "react";
import TopSection from "../home-components/TopSection";
import BrowseTheRange from "../home-components/BrowseTheRange";
import OurProducts from "../home-components/OurProducts";
import ShareSetup from "../home-components/ShareSetup";
import BeautifulRooms from "../home-components/BeautifulRooms";

const Home = () => {
  return (
    <div>
      <TopSection />
      <BrowseTheRange />
      <OurProducts />
      <BeautifulRooms />
      <ShareSetup />
    </div>
  );
};

export default Home;