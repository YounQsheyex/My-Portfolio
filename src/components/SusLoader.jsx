import React from "react";
import { BounceLoader } from "react-spinners";
import logo from "../assets/yqlogo.png";

const SusLoader = ({ height }) => {
  return (
    <div
      style={{ height: height ? height : "100vh" }}
      className={`flex items-center justify-center`}
    >
      <div className="flex items-center gap-3">
        <BounceLoader color="#05f8afd2" />
        <div className="flex gap-2 items-center">
          <img src={logo} alt="logo" className="w-[50px] object-cover" />
          <div>
            <h2 className="font-[700] text-lg lg:text-xl text-[#ffffff] ">
              YQ
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SusLoader;
