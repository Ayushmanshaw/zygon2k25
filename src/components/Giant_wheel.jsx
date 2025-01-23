import React from "react";

const GiantWheel = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "rgba(14, 14, 14, 0.96)", // Dark background
        overflow: "hidden",
      }}
    >
      <div className="giant-wheel">
        <div className="wheel">
          {Array.from({ length: 12 }).map((_, i) => (
            <div className="spoke" key={i} style={{ transform: `rotate(${i * 30}deg)` }} />
          ))}
        </div>
      </div>

      <style>
        {`
          .giant-wheel {
            position: relative;
            width: 300px;
            height: 300px;
          }

          .wheel {
            width: 100%;
            height: 100%;
            border: 5px solid #ffde59; /* Outer circle */
            border-radius: 50%;
            position: relative;
            animation: spin 8s linear infinite;
            box-shadow: 
              0 0 15px #ffde59, 
              0 0 30px #ffcc00, 
              0 0 45px #ffa31a;
          }

          .spoke {
            position: absolute;
            width: 4px;
            height: 50%;
            background: #ffde59;
            top: 0;
            left: 50%;
            transform-origin: bottom center;
            box-shadow: 
              0 0 10px #ffde59, 
              0 0 20px #ffcc00;
          }

          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </div>
  );
};

export default GiantWheel;
