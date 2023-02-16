import React from "react";
import IntervalsCarousel from "./components/IntervalsCarousel";
import Layout from "./layouts/Layout";

function App() {
  return (
    <div className="App">
      <Layout>
        {/* <Navbar /> */}
        <IntervalsCarousel />
      </Layout>
    </div>
  );
}

export default App;
