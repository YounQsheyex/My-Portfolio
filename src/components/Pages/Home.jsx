import React from "react";
import NavBar from "../layout/NavBar";
import Hero from "../Hero";
import TechStack from "../TechStack";
import Projects from "../Projects";
import Footer from "../layout/Footer";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <TechStack />
      <Projects />
      <Footer />
    </div>
  );
};

export default Home;
