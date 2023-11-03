import { motion, useScroll,useAnimation , useTransform,useDragControls } from "framer-motion";
import React, { useRef ,useEffect} from "react";
import './Landing.css'; // Import the CSS file
import background from "../img/mountain-bg.jpg";
import cut from "../img/mountain-cut.png";



export default function Landing() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  const controls = useAnimation();


  const fadeLeft ={
    hidden: {opacity:0,x:-180},
    visible: {opacity:1,x:0}
};

  const fadeTop ={
    hidden: {opacity:0,y:-180},
    visible: {opacity:1,y:0}
};

const fadeIn ={
  hidden: {opacity:0, scale: 0},
  visible: {opacity:1,scale: 1}
};

    const container = {
        hidden: { opacity: 0, scale: 0 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            duration:1,
            delayChildren: .8,
            staggerChildren: .9
          }
        }
      };
  const hello_item = {
    hidden: { x: 200, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1
    }
  };

  const im_item = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };
  

  useEffect(() => {
    controls.start('visible');

   
  });
  return (
    <div
      ref={ref}
      id ="landing"
      className="w-full h-screen overflow-hidden relative grid place-items-center"
    >
    

    <motion.div
    initial="hidden"
    animate={controls}
    variants={container}
    className="hello-container"
    >
      <motion.div
        style={{ y: textY }}
        id = "hello"
        className="center-text z-10"
        variants={hello_item}

      >
        Hello
      </motion.div>
      
      <motion.div
        style={{ y: textY , marginLeft:30}}
        id = "hello"
        className="center-text z-10"
        variants={im_item}
      >
        I'm 
      </motion.div>

      <div className="name" >
        <motion.div
            drag
            dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
            dragConstraints={{ left: 10, right: 10 ,top:10,bottom:10}}
            whileDrag={{scale:1.5}}
            dragElastic={0.2} 
            variants={hello_item}  
            whileHover={{ scale: 1.3 }} 
            id = "j" 
            >J</motion.div>

        <motion.div
            drag
            dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
            dragConstraints={{ left: 10, right: 10 ,top:10,bottom:10}}
            whileDrag={{scale:1.5}}
            dragElastic={0.2} 
            whileHover={{ scale: 1.3 }} 
            variants={im_item} 
            id = "a"> <div className="a">A</div></motion.div>
        <motion.div
            drag
            dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
            dragConstraints={{ left: 10, right: 10 ,top:10,bottom:10}}
            whileDrag={{scale:1.5}} 
            dragElastic={0.2} whileHover={{ scale: 1.3 }} variants={fadeTop} 
            id = "s">S</motion.div>
        <motion.div     
            drag
            dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
            dragConstraints={{ left: 10, right: 10 ,top:10,bottom:10}}
            whileDrag={{scale:1.5}} 
            dragElastic={0.2} whileHover={{ scale: 1.3 }} variants={im_item}  
            id = "o">O</motion.div>
        <motion.div    drag          dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
            dragConstraints={{ left: 10, right: 10 ,top:10,bottom:10}}
            whileDrag={{scale:1.5}}
            whileHover={{ scale: 1.3 }} 
            dragElastic={0.2}variants={hello_item} id = "n">N</motion.div>
        </div> 
      </motion.div>


      {/* <motion.h1
        style={{ y: textY }}
        className="center-text relatives z-10"
      >
        

        <motion.div className="name">
        <span id = "j">J</span>
        <span id = "a"> <div className="a">A</div></span>
        <span id = "s"> S</span>
        <div id = "o">O</div>
        <span id = "n">N</span>
        </motion.div>
      </motion.h1> */}

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