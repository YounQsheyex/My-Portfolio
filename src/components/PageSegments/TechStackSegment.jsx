import React from "react";
import { Tech } from "../../../utils/data";
import { motion } from "framer-motion";
import NavBar from "../layout/NavBar";
import Hero from "../Hero";

const TechStackSegment = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
        className="w-full  mt-5 md:mt-10 lg:mt-0"
      >
        <div className="layout">
          <div>
            <div className="flex flex-col items-start text-start">
              <motion.h4
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
                className="text-[white] font-[500] text-[35px]"
              >
                My Tech Stack
              </motion.h4>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
                className="text-[28px] font-[400] text-[white] my-5"
              >
                Technologies I’ve been working with recently
              </motion.p>
            </div>

            <motion.div
              className="flex flex-wrap gap-[120px] justify-center items-center p-5 mt-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
              }}
            >
              {Tech.map((img, i) => {
                return (
                  <motion.div
                    key={i}
                    className="w-[60px] h-[60px]"
                    variants={{
                      hidden: { opacity: 0, scale: 0.8 },
                      visible: { opacity: 1, scale: 1 },
                    }}
                    whileHover={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 5, -5, 0],
                      boxShadow: "0px 0px 20px rgba(0,192,253,0.6)",
                    }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  >
                    <img src={img} alt="" className="w-[60px] h-[60px]" />
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TechStackSegment;
