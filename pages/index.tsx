import type { NextPage } from "next";
import { Container } from "../styles/Container.styled";
import { MainBodyStyle } from "../styles/MainBody.styled";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import ProjectsLayout from "../components/ProjectsLayout";
import Workflow from "../components/Workflow";
import Contact from "../components/Contact";
import { createClient } from "contentful";
import { IIndexPageProps } from "../ts-types/componentTypes";
import { Context } from "../assets/Context";
import { useContext } from "react";

const id = process.env.CONTENTFUL_SPACE_ID,
  token = process.env.CONTENTFUL_TOKEN;

export async function getStaticProps() {
  if (!id || !token) return { props: { projects: {} } };
  const clients = createClient({
    space: id,
    accessToken: token,
  });

  const res = await clients.getEntries({
    content_type: "projects",
  });

  const about = await clients.getEntries({
    content_type: "about",
  });

  return {
    props: {
      projects: res.items,
      about: about.items,
    },
  };
}

const MainBody: NextPage<IIndexPageProps> = ({ projects, about }) => {
  const { darkmode } = useContext(Context);
  const keyProjects = projects.filter(p => {
    switch (p.fields.title) {
      case "Formpl":
        return true;
      case "Github Trends Page":
        return true;
      case "Covid Statistics":
        return true;
      default:
        return false;
    }
  });

  return (
    <div>
      <MainBodyStyle className="main" darkMode={darkmode}>
        <Container>
          <Hero />
        </Container>
        <div>
          <About about={about} />
        </div>

        <div className="skills">
          <Skills />
        </div>
        <div className="project-layout">
          <ProjectsLayout projects={keyProjects} />
        </div>
        <div className="workflow">
          <Workflow />
        </div>
        <div className="contact">
          <Contact />
        </div>
      </MainBodyStyle>
    </div>
  );
};

export default MainBody;
