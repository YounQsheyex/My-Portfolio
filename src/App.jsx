import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import SusLoader from "./components/SusLoader";
import { ScrollToTop } from "./components/ScrollToTop";

const HomePage = lazy(() => import("./components/Pages/Home"));
const AboutPage = lazy(() => import("./components/Pages/About"));
const TechStack = lazy(() => import("./components/Pages/TechStack"));
const Projects = lazy(() => import("./components/Pages/Projects"));
const Contact = lazy(() => import("./components/Pages/Contact"));

function App() {
  return (
    <>
      <div className="bg-gradient-to-br from-[#000000] via-[#026b08]  to-[#000000]">
        <Router>
          <Suspense fallback={<SusLoader />}>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/tech-stack" element={<TechStack />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </Router>
      </div>
    </>
  );
}

export default App;
