import React from "react";
import IntervalsCarousel from "../components/IntervalsCarousel";
import Layout from "../layouts/Layout";
import Info from "../components/Info";
import InputImage from "../components/InputImage";

function Home({titleUpdater}) {
  return (
    <Layout>
      <br />
      <IntervalsCarousel />
      <br />
      <Info />
      <InputImage titleUpdater={titleUpdater}/>
    </Layout>
  );
}

export default Home;
