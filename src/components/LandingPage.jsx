// import { useState, useEffect, useRef } from "react";
// import FOG from "vanta/dist/vanta.fog.min"; // Import the Vanta fog effect
// import * as THREE from "three"; // Import THREE.js
import "animate.css";
import { TiThMenu } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";

const Landingpage = () => {
  // const [vantaEffect, setVantaEffect] = useState(null);
  // const myRef = useRef(null);




  return (
    <div
  style={{
    position: "relative",
    width: "100%",
    height: "100vh", // Ensures the container spans the full height of the viewport
    overflow: "hidden",
  }}
>
  {/* Background Section */}
  <div
    style={{
      background: "rgba(0,0,0,1)",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: 0,
      display: "flex",
      justifyContent: "center", // Centers the image horizontally
      alignItems: "center", // Centers the image vertically
    }}
  >
    <img
      src="./img/bg5.png"
      alt="Background"
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover", // Ensures the image fully covers the container without distortion
        opacity: "0.5",
      }}
    />
  </div>

  {/* Foreground Section */}
  <div className="relative z-10 ">
    <div className="flex justify-between px-2 pt-2">
      <div
        className="animate__animated animate__fadeInLeft wow"
        data-wow-delay="2.5s"
      >
        <img src="./img/zygonLogo.png" alt="Logo" className="w-[6rem]" />
      </div>
      <div
        className="mt-[-57px] text-4xl text-white animate__animated animate__fadeInRight wow"
        data-wow-delay="2.5s"
      >
        <TiThMenu />
      </div>
    </div>
    <div className="relative z-10 flex justify-between text-amber-400 font-serif w-screen px-1 text-lg items-center">
      <div
        className="mt-[-0px] animate__animated animate__fadeInUp wow"
        style={{ writingMode: "vertical-rl" }}
        data-wow-delay="2s"
      >
        <div
          className="mt-[-140px] animate__animated animate__fadeInUp wow"
          style={{ writingMode: "vertical-rl" }}
          data-wow-delay="2s"
        >
          SILICON UNIVERSITY
        </div>
      </div>
      <img
        src="./img/test3.gif"
        alt="Logo"
        className="w-[17rem] md:w-[25rem] animate__animated animate__zoomIn wow"
        data-wow-delay="1s"
      />
      <div
        className="mt-[280px] animate__animated animate__fadeInDown wow flex items-center"
        style={{
          writingMode: "vertical-lr",
        }}
        data-wow-delay="2s"
      >
        FOLLOW US ON &ensp;
        <FaInstagram />
      </div>
    </div>
  </div>
</div>

      

  );
}

export default Landingpage;
