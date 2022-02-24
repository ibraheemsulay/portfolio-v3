import SkillsStyle from "../styles/SkillsStyle.styled";
import { Row } from "../styles/Row.styled";
import CssIcon from "../assets/svgs/CssIcon";
import HtmlIcon from "../assets/svgs/HtmlIcon";
import SassIcon from "../assets/svgs/SassIcon";
import TypescriptIcon from "../assets/svgs/TypescriptIcon";
import TailwindIcon from "../assets/svgs/TailwindIcon";
import ReactIcon from "../assets/svgs/ReactIcon";
import NuxtIcon from "../assets/svgs/NuxtIcon";
import BootstrapIcon from "../assets/svgs/BootstrapIcon";
import VueIcon from "../assets/svgs/VueIcon";
import JavascriptIcon from "../assets/svgs/JavascriptIcon";
import GitIcon from "../assets/svgs/GitIcon";
import FirebaseIcon from "../assets/svgs/FirebaseIcon";
import Blob from "../assets/svgs/Blob";

const About = () => {
  return (
    <SkillsStyle>
      <h3>My Skills</h3>
      <Row>
        <Blob />
        <div className="icon">
          <CssIcon />
          <h5>CSS</h5>
        </div>
        <div className="icon">
          <HtmlIcon />
          <h5>HTML</h5>
        </div>
        <div className="icon">
          <SassIcon />
          <h5>SASS</h5>
        </div>
        <div className="icon">
          <TypescriptIcon />
          <h5>TYPESCRIPT</h5>
        </div>
        <div className="icon">
          <TailwindIcon />
          <h5>TAILWIND</h5>
        </div>
        <div className="icon">
          <ReactIcon />
          <h5>REACT</h5>
        </div>
        <div className="icon">
          <NuxtIcon />
          <h5>NUXT</h5>
        </div>
        <div className="icon">
          <BootstrapIcon />
          <h5>BOOTSTRAP</h5>
        </div>
        <div className="icon">
          <VueIcon />
          <h5>VUE</h5>
        </div>
        <div className="icon">
          <JavascriptIcon />
          <h5>JAVASCRIPT</h5>
        </div>
        <div className="icon">
          <GitIcon />
          <h5>GIT</h5>
        </div>
        <div className="icon">
          <FirebaseIcon />
          <h5>FIREBASE</h5>
        </div>
      </Row>
    </SkillsStyle>
  );
};

export default About;
