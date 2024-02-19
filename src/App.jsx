import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";
import { scroller } from "react-scroll";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/material";
import Meta from "./components/Meta";
import Navbar from "./components/NavBar";
import About from "./components/About";
import Experince from "./components/Experince";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import ScrollToTopButton from "./components/ScrollToTopButton";
import details from "../details.json";
import "./App.css";

function App() {
  const { theme } = useContext(ThemeContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.classList.remove("light-theme", "dark-theme");
    document.body.classList.add(
      theme === "dark" ? "dark-theme" : "light-theme"
    );
  }, [theme]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (section) => {
    scroller.scrollTo(section, {
      duration: 200,
      offset: -80,
    });
  };

  return (
    <>
      {loading ? (
        <Box className="loading-screen d-flex justify-content-center align-items-center">
          <CircularProgress size="2rem" color="inherit" />
        </Box>
      ) : (
        <>
          <Navbar scrollToSection={scrollToSection} />
          {details && (
            <>
              <Meta meta={details.meta} />
              <About about={details.about} />
              <Experince experiences={details.experiences} />
              <Projects projects={details.projects} />
              <Education educations={details.educations} />
              <Contact contact={details.contact} />
            </>
          )}
          <Footer />
          <ScrollToTopButton onClick={scrollToSection} />
        </>
      )}
    </>
  );
}

export default App;
