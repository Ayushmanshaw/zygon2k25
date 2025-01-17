import React from "react";
import Lottie from "react-lottie";
import animationData from "../Animation1.json"; // Adjust the path accordingly

const Loader = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        margin: 0,
        backgroundColor: "rgba(33, 33, 33, 0.9)", // Dark background
        fontFamily: "'Pacifico', cursive", // Apply Pacifico font here
        overflow: "hidden",
      }}
    >
      <div className="loader">
        <span>Z</span>
        <span>Y</span>
        <span>G</span>
        <span>
          <div
            style={{
              marginTop: "30px",
              width: "110px",
              height: "110px",
              marginLeft: "-23px",
              marginRight: "-20px",
              display: "inline-block",
              position: "relative",
              filter: "drop-shadow(10px 10px 20px rgba(255, 223, 89,0.9))", // Glow effect
            }}
          >
            <Lottie options={defaultOptions} />
          </div>
        </span>
        <span>N</span>
      </div>

      <style>
        {`
          .loader {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 70px;
            font-weight: bold;
            color: #ffde59;
            text-transform: uppercase;
            letter-spacing: 10px;
            text-shadow: 
              0 0 5px #ffde59, 
              0 0 10px #ffcc00, 
              0 0 20px #ffa31a, 
              0 0 30px #ff751a, 
              0 0 40px #ff4500;
            animation: glow 1.5s infinite alternate;
          }

          .loader span {
            position: relative;
            display: inline-block;
          }

          .loader span:nth-child(1) {
            animation-delay: 0.1s;
          }
          .loader span:nth-child(2) {
            animation-delay: 0.3s;
          }
          .loader span:nth-child(3) {
            animation-delay: 0.5s;
          }
          .loader span:nth-child(4) {
            animation-delay: 0.7s;
          }
          .loader span:nth-child(5) {
            animation-delay: 0.9s;
          }

          @keyframes glow {
            0% {
              text-shadow: 
                0 0 40px #ffde59, 
                0 0 8px #ffcc00, 
                0 0 4px #ffa31a, 
                0 0 2px #ff751a, 
                0 0 1px #ff4500;
            }
            100% {
              text-shadow: 
                0 0 0px #ffde59, 
                0 0 0px #ffcc00, 
                0 0 0px #ffa31a, 
                0 0 0px #ff751a, 
                0 0 0px #ff4500;
            }
          }
        `}
      </style>
    </div>
  );
};
export default Loader;
