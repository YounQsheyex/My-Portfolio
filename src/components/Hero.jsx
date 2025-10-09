import React from "react";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import avatar from "../assets/avatar.png";
import { RiDownload2Line } from "react-icons/ri";

const Hero = () => {
  return (
    <motion.div
      className="w-full pt-25 md:pt-25 lg:pt-50 "
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
            <h4 className="text-[#c2dfc1] text-[28px] text-center md:text-start md:text-[32px] lg:text-[48px] font-[700] ">
              Hi👋, My name is <br />{" "}
              <span className=" bg-gradient-to-r from-[#02f817] via-[#09b473] to-[#028313] bg-clip-text text-transparent">
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
            <div className="mt-5 bg-gradient-to-r from-[#02f817] via-[#09b473] to-[#028313] w-[212px] h-[48px] lg:w-[224px] lg:h-[54px] rounded-full p-2 flex justify-center items-center mx-auto lg:mx-0 mb-5 ">
              <a
                href="https://drive.google.com/file/d/1Xvizd8sMbaRDr0ewe1SsrQSpkVwRA3fu/view?usp=sharing"
                target="blank"
              >
                <button className="flex items-center  gap-2 hover:gap-0 hover:justify-between cursor-pointer group transition-all duration-300">
                  <p className=" gap-[12px] font-[700] text-[14px] lg:text-[16px] text-[#0A0A0A]">
                    DOWNLOAD RESUME
                  </p>
                  <span className="w-[10px] h-[10px] bg-black rounded-full flex justify-center items-center group-hover:w-[40px] group-hover:h-[40px]">
                    <RiDownload2Line
                      size={20}
                      color="#ffffff"
                      className="opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                    />
                  </span>
                </button>
              </a>
            </div>
          </motion.div>

          {/* Avatar */}
          <motion.div
            className="w-[300px] h-[300px] lg:w-[349px] lg:h-[349px] rounded-full  bg-gradient-to-r from-[#07e442] to-[#01090c] my-4 md:my-0 p-[12px]"
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
