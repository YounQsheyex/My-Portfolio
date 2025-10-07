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
    <div className="w-full text-white mt-5 ">
      <div className="layout">
        <div>
          <h4 className="font-[700] text-[42px]">About Me</h4>
          <p className="text-[18px] font-[400] max-w-[708px] leading-8 tracking-wide">
            I am a full-stack developer based looking for exciting
            opportunities. Has Computer Science background. Likes to focus on
            accessibility when developing. Passionate and curious about solving
            problems. Currently, I’m exploring Reactjs, NodeJs Webflow and a bit
            of Designing. While I am not programming, I enjoy playing football,
            8 Ball pools and listening to music. Learning more to improve skill.
          </p>
        </div>
        <div className="mt-20">
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
                  <p className="text-[#018C0F] text-[12px] text-center font-[500] w-[84px] rounded-full p-1.5 bg-[#D7FFE0]">
                    {w.type}
                  </p>
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
                  <p className="text-[#018C0F] text-[12px] text-center font-[500] w-[84px] rounded-full p-1.5 bg-[#D7FFE0]">
                    {e.type}
                  </p>
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
