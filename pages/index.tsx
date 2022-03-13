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
import { useContext, useEffect } from "react";
import Head from "next/head";

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
  const { darkmode, toggle, setToggle } = useContext(Context);

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

  const falseToggler = (e?: React.TouchEvent<HTMLElement>) => {
    e?.stopPropagation();
    setToggle(false);
  };

  useEffect(
    () => () => {
      falseToggler();
      console.log(toggle);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <>
      <Head>
        <title>Ibrahim Sule Portfolio</title>
        <meta name="description" content="Frontend Developer Portfolio" />
        <meta
          name="keywords"
          content="frontend, front-end, Front-End, developer, ibrahim, ibraheem, ibraheemsulay, ibraheem sule, ibrahim sule, nextjs, next, vue, nuxt"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="twitter:image:src"
          content="https://res.cloudinary.com/ibraheemsulay/image/upload/v1647149179/portfolio-v3_tflfex.png"
        />

        <meta name="twitter:site" content="Ibrahim Sule" />

        <meta name="twitter:title" content="Ibrahim Sule" />
        <meta
          name="twitter:description"
          content="Developer portfolio of Ibrahim Sule"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/ibraheemsulay/image/upload/v1647149179/portfolio-v3_tflfex.png"
        />
        <meta property="og:site_name" content="Ibrahim Sule" />

        <meta property="og:title" content="Ibrahim Sule" />

        <meta property="og:url" content="www.ibraheemsulay.vercel.app" />

        <meta
          property="og:description"
          content="Developer portfolio of Ibrahim Sule"
        />
      </Head>

      <div>
        <MainBodyStyle
          className="main"
          darkMode={darkmode}
          onTouchStart={e => falseToggler(e)}
        >
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
    </>
  );
};

export default MainBody;
