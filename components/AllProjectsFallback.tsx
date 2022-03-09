import { Container } from "../styles/Container.styled";
import { AllProjectsFallBackStyle } from "../styles/AllProjectsFallbackStyle.styled";

function AllProjectsFallBack() {
  return (
    <AllProjectsFallBackStyle>
      <Container className="container">
        <div className="title">
          <h3>All Projects</h3>
        </div>
        {[...new Array(4)].map((p: any, i: number) => (
          <div className="card" key={i}>
            <span className="animating"></span>
          </div>
        ))}
      </Container>
    </AllProjectsFallBackStyle>
  );
}

export default AllProjectsFallBack;
