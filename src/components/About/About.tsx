import React from "react";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion";
import { wrap } from "@motionone/utils";
import './About.css'; // Import the CSS file


interface ParallaxProps {
  children: string;
  baseVelocity: number;
  // color:string;
}


function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  /**
   * The number of times to repeat the child text should be dynamically calculated
   * based on the size of the text and viewport. Likewise, the x motion value is
   * currently wrapped between -20 and -45% - this 25% is derived from the fact
   * we have four children (100% / 4). This would also want deriving from the
   * dynamically generated number of children.
   *   const colors = ["#E54461", "#83B2A3", "#69BBE8", "#D464A2", "#F3D79B"];

   */
  return (
    <div className="parallax">
      
      <motion.div className="scroller" style={{ x}}>
        <span style={{ color :"#E54461"}} >{children} </span>
        <span style={{ color :"#83B2A3" }}>{children} </span>
        <span style={{ color :"#69BBE8" }}>{children} </span>
        <span style={{ color :"#D464A2" }}>{children} </span>
         <span style={{ color :"#F3D79B" }}>{children} </span>
         <span style={{ color :"#E54461" }}>{children} </span>

         <span style={{ color :"#83B2A3" }}>{children} </span>

         <span style={{ color :"#69BBE8" }}>{children} </span>

      </motion.div>
      
    </div>
  );
}

export default function About() {
  return (
    <>   

    <section id = "about">
      <ParallaxText baseVelocity={1}   >About Jason  Nguyen</ParallaxText>
      <ParallaxText baseVelocity={-2}   >Full Stack Developer</ParallaxText>
      <ParallaxText baseVelocity={2}   >Code Design </ParallaxText>
      <ParallaxText baseVelocity={-3}   >Software Engineering</ParallaxText>
      <ParallaxText baseVelocity={3}   >Volleyball Travel</ParallaxText>

    </section>
    </>
  );
}
