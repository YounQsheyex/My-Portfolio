import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { BsBuildingFillGear } from "react-icons/bs";
import { BiSolidSchool } from "react-icons/bi";
import { SlCalender } from "react-icons/sl";
import { work, education } from "../../../utils/data";
import Hero from "../Hero";
import NavBar from "../layout/NavBar";

const AboutMe = () => {
  return (
    <div className="w-full text-white ">
      <NavBar />
      <div className="lg:-mt-30">
        <Hero />
      </div>
      <div className="layout">
        <div>
          <h4 className="font-[700] text-[42px]">About Me</h4>
          <p className="text-[18px] font-[400] max-w-[708px]">
            The Generator App is an online tool that helps you to export
            ready-made templates ready to work as your future website. It helps
            you to combine slides, panels and other components and export it as
            a set of static files: HTML/CSS/JS.
          </p>
        </div>
        <div>
          <div>
            <h4 className="font-[700] text-[32px] md:text-[42px]">
              Work Experience
            </h4>
          </div>
          {work.map((w, i) => {
            return (
              <div key={i} className="max-w-[704px] my-4">
                <div className="flex sm:flex-row md:flex-row justify-between items-center my-2 md:my-0 ">
                  <h5>{w.position}</h5>
                  <p>{w.type}</p>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-0">
                  <div className="flex flex-col md:flex-row items-center md:gap-5">
                    <div className="flex gap-2 items-center">
                      <BsBuildingFillGear /> <p>{w.job}</p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <CiLocationOn /> <p>{w.location}</p>
                    </div>
                  </div>
                  <div className="flex gap-2 items-center">
                    <BiSolidSchool /> <p>{w.date}</p>
                  </div>
                </div>
                <hr className="my-7" />
              </div>
            );
          })}
        </div>
        <div className="mt-20">
          <div>
            <h4 className="text-[42px] font-[700]">Education</h4>
          </div>

          {education.map((e, i) => {
            return (
              <div key={i} className="max-w-[704px] my-4">
                <div className="flex sm:flex-row md:flex-row justify-between items-center my-2 md:my-0 ">
                  <h5>{e.degree}</h5>
                  <p>{e.type}</p>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-0">
                  <div className="flex flex-col md:flex-row items-center md:gap-5">
                    <div className="flex gap-2 items-center">
                      <BsBuildingFillGear /> <p>{e.school}</p>
                    </div>
                  </div>
                  <div className="flex gap-2 items-center">
                    <BiSolidSchool /> <p>{e.year}</p>
                  </div>
                </div>
                <hr className="my-7" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
