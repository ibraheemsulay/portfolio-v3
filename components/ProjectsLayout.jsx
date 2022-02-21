import image from "../assets/img/image";
import Projects from "./Projects";
import { ProjectsStyle } from "../styles/ProjectsStyle.styled";
import { Row } from "../styles/Row.styled";
import projectList from "../assets/projectList";
const ProjectsLayout = () => {
  const { githubtrends, bejamas, weatherapp } = image;
  return (
    <ProjectsStyle>
      <Row>
        <h3>Projects</h3>
      </Row>
      {projectList.map((p, i) => {
        if (i > 2) return;

        return (
          <Projects
            key={i}
            title={p.name}
            image={p.image}
            summary={p.summary}
            tools={p.tools}
            index={i}
          />
        );
      })}
    </ProjectsStyle>
  );
};

export default ProjectsLayout;
