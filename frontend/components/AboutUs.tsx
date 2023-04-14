import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { textAnimate } from "../utils/motion";

const AboutUs = () => {
  return (
    <section id="about-us" className="h-auto p-12 ">
      <h1 className="text-2xl font-semibold text-center text-white">
        About Us
      </h1>
      <motion.div
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ staggerChildren: 0.5 }}
        className="flex flex-col items-center justify-center md:flex-row"
      >
        <motion.div
          variants={textAnimate}
          className="flex flex-col text-center w-[400px] space-y-5 "
        >
          <p className="text-center">🍱</p>
          <p className="text-xs text-white">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary, making this the first true
            generator on the Internet. It uses a dictionary of over 200 Latin
            words, combined with a handful of model sentence structures, to
            generate Lorem Ipsum which looks reasonable. The generated Lorem
            Ipsum is therefore always free from repetition, injected humour, or
            non-characteristic words etc.
          </p>
        </motion.div>
        <motion.div variants={textAnimate} className="">
          <Image
            src="/paleczki.png"
            width={450}
            height={400}
            alt="about-us"
            className="relative left-[100px] top-8"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutUs;
