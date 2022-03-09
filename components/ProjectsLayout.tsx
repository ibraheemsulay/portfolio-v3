import Projects from "./Projects";
import { ProjectsStyle } from "../styles/ProjectsStyle.styled";
import { Row } from "../styles/Row.styled";
import projectList from "../assets/projectList";
import { IAllProjectsProps } from "../ts-types/componentTypes";

const ProjectsLayout: React.FC<IAllProjectsProps> = ({ projects }) => {
  return (
    <ProjectsStyle className="animate">
      <Row>
        <h3>Projects</h3>
      </Row>
      {projects.map((p, i) => (
        <Projects
          key={p.sys.id}
          title={p.fields.title}
          image={p.fields.photo}
          summary={p.fields.summary}
          tools={p.fields.tool.join(", ")}
          index={i}
        />
      ))}
    </ProjectsStyle>
  );
};

export default ProjectsLayout;
