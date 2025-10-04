import React from "react";
import { BounceLoader } from "react-spinners";
// import logo from "../assets/logo.png";

const SusLoader = ({ height }) => {
  return (
    <div
      style={{ height: height ? height : "100vh" }}
      className={`flex items-center justify-center`}
    >
      <div className="flex items-center gap-3">
        <BounceLoader color="#d3e97a" />
        <div className="flex gap-2 items-center">
          <img src="" alt="logo" />
          <div>
            <h2 className="font-medium text-lg lg:text-xl ">YQ</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SusLoader;
