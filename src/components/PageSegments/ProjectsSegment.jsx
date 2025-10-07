import React from "react";
import { projects } from "../../../utils/data";
import { FaGithub } from "react-icons/fa6";
import { CgArrowTopRight } from "react-icons/cg";
import { motion } from "framer-motion";
import NavBar from "../layout/NavBar";

const ProjectsSegment = () => {
  return (
    <div>
      <div className="pt-40">
        <motion.div className="w-full">
          <div className="layout">
            <div className="w-full  mx-auto p-2">
              <div className="max-w-[600px] flex flex-col items-start gap-[12px] lg:gap-[8px]">
                <h2 className="font-[700] text-[32px] lg:text-[56px] text-[white] leading-[100%]">
                  Featured Projects
                </h2>
                <p className="font-[400] text-[16px] lg:text-[18px] text-[white] leading-[160%] mt-5 p-5">
                  Here are some of the selected projects that showcase my
                  passion for front-end development.
                </p>
              </div>
              <div className="mt-10 flex flex-wrap md:justify-center lg:justify-evenly gap-5 items-start text-[#05f8afd2]">
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
                      className=" my-2 w-full md:w-[300px] lg:w-[373px] col-span-1"
                    >
                      <div className="bg-[#252323] w-full h-[260px] rounded-t-lg shadow-xl">
                        <img
                          src={d.image}
                          alt=""
                          className="w-full h-[260px] rounded-t-lg object-cover p-5"
                        />
                      </div>
                      <div className="bg-[#252525] rounded-b-xl p-5">
                        <div className="mb-3">
                          <p className="mb-3 text-[13px] ">{d.type}</p>
                          <h5 className="text-[#ffffff] font-[500] text-[18px]">
                            {d.title}
                          </h5>
                          <p className="mt-3 flex items-center gap-5">
                            Role:{" "}
                            <span className="text-[#91ada3] underline">
                              {d.role}
                            </span>
                          </p>
                          <p className="w-full lg:w-[314px] my-3 font-[400] text-[14px] text-[#91ada3]">
                            {d.details}
                          </p>
                        </div>
                        {d.Tech && (
                          <div className="my-5 flex flex-wrap gap-1 lg:gap-5 items-center text-[14px] justify-center md:justify-start">
                            {d.Tech.map((tech, i) => {
                              return (
                                <p
                                  key={i}
                                  className="border-1 rounded-full p-1.5"
                                >
                                  {[tech]}
                                </p>
                              );
                            })}
                          </div>
                        )}
                        <div className=" mb-3 w-[252px] lg:w-[284px] flex gap-[24px] items-center ">
                          <a
                            href={d.live}
                            target="blank"
                            className="border-b-[1px]  hover:text-[#d4d8d7]"
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
                            className="border-b-[1px] hover:text-[#d4d8d7]"
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
    </div>
  );
};

export default ProjectsSegment;
