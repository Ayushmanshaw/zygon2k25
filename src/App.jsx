import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AnimationPage from "./components/AnimationPage";
import LandingPage from "./components/Landingpage"; // Ensure the filename matches the casing
import Loader from "./components/Loader";

function App() {
  const [screenLoading, setScreenLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setScreenLoading(false);
    }, 3000); // 3 seconds delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            screenLoading ? (
              <Loader />
            ) : (
              <>
                <LandingPage />
                <AnimationPage />
              </>
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
