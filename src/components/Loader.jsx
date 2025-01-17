// import React from "react";
// import Lottie from "react-lottie";
// import animationData from "../Animation.json"; // Adjust path accordingly

// const Loader = () => {
//   const defaultOptions = {
//     loop: true,
//     autoplay: true,
//     animationData: animationData,
//     rendererSettings: {
//       preserveAspectRatio: "xMidYMid slice",
//     },
//   };

//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         height: "100vh",
//         backgroundColor: "#1a202c", // Equivalent to bg-gray-900
//       }}
//     >
//       <Lottie options={defaultOptions} height={300} width={300} />
//     </div>
//   );
// };

// export default Loader;
import React from "react";

const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        margin: 0,
        backgroundColor: "rgba(0, 0, 0, 0.9)", // Dark background
        fontFamily: "'Arial', sans-serif",
        overflow: "hidden",
      }}
    >
      <div className="loader">
        <span>Z</span>
        <span>Y</span>
        <span>G</span>
        <span>O</span>
        <span>N</span>
      </div>

      <style>
        {`
          .loader {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 90px;
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
            animation: fade-in 2s ease-in-out infinite;
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

          @keyframes fade-in {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            50% {
              opacity: 1;
              transform: translateY(0);
            }
            100% {
              opacity: 0;
            }
          }

          @keyframes glow {
            0% {
              text-shadow: 
                0 0 5px #ffde59, 
                0 0 10px #ffcc00, 
                0 0 20px #ffa31a, 
                0 0 30px #ff751a, 
                0 0 40px #ff4500;
            }
            100% {
              text-shadow: 
                0 0 10px #ffde59, 
                0 0 20px #ffcc00, 
                0 0 30px #ffa31a, 
                0 0 40px #ff751a, 
                0 0 50px #ff4500;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Loader;
