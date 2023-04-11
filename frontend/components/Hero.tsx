import React from "react";
import { motion } from "framer-motion";
import { textAnimate } from "../utils/motion";

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
