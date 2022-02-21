import { ProjectsStyle } from "../styles/ProjectsStyle.styled";
import { ProjectsImgStyle } from "../styles/ProjectsImgStyle.styled";
import { Button } from "../styles/Button.styled.js";

const Projects = ({ title, image, summary, tools, index }) => {
  return (
    <>
      <ProjectsStyle i={index}>
        <ProjectsImgStyle className="about">
          <div>
            <img src={image} />
          </div>
        </ProjectsImgStyle>
        <div className="title">
          <h4>{title}</h4>
          <p>
            <span>Summary: </span> {summary}
          </p>
          <p>
            <span>Tools: </span> {tools}
          </p>
          <Button>GET TO KNOW ME</Button>
        </div>
      </ProjectsStyle>
    </>
  );
};

export default Projects;
