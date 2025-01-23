import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loader from "./components/Loader";
import Home from "./components/Home";
import About from "./components/About";
import Countdown from "./components/Countdown";
import Event from "./components/Event";
import VideoSection from "./components/VideoSection/VideoSection";
import Footer from "./components/Footer"

const App = () => {
  const [screenLoading, setScreenLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setScreenLoading(false);
    }, 3500);
  }, []);

  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              screenLoading ? ( // Changed from `false` to `screenLoading`
                <Loader />
              ) : (
                <>
                  <Home />
                  <About />
                  <Countdown />
                  <VideoSection />
                  <Footer />
                </>
              )
            }
          />

          <Route
            path="/Events"
            element={
              screenLoading ? ( // Changed from `false` to `screenLoading`
                <Loader />
              ) : (
                <Event />
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
