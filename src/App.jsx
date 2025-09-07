import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/MainPage";
import MoreProjects from "./pages/MoreProjects";

function App() {
  return (
    <>
      <div className="font-roboto">
        <Router>
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/projects" element={<MoreProjects />}></Route>
            {/* <Route path="/certificates" element={<MoreCerts />}></Route> */}
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
