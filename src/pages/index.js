import React, { useEffect, useState } from "react";
import Darkmode from "../component/DarkModeComponent";
import LanguageComponent from "../component/LanguageComponent";
import Nav from "../component/NavComponent";
import Logo from "../component/LogoComponent";
import BeginPage from "./BeginPage";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import SkillPage from "./SkillPage";
import WorksPage from "./WorksPage";
import Contact from "./Contact";
import { Box } from "@mui/material";


const Index = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      {toggle === false ? (
        <BeginPage setToggle={setToggle} />
      ) : (
        <Box>
          <Nav />
          <Logo />
          <LanguageComponent/>
          <Darkmode />
          <section id="home">
            <HomePage/>
          </section>
          <section id="about">
            <AboutPage />
          </section>
          <section id="skill">
            <SkillPage />
          </section>
          <section id="works">
            <WorksPage />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </Box>
      )}
    </>
  );
};

export default Index;
