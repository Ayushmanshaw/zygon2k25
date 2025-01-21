import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AnimationPage from "./components/AnimationPage";
import LandingPage from "./components/LandingPage";
import Loader from "./components/Loader";
import Footer from "./components/Footer";
function App() {
  const [screenLoading, setScreenLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setScreenLoading(false);
    }, 3000);
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
                <Footer />
              </>
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
