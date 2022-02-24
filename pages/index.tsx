import type { NextPage } from "next";
import { Container } from "../styles/Container.styled";
import { MainBodyStyle } from "../styles/MainBody.styled";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import ProjectsLayout from "../components/ProjectsLayout";
import Workflow from "../components/Workflow";
import Contact from "../components/Contact";

const MainBody: NextPage = () => {
  return (
    <MainBodyStyle>
      <Container>
        <Hero />
      </Container>
      <About />
      <Skills />
      <ProjectsLayout />
      <Workflow />
      <Contact />
    </MainBodyStyle>
  );
};

export default MainBody;
