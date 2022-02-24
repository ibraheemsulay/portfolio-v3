import { ProjectsStyle } from "../styles/ProjectsStyle.styled";
import { ProjectsImgStyle } from "../styles/ProjectsImgStyle.styled";
import { Button } from "../styles/Button.styled";
import { IProjectsProps } from "../ts-types/componentTypes";
import Image from "next/image";

const Projects: React.FC<IProjectsProps> = ({
  title,
  image,
  summary,
  tools,
  index,
}) => {
  return (
    <>
      <ProjectsStyle i={index}>
        <ProjectsImgStyle className="about">
          <div>
            <Image src={image} alt="project landing page view" layout="fill" />
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
