import { AllProjectsStyle } from "../styles/AllProjectsStyle.styled";
import { Button } from "../styles/Button.styled";
import { Container } from "../styles/Container.styled";
import projectList from "../assets/projectList.js";
import Image from "next/image";

const AllProjects = () => {
  return (
    <AllProjectsStyle>
      <Container className="container">
        <div className="title">
          <h3>All Projects</h3>
        </div>
        {projectList.map((p, i) => (
          <div className="card" key={i}>
            <Image src={p.image} alt="project webpage" layout="fill" />
            <div className="details">
              <h4>{p.name}</h4>
              <p>
                <strong>Summary:</strong> <small>{p.summary}</small>
              </p>
              <p>
                <strong>Tools:</strong> <small>{p.tools}</small>
              </p>
              <div>
                <a href={p.link} target="_blank" rel="noreferrer">
                  <Button className="btn">View Project</Button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </Container>
    </AllProjectsStyle>
  );
};

export default AllProjects;
