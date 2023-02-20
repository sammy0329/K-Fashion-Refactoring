import React from "react";
import IntervalsCarousel from "../components/IntervalsCarousel";
import Layout from "../layouts/Layout";
import Info from "../components/Info";
import InputImage from "../components/InputImage";

function Home() {
  return (
    <Layout>
      <br />
      <IntervalsCarousel />
      <br />
      <Info />
      <InputImage />
    </Layout>
  );
}

export default Home;
