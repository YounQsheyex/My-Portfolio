import "./App.css";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <TechStack />|
      <Projects />|
      <Footer />
    </>
  );
}

export default App;
