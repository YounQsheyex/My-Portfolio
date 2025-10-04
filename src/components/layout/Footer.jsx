import React from "react";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <motion.div
      className="w-full"
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
              className="w-[20%] lg:w-[30%] flex flex-col md:flex-row items-center gap-4 text-[white] text-[16px] my-5 md:my-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <p>+2348161641182</p>
              <p>younqsheyex@gmail.com</p>
            </motion.div>

            <motion.div
              className="w-[30%] lg:w-[10%] flex gap-3 justify-center items-center md:justify-end text-white"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <motion.a
                href="https://github.com/YounQsheyex"
                target="blank"
                className="w-[30px] h-[30px]"
                whileHover={{ scale: 1.2, rotate: 10, color: "#00C0FD" }}
              >
                <FaGithub className="w-[30px] h-[30px]" />
              </motion.a>
              <motion.a
                href="https://x.com/younqsheyex?s=21&t=u0zk0jI0voqCcJ_BaBInVQ"
                target="blank"
                className="w-[30px] h-[30px]"
                whileHover={{ scale: 1.2, rotate: -10, color: "#00C0FD" }}
              >
                {" "}
                <FaXTwitter className="w-[30px] h-[30px]" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/younqsheyex-seyi-lawrence-585b6b272/"
                target="blank"
                whileHover={{ scale: 1.2, rotate: 10, color: "#00C0FD" }}
              >
                {" "}
                <FaLinkedinIn className="w-[30px] h-[30px]" />
              </motion.a>
            </motion.div>
          </motion.div>

          <hr className="border-[white] my-5" />

          {/* Bottom Row */}
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div className="flex flex-col md:flex-row justify-between gap-5 md:gap-10 lg:gap-20 items-center text-[white] text-[16px]">
              <Link to={"/"}>
                <motion.p whileHover={{ scale: 1.1, color: "#00C0FD" }}>
                  Home
                </motion.p>
              </Link>
              <Link to={"/about"}>
                <motion.p whileHover={{ scale: 1.1, color: "#00C0FD" }}>
                  About
                </motion.p>
              </Link>
              <Link to={"/tech-stack"}>
                <motion.p whileHover={{ scale: 1.1, color: "#00C0FD" }}>
                  Tech Stack
                </motion.p>
              </Link>
              <Link to={"/projects"}>
                <motion.p whileHover={{ scale: 1.1, color: "#00C0FD" }}>
                  Projects
                </motion.p>
              </Link>
              <Link to={"/contact"}>
                <motion.p whileHover={{ scale: 1.1, color: "#00C0FD" }}>
                  Contact
                </motion.p>
              </Link>
            </motion.div>

            <motion.div
              className="mt-10 md:mt-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <p className="text-white text-[16px] font-[500]">
                &copy; 2025 Oluwaseyi E. Lawrence
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
