import React from "react";
import IntervalsCarousel from "./components/IntervalsCarousel";
import Layout from "./layouts/Layout";
import Info from "./components/Info";
import InputImage from "./components/InputImage";

function App() {
  return (
    <div className="App">
      <Layout>
        <IntervalsCarousel />
        <br />
        <Info />
        <br />
        <InputImage />
      </Layout>
    </div>
  );
}

export default App;
