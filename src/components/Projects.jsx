import React from "react";
import { FaGithub } from "react-icons/fa6";
import { projects } from "../../utils/data";
import { CgArrowTopRight } from "react-icons/cg";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div>
      <motion.div className="w-full py-[34px] lg:py-[50px] border-b-[1px] border-[#726969] ">
        <div className="layout">
          <div className="w-full  mx-auto">
            <div className="max-w-[600px] flex flex-col items-start gap-[12px] lg:gap-[8px]">
              <h2 className="font-[700] text-[32px] lg:text-[56px] text-[white] leading-[100%]">
                Featured Projects
              </h2>
              <p className="font-[400] text-[16px] lg:text-[18px] text-[white] leading-[160%] mt-5">
                Here are some of the selected projects that showcase my passion
                for front-end development.
              </p>
            </div>
            <div className="w-full">
              {projects.map((d, index) => {
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.2,
                      ease: "easeOut",
                    }}
                    whileHover={{
                      scale: 1.05,
                      rotateX: 5,
                      rotateY: -5,
                      boxShadow: "0px 12px 35px rgba(0,0,0,0.2)",
                    }}
                    whileTap={{
                      scale: 0.98,
                      rotateX: 0,
                      rotateY: 0,
                    }}
                    className="my-15 flex flex-col  lg:flex-row gap-[40px] lg:gap-[60px] items-start lg:items-center shadow-2xl p-3 rounded-4xl bg-white"
                  >
                    <div className="relative w-full flex-1">
                      <div className="w-full h-[343px] lg:h-[600px] object-cover rounded-[16px] bg-[black] flex justify-center items-center ">
                        <img
                          src={d.image}
                          alt="img"
                          className="w-full h-full lg:w-[500px] lg:h-[500px]  object-cover rounded-[16px]"
                        />
                      </div>
                      {/* {d.tag && (
                        <div className="bg-[white] px-[12px] py-[6px] flex items-center rounded-full absolute top-2 left-2">
                          <p className="font-[500] text-[12px] tracking-[1%] text-[#000000]">
                            {d.tag}
                          </p>
                        </div>
                      )} */}
                    </div>
                    <div className="mt-10 lg:mt-0 p-3 flex-1 w-full lg:max-w-[600px]">
                      <div>
                        <h3 className="font-[500] text-[24px] text-[#000000] leading-[140%]">
                          {d.title}
                        </h3>
                        <p className="mt-3 font-[400] text-[16px] text-[#050000] leading-[160%]">
                          {d.details}
                        </p>
                      </div>
                      <div className="">
                        <div className="border-b-[1px] border-[#484848]">
                          <h5 className="my-5 font-[600] text-[16px] text-[#131010] leading-[150%]">
                            Project Info
                          </h5>
                        </div>
                        <div className="my-5 w-full flex justify-between items-center border-b-[1px] border-[#484848] py-[16px]">
                          <p className="font-[500] text-[16px] text-[#131010]">
                            Year
                          </p>
                          <p className="font-[500] text-[16px] text-[#131010]">
                            {d.year}
                          </p>
                        </div>
                        <div className="my-5 w-full flex justify-between items-center border-b-[1px] border-[#484848] py-[16px]">
                          <p className="font-[500] text-[16px] text-[#131010]">
                            Role
                          </p>
                          <p className="font-[500] text-[16px] text-[#131010]">
                            {d.role}
                          </p>
                        </div>
                      </div>
                      <div className="w-[252px] lg:w-[284px] flex gap-[24px] items-center ">
                        <a
                          href={d.live}
                          target="blank"
                          className="border-b-[1px] border-[#000000] text-[#131010] hover:text-[#773085]"
                        >
                          <p className="flex items-center gap-[4px] font-[700] text-[14px]  ">
                            LIVE DEMO
                            <span>
                              <CgArrowTopRight />
                            </span>
                          </p>
                        </a>
                        <a
                          href={d.git}
                          target="blank"
                          className="border-b-[1px] border-[#000000] text-[#131010] hover:text-[#773085]"
                        >
                          <p className="flex items-center gap-[4px] font-[700] text-[14px]">
                            See on Github
                            <span>
                              <FaGithub />
                            </span>
                          </p>
                        </a>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
