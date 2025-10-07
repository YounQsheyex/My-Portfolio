import React, { useState } from "react";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import yq from "../../assets/yqlogo.png";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 z-50 w-full bg-gradient-to-r from-[#123524] to-[#1b4d3e]  shadow-xl  "
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="layout ">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <Link to={"/"}>
                {" "}
                <img
                  src={yq}
                  alt="YounQsheyex"
                  className="w-[60px] object-cover"
                />
              </Link>
            </motion.div>

            {/* Links */}
            <motion.div
              className="hidden md:flex justify-between gap-5 md:gap-10 lg:gap-20 items-center text-[white] text-[16px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <Link to={"/"}>
                <motion.p whileHover={{ scale: 1.1, color: "#05f8afd2" }}>
                  Home
                </motion.p>
              </Link>
              <Link to={"/about"}>
                <motion.p whileHover={{ scale: 1.1, color: "#05f8afd2" }}>
                  About
                </motion.p>
              </Link>
              <Link to={"/tech-stack"}>
                <motion.p whileHover={{ scale: 1.1, color: "#05f8afd2" }}>
                  Tech Stack
                </motion.p>
              </Link>
              <Link to={"/projects"}>
                <motion.p whileHover={{ scale: 1.1, color: "#05f8afd2" }}>
                  Projects
                </motion.p>
              </Link>
              <Link to={"/contact"}>
                <motion.p whileHover={{ scale: 1.1, color: "#05f8afd2" }}>
                  Contact
                </motion.p>
              </Link>
            </motion.div>

            {/* Socials */}
            <motion.div
              className="hidden md:flex justify-between gap-2 md:gap-3 lg:gap-5 items-center text-white"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <motion.a
                href="https://github.com/YounQsheyex"
                target="blank"
                className="w-[30px] h-[30px]"
                whileHover={{ scale: 1.2, rotate: 10, color: "#05f8afd2" }}
              >
                <FaGithub className="w-[30px] h-[30px]" />
              </motion.a>
              <motion.a
                href="https://x.com/younqsheyex?s=21&t=u0zk0jI0voqCcJ_BaBInVQ"
                target="blank"
                className="w-[30px] h-[30px]"
                whileHover={{ scale: 1.2, rotate: -10, color: "#05f8afd2" }}
              >
                {" "}
                <FaXTwitter className="w-[30px] h-[30px]" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/younqsheyex-seyi-lawrence-585b6b272/"
                target="blank"
                whileHover={{ scale: 1.2, rotate: 10, color: "#05f8afd2" }}
              >
                {" "}
                <FaLinkedinIn className="w-[30px] h-[30px]" />
              </motion.a>
            </motion.div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setOpen(!open)}
                className="focus:outline-none"
              >
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: open ? 90 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-6 h-6 flex flex-col justify-between"
                >
                  <span className="block w-6 h-[2px] bg-white"></span>
                  <span className="block w-6 h-[2px] bg-white"></span>
                  <span className="block w-6 h-[2px] bg-white"></span>
                </motion.div>
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Mobile Dropdown */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="md:hidden bg-[#c2dfc1] shadow-lg absolute top-[60px] left-0 w-full z-50 flex flex-col items-center gap-5 py-5 text-[#666666]"
        >
          <Link to={"/"}>
            <motion.p whileHover={{ scale: 1.1, color: "#05f8afd2" }}>
              Home
            </motion.p>
          </Link>
          <Link to={"/about"}>
            <motion.p whileHover={{ scale: 1.1, color: "#05f8afd2" }}>
              About
            </motion.p>
          </Link>
          <Link to={"/tech-stack"}>
            <motion.p whileHover={{ scale: 1.1, color: "#05f8afd2" }}>
              Tech Stack
            </motion.p>
          </Link>
          <Link to={"/projects"}>
            <motion.p whileHover={{ scale: 1.1, color: "#05f8afd2" }}>
              Projects
            </motion.p>
          </Link>
          <Link to={"/contact"}>
            <motion.p whileHover={{ scale: 1.1, color: "#05f8afd2" }}>
              Contact
            </motion.p>
          </Link>
          <div className="flex gap-4 mt-3">
            <motion.a
              href="https://github.com/YounQsheyex"
              target="blank"
              className="w-[30px] h-[30px]"
              whileHover={{ scale: 1.2, rotate: 10, color: "#05f8afd2" }}
            >
              <FaGithub className="w-[30px] h-[30px]" />
            </motion.a>
            <motion.a
              href="https://x.com/younqsheyex?s=21&t=u0zk0jI0voqCcJ_BaBInVQ"
              target="blank"
              className="w-[30px] h-[30px]"
              whileHover={{ scale: 1.2, rotate: -10, color: "#05f8afd2" }}
            >
              {" "}
              <FaXTwitter className="w-[30px] h-[30px]" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/younqsheyex-seyi-lawrence-585b6b272/"
              target="blank"
              whileHover={{ scale: 1.2, rotate: 10, color: "#05f8afd2" }}
            >
              {" "}
              <FaLinkedinIn className="w-[30px] h-[30px]" />
            </motion.a>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default NavBar;
