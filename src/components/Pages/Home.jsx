import React from "react";
import NavBar from "../layout/NavBar";
import Hero from "../Hero";
import TechStack from "../TechStack";
import Projectsx from "../Projectsx";
import Footer from "../layout/Footer";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <TechStack />
      <Projectsx limit={6} />
      <Footer />
    </div>
  );
};

export default Home;
