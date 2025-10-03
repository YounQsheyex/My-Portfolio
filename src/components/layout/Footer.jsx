import React from "react";
import { motion } from "framer-motion";
import gitsmall from "../../assets/gitsmall.png";
import twitter from "../../assets/twitter.png";
import linkdn from "../../assets/linkdn.png";

const Footer = () => {
  return (
    <motion.div
      className="w-full bg-white"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="layout">
        <div className="flex flex-col gap-5">
          {/* Top Row */}
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center gap-[5%] p-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="w-[20%] lg:w-[40%]"
              whileHover={{ scale: 1.05 }}
            >
              <img src="younqsheyex" alt="Younqsheyex" />
            </motion.div>

            <motion.div
              className="w-[20%] lg:w-[30%] flex flex-col md:flex-row items-center gap-4 text-[#42446E] text-[16px] my-5 md:my-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <p>+2348161641182</p>
              <p>younqsheyex@gmail.com</p>
            </motion.div>

            <motion.div
              className="w-[30%] lg:w-[10%] flex gap-3 justify-center items-center md:justify-end"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <motion.img
                src={gitsmall}
                alt="github"
                className="w-[30px] h-[30px]"
                whileHover={{ scale: 1.2, rotate: 10 }}
              />
              <motion.img
                src={twitter}
                alt="twitter"
                className="w-[30px] h-[30px]"
                whileHover={{ scale: 1.2, rotate: -10 }}
              />
              <motion.img
                src={linkdn}
                alt="linkdn"
                className="w-[30px] h-[30px]"
                whileHover={{ scale: 1.2, rotate: 10 }}
              />
            </motion.div>
          </motion.div>

          <hr className="bg-[#141414] my-5" />

          {/* Bottom Row */}
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div className="flex flex-col md:flex-row justify-between gap-5 md:gap-10 lg:gap-20 items-center text-[#42446E] text-[16px]">
              <motion.a href="" whileHover={{ scale: 1.1, color: "#00C0FD" }}>
                Home
              </motion.a>
              <motion.a href="" whileHover={{ scale: 1.1, color: "#00C0FD" }}>
                About
              </motion.a>
              <motion.a href="" whileHover={{ scale: 1.1, color: "#00C0FD" }}>
                Tech Stack
              </motion.a>
              <motion.a href="" whileHover={{ scale: 1.1, color: "#00C0FD" }}>
                Projects
              </motion.a>
              <motion.a href="" whileHover={{ scale: 1.1, color: "#00C0FD" }}>
                Contact
              </motion.a>
            </motion.div>

            <motion.div
              className="mt-10 md:mt-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <p>&copy; 2025 Oluwaseyi E. Lawrence</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
