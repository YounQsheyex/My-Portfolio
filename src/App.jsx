import "./App.css";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <div className="bg-gradient-to-br from-[#000000] via-[#773085] to-[#140113]">
        <NavBar />
        <Hero />
        <TechStack />|
        <Projects />|
        <Footer />
      </div>
    </>
  );
}

export default App;
