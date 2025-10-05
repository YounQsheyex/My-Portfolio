import React from "react";
import TechStackSegment from "../PageSegments/TechStackSegment";
import Footer from "../layout/Footer";
const TechStack = () => {
  return (
    <div>
      <TechStackSegment />
      <div className="mt-5 lg:mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default TechStack;
