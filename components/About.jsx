/* eslint-disable react/no-unescaped-entities */
import { AboutStyle } from "../styles/AboutStyle.styled";
import { HeroStyle } from "../styles/Hero.styled";
import { AboutImgStyle } from "../styles/AboutImgStyle.styled";
import Blob from "../assets/svgs/Blob";
import img from "../assets/img/image";
import { Row } from "../styles/Row.styled";
import { Button } from "../styles/Button.styled.js";
import Link from "next/link";
import Image from "next/image";

const cvLink =
  "https://drive.google.com/file/d/1HQzRTf-2CH9dqVqSEYUXtzGFaDWDXRKu/view?usp=sharing";

const About = () => {
  return (
    <AboutStyle>
      <Blob />
      <Row id="about">
        <h3>About Me</h3>
      </Row>
      <HeroStyle>
        <AboutImgStyle className="about">
          <div>
            <Image
              src={img.avi}
              alt="ibrahim picture"
              layout="fill"
              priority={true}
            />
          </div>
        </AboutImgStyle>
        <div className="title">
          <p>
            My name is Ibrahim Sule, and I'm a
            <strong> Front-End Developer</strong> from Lagos, Nigeria. I have an
            obsession for building pixel perfect user interfaces for the web and
            I'm looking forward to building yours.
          </p>
          <Link href={cvLink} download={true}>
            <a>
              <Button>View CV</Button>
            </a>
          </Link>
        </div>
      </HeroStyle>
    </AboutStyle>
  );
};

export default About;
