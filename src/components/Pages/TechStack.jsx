import React from "react";
import TechStackSegment from "../PageSegments/TechStackSegment";
import Footer from "../layout/Footer";
import NavBar from "../layout/NavBar";
import Hero from "../Hero";
const TechStack = () => {
  return (
    <div>
        <NavBar/>
        <Hero/>
      <TechStackSegment />
      <div className="mt-5 lg:mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default TechStack;
