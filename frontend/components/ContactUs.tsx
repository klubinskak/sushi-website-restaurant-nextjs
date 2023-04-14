import React from "react";
import ContactForm from "./ContactForm";
import GoogleMap from "./GoogleMap";
import { motion } from "framer-motion";
import { textAnimate } from "../utils/motion";

const Contact = () => {
  return (
    <section id="contact-us" className="p-10">
      <motion.div
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ staggerChildren: 0.5 }}
        className="flex flex-col items-center w-full"
        id="contact"
      >
        <h1 className="p-5 text-2xl font-semibold text-white">Contact Us</h1>
        <motion.div
          variants={textAnimate}
          className="flex flex-col items-center justify-center w-full space-x-12 md:p-8 space-y-7 lg:flex-row"
        >
          <div className="md:flex items-center justify-center md:space-x-[150px]">
            <div className="space-y-2 text-center sm:text-left">
              <p className="py-2 mt-10 font-bold text-white md:mt-0">
                Send me a message{" "}
              </p>
              <ContactForm />
            </div>
          </div>
        </motion.div>
        <div className="pt-10">
          <GoogleMap />
          </div>
      </motion.div>
    </section>
  );
};

export default Contact;
