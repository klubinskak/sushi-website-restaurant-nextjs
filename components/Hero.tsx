import React from "react";
import { motion, Variants } from "framer-motion";

const textAnimate = {
  offscreen: { y: 100, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.4, duration: 1 },
  },
};

const Hero = () => {
  return (
    <motion.div
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ staggerChildren: 0.5 }}
      className="text-center flex flex-col justify-center h-[50vh] md:h-[50vh]"
    >
      <motion.div variants={textAnimate}>
        <h1 className="text-6xl text-[#6c757d] opacity-60">我们邀请</h1>
        <h1 className="relative text-5xl text-gray-200 bottom-6">Harumi</h1>
        <p className="text-sm text-gray-400 opacity-70">Made with tradition.</p>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
