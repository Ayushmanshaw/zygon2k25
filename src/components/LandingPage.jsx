import { useState, useEffect, useRef } from "react";
import FOG from "vanta/dist/vanta.fog.min"; // Import the Vanta fog effect
import * as THREE from "three"; // Import THREE.js
import "animate.css";
import { TiThMenu } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";

const Landingpage = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        FOG({
          el: myRef.current, // Attach the effect to the ref
          THREE, // Pass in THREE.js
          highlightColor: 0xff6347, // Customize the fog color
          midtoneColor: 0xffffff,
          lowlightColor: 0x000000,
          baseColor: 0x000000,
          blurFactor: 0.6,
          speed: 1.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy(); // Clean up the effect on unmount
    };
  }, [vantaEffect]);

  return (
    <>
      <div ref={myRef} className="min-h-screen bg-cover bg-center">
        <div className="flex justify-between px-2 pt-2">
          <div
            className="animate__animated animate__fadeInLeft wow"
            data-wow-delay="2.5s"
          >
            <img src="/logo.png" alt="Logo" className="w-[6rem]" />
          </div>
          <div
            className="mt-[-57px] text-4xl text-white animate__animated animate__fadeInRight wow"
            data-wow-delay="2.5s"
          >
            <TiThMenu />
          </div>
        </div>
        <div className="flex justify-between text-amber-400 font-serif w-screen px-1 text-lg items-center">
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
            src="/logo.png"
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
        <div className="animate__animated animate__fadeInUp mt-5">
          <div
            className="flex text-white text-4xl justify-center -rotate-12 font-extrabold"
            style={{ fontFamily: "Black Bones, sans-serif" }}
          >
            28 <sup>th</sup> Feb-1 <sup>st</sup> March
          </div>
          <div
            className="flex text-white text-4xl justify-center -rotate-12 font-extrabold"
            style={{ fontFamily: "Black Bones, sans-serif" }}
          >
            2025
          </div>
        </div>
      </div>
    </>
  );
};

export default Landingpage;
