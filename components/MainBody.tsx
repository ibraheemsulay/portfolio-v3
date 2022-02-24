import { Row } from "../styles/Row.styled";
import { Container } from "../styles/Container.styled";
import { MainBodyStyle } from "../styles/MainBody.styled";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import ProjectsLayout from "./ProjectsLayout";
import Workflow from "./Workflow";
import Contact from "./Contact";

const MainBody = () => {
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
