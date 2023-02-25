import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Result from "./pages/Result";

function App() {
  return (
    <div className="App">
      {/* 라우팅 작업 (path가 정해져 있지 않은 경로는 NotFound 페이지 보여줌) */}
      <React.StrictMode>
        <Router>
          <Routes>
            <Route exact path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/result" element={<Result />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </Router>
      </React.StrictMode>
      
    </div>
  );
}

export default App;
