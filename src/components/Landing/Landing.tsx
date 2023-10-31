import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import './Landing.css'; // Import the CSS file
import background from "../img/mountain-bg.png";
import cut from "../img/mountain-cut.png";

export default function Landing() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  return (
    <div
      ref={ref}
      id ="landing"
      className="w-full h-screen overflow-hidden relative grid place-items-center"
    >
      <motion.h1
        style={{ y: textY }}
        className="center-text relative z-10"
      >
        Hello I'm Jason
      </motion.h1>

      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${background})`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: backgroundY,
        }}
      />

      <div
        className="absolute inset-0 z-20"
        style={{
          backgroundImage: `url(${cut})`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          backgroundRepeat:'no-repeat'
        }}
      />
    </div>
   
  );
}