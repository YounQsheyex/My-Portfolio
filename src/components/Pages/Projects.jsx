import React from "react";
import Footer from "../layout/Footer";
import NavBar from "../layout/NavBar";
import Projectsx from "../Projectsx";

const Projects = () => {
  return (
    <div>
      <NavBar />
      <div className="pt-40">
        <Projectsx />
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
