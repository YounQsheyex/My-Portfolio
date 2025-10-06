import React from "react";
import AboutMe from "../PageSegments/AboutMe";
import Footer from "../layout/Footer";
import NavBar from "../layout/NavBar";
import Hero from "../Hero";

const About = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <AboutMe />
      <Footer />
    </div>
  );
};

export default About;
