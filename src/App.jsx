import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/MainPage";
import MoreProjects from "./pages/MoreProjects";
import Loader from "./components/loader/loader";
import SmoothCursor from "./components/ui/SmoothCursor";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "winter";
  });
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <>
      <div className="font-roboto">
        {loading ? (
          <Loader />
        ) : (
          <Router>
            <SmoothCursor />
            <Routes>
              <Route
                path="/"
                element={<Main theme={theme} setTheme={setTheme} />}
              ></Route>
              <Route path="/projects" element={<MoreProjects />}></Route>
              {/* <Route path="/certificates" element={<MoreCerts />}></Route> */}
            </Routes>
          </Router>
        )}
      </div>
    </>
  );
}

export default App;
