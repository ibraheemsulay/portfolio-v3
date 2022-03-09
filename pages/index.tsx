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
  return {
    props: {
      projects: res.items,
    },
    revalidate: 30,
  };
}

const MainBody: NextPage<IIndexPageProps> = ({ projects }) => {
  const keyProjects = projects.filter(p => {
    switch (p.fields.title) {
      case "Formpl":
        return true;
      case "Github Trends":
        return true;
      case "Covid Stats":
        return true;
      default:
        return false;
    }
  });

  console.log(keyProjects);
  return (
    <div>
      <MainBodyStyle className="main">
        <Container>
          <Hero />
        </Container>
        <div className="animate">
          <About />
        </div>

        <div className="animat">
          <Skills />
        </div>
        <div className="animate">
          <ProjectsLayout projects={keyProjects} />
        </div>
        <div className="animate">
          <Workflow />
        </div>
        <div className="animate">
          <Contact />
        </div>
      </MainBodyStyle>
    </div>
  );
};

export default MainBody;
