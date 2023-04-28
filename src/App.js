import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Result from "./pages/Result";
import useTitle from "./lib/useTitle"
// import { useEffect, useState } from "react";

// const useTitle = initialTitle => {
//   const [title, setTitle] = useState(initialTitle);
//   const updateTitle = () => {
//     const htmlTitle = document.querySelector("title");
//     htmlTitle.innerText=title;
//   };
//   useEffect(updateTitle,[title]);
//     return setTitle;
// };

function App() {
  const titleUpdater = useTitle("K-Fashion Recomedation");

  return (
    <div className="App">
      {/* 라우팅 작업 (path가 정해져 있지 않은 경로는 NotFound 페이지 보여줌) */}
      <React.StrictMode>
        <Router>
          <Routes>
            <Route exact path="/home" element={<Home titleUpdater={titleUpdater} />} />
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
