import React from "react";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import avatar from "../assets/avatar.png";

const Hero = () => {
  return (
    <motion.div
      className="w-full bg-white mt-5 md:mt-5 lg:mt-20"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="layout">
        <div className="flex flex-col items-center justify-between md:flex-row px-2 ">
          {/* Left Text */}
          <motion.div
            className="max-w-[636px]"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h4 className="text-[#42446E] text-[28px] text-center md:text-start md:text-[32px] lg:text-[48px] font-[700] text-shadow-lg">
              Hi👋, My name is <br />{" "}
              <span className=" bg-gradient-to-r from-[#E70FAA] to-[#00C0FD] bg-clip-text text-transparent">
                Oluwaseyi E. Lawrence <br />
              </span>{" "}
              <ReactTyped
                strings={[
                  "I build things for web",
                  "I am a Full Stack Developer",
                  "A Front-End Developer",
                ]}
                typeSpeed={60}
                backSpeed={50}
                loop
              />
            </h4>
          </motion.div>

          {/* Avatar */}
          <motion.div
            className="w-[300px] h-[300px] lg:w-[349px] lg:h-[349px] rounded-full  bg-gradient-to-r from-[#E70FAA] to-[#00C0FD] my-4 md:my-0 p-[12px]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={avatar}
              alt="YounQsheyex"
              className="w-full h-full rounded-full object-cover "
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
