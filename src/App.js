import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <React.StrictMode>
        <Router>
          <Routes>
            {/* <Route exact path="/home" element={<App />} /> */}
            <Route exact path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </React.StrictMode>
      
    </div>
  );
}

export default App;
